import Image from "next/image"
import { Container, Title, PhotoProduct, DiscountPrice, Price, Discount, PriceMember, PriceNonMember, ButtonAdd } from "../styles/ProductCards"
import ExceptionalValue from "./ExceptionalValue"

export type PropsProductCards = {
  id: number,
  image: string,
  name: string,
  price: number,
  discount: number,
  priceMember: number,
  priceNonMember: number,
  type: string,
  classification: string,
  size: string,
  volume: string,
  rating: number,
  avaliations: number,
  country: string,
  region: string,
  flag: string,
  sommelierComment: string,
  Rating: number,

}

export default function ProductCards(product: PropsProductCards) {

  return (
    <div>
      <Container>
        <PhotoProduct>
          <Image
            src={product.image} alt="Some alt text"
            width={123}
            height={170}
            layout='fixed'
          />
        </PhotoProduct>
        <>
          <Title>{`${product.name}`}</Title>
        </>
        <DiscountPrice>
          <Price>
          {`R$ ${product.price}`}
          </Price>
          <Discount>
          {`${product.discount}% OFF`}
          </Discount>
        </DiscountPrice>
        <PriceMember>Sócio wine <ExceptionalValue { ...product}/></PriceMember>
        <div>
        <PriceNonMember>Não sócio R$ {`${product.price}`}</PriceNonMember>
        </div>
      </Container>
      <ButtonAdd id={`${product.id}`}>
          ADICIONAR
      </ButtonAdd>
    </div>
  )
}
