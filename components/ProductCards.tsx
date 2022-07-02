import Image from "next/image"
import { Container, Title, PhotoProduct, DiscountPrice, Price, Discount } from "../styles/ProductCards"

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
      <div>{`${product.priceMember}`}</div>
      <div>{`${product.price}`}</div>
      <div>
        Button
      </div>
    </Container>
  )
}
