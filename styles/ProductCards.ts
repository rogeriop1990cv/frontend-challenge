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
  height: 328px;
  width: 256px;
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

export const DiscountPrice = styled(Global)`
  display: flex;
  font-size: 11px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0px;
`

export const Price = styled(Global)`
  color:  #888888;
  text-decoration: line-through;
  font-style: italic;
  margin-right: 5px;
`

export const Discount = styled(Global)`
  background-color: #F79552;
  color: white;
  border-radius: 5%;
  width: 55px;
`

export const PriceMember = styled(Global)`
  display: flex;
  align-items: baseline;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  width: 160px;
  height: 27px;
`

export const PriceNonMember = styled(Global)`
  font-size: 12px;
  font-weight: 700;
  color: #888888;
`

export const ButtonAdd = styled.button`
  background-color:#7EBC43;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 256px;
  height: 40px;
  border-radius: 3px;
  margin: 15px 0 30px 0;
`
