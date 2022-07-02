import styled from "styled-components";

const Global = styled.div`
  background-color: white;
  font-family: 'Lato', sans-serif;
  color: #1D1D1B;
  * {
  background: transparent;
  }
`

export const PhotoProduct = styled(Global)`
  height: 178px;
  width: 198px;
`

export const Container = styled(Global)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 333px;
  width: 256px;
  border: 1px solid red;
  text-align: center;
`

export const Title = styled(Global)`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19.2px;
    display: flex;
    align-items: center;
    width: 233px;
    height: 53px;
;
`
