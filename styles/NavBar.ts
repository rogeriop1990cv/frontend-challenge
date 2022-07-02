import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  transform: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height: 88px;
  `
export const Links = styled.div`
  background: transparent;
  margin-right: 20px;
  width:60%;
  > a {
    background: transparent;
    margin-left: 50px;
  }
  `

export const Infos = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
  background: transparent;
  margin-right: 70px;
  
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 2px solid gray;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
  }
`
 
export const Logo = styled.div`
   width: 140px;
   background: transparent;
   margin-left: 70px;

`

export const ImageCustom = styled(Image)`
  background: white;
`
