import React from "react";
import styled, { css } from "styled-components";
import Pages from "../data/Pages";


const Header = ({ history }) => {
    return (
        <ButtonDiv>
            <Button onClick={() => {history.goback()}}></Button>
            {Pages.map(data => {
                    return(
                    <Button onClick={() => {history.push(data.name)}} key={data.id}>
                        {data.text}
                    </Button>
                    )
            })}
        </ButtonDiv>
    )
}

const ButtonDiv = styled.div`
  margin: auto;
`

const Button = styled.button`
  margin: auto;
`

export default Header;