import axios from "axios";

const Api = axios.create({
    baseURL: '',
    timeout: 10000,
    params: {},
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

Api.interceptors.request.use(
    function (config) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('accesstoken')}`
        return config;
    },
    function(error){
        return Promise.reject(error);
    }    
)

// 요청 인터셉터: 모든 요청에 Authorization 헤더 추가
Api.interceptors.request.use(
    function (config) {
        
        const accessToken = localStorage.getItem('accesstoken');
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

// 응답 인터셉터: 401 에러 처리 및 토큰 재발급 로직
Api.interceptors.response.use(
    function (response) {
        return response; // 정상 응답 처리
    },
    async function (error) {
        const originalRequest = error.config;

        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true; // 무한 루프 방지

            // Refresh Token 가져오기
            const accessToken = localStorage.getItem('accesstoken');
            const refreshToken = localStorage.getItem('refreshtoken');
            if (!refreshToken) {
                // Refresh Token이 없으면 로그인 페이지로 리다이렉트
                window.location.href = '/LoginPage';
                return Promise.reject(error);
            }
            console.log('엑세스 토큰 요청')

            try {
                // Refresh Token으로 새로운 Access Token 발급 요청
                console.log('리프레시 토큰 요청')
                const response = await axios.get('/api/v1/agent/question', {
                    headers: { 'Authorization': `Bearer ${accessToken}`,
                                'Authorization-refresh': `Bearer ${refreshToken}`}
                });

                if (response.status === 200) {
                    // 새로운 토큰 저장
                    localStorage.setItem("accesstoken", response.headers['authorization']);
                    localStorage.setItem("refreshtoken", response.headers['authorization-refresh']);
                    console.log(response.headers['authorization'])
                    console.log(response.headers['authorization-refresh'])

                    // 원래 요청의 헤더를 새로운 Access Token으로 교체
                    originalRequest.headers['Authorization'] = `Bearer ${localStorage.getItem('accesstoken')}`;

                    // 원래 요청 재시도
                    return Api(originalRequest);
                }
            } catch (err) {
                console.log('리프레시 토큰 만료')
                // Refresh Token으로도 실패 시, 로그인 페이지로 리다이렉트
                localStorage.clear(); // 토큰 삭제
                window.location.href = '/LoginPage';
                return Promise.reject(err);
            }
        }

        return Promise.reject(error); // 다른 에러는 그대로 처리
    }
);

export default Api;