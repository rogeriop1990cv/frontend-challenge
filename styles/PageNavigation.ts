import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0 30px 0;
  > input {
    width: 38px;
    height: 38px;
    border: 1px solid #B6116E;
    color: #B6116E;
    border-radius: 5px;
    margin-right: 10px;
  }
  > input:nth-child(2) {
    width: 73px;
    height: 38px;
  }
  
  > input:nth-child(5){
    width: 173px;
    height: 38px;
  }

  > .selectPage {
    color: white;
    background-color: #B6116E;

  }
`
