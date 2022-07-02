import { Container } from "../styles/RefinePrice"

const fullPriceFilter = [
  ['40'],
  ['40', '60'],
  ['100', '200'],
  ['200', '500'],
  ['500']
]

const lastItem = fullPriceFilter.length - 1

const slicePriceFilter = fullPriceFilter.slice(1, lastItem)

export default function RefinePrice() {
  return (
    <Container>
      <h4>Refine sua busca</h4>
      <p>Por preço</p>
      <div>
        <input type="radio" id={'0' + fullPriceFilter[0]} name="drone" value={fullPriceFilter[0]} />
        <label htmlFor={'0' + fullPriceFilter[0]}>Até R${fullPriceFilter[0]}</label>
      </div>
      {
        slicePriceFilter.map((price, index) => (
          <div key={'1' + price[0]}>
            <input type="radio" id={'1' + price[0]} name="drone" value={`${price[0]} ${price[1]}`} />
            <label htmlFor={'1' + price[0]}>R${price[0]} A R${price[1]}</label>
          </div>
        ))
      }
      <div>
        <input type="radio" id={'2' + fullPriceFilter[lastItem]} name="drone" value={fullPriceFilter[lastItem]} />
        <label htmlFor={'2' + fullPriceFilter[lastItem]}>Acima de R${fullPriceFilter[lastItem]}</label>
      </div>
    </Container>

  )
}


