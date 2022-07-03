
import { useState } from "react";
import { paginationGeneratorIndex } from "../helper";
import { Catalog, Container } from "../styles/StoreCatalog";
import PageNavigation from "./PageNavigation";
import ProductCards, { PropsProductCards } from "./ProductCards";


export default function StoreCatalog({ data }: { data: PropsProductCards[] }) {

  const [productList, _setProductList] = useState(data)
  const [page, setPage] = useState(1)


  const pagingIndex: {
    [key: number]: number[]
  } = paginationGeneratorIndex(data.length)

  return (
    <Container>
      <div>
        <p>{data.length} produtos encontrados</p>
      </div>
      <Catalog>
        {
          productList.slice(pagingIndex[page][0], pagingIndex[page][1]).map(
            (product, i) => <ProductCards {...product} key={i} />
          )
        }
      </Catalog>
      <PageNavigation setPage={setPage} />
    </Container>
  )
}
