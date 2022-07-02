import styled from "styled-components"

export const Container = styled.div`
   width: 256px;
  > h4 {
    width: 256px;
    height: 24px;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
  }

  > p {
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #333333;
  }

  > div > input {
    margin: 7px 12px 15px 0;
  }
  
  > div > label {
    color: #1D1D1B;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.2px;
  }
`
