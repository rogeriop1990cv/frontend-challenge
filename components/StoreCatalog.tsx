
import { Container } from "../styles/StoreCatalog";
import ProductCards, { PropsProductCards } from "./ProductCards";

export default function StoreCatalog({ data }: { data: PropsProductCards[] }) {
  return (
    <Container>
      <p>{data.length} produtos encontrados</p>
      <div>
        {
          data.map(
            (product, i) => <ProductCards {...product} key={i} />
          )
        }
      </div>
    </Container>
  )
}
