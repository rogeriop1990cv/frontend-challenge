import { FormatValue } from "../styles/ExceptionalValue"

type priceMember = { priceMember: number}

export default function ExceptionalValue({ priceMember }: priceMember) {

  const priceMemberDecimal = priceMember.toLocaleString('pt-BR',
    { maximumFractionDigits: 2, minimumFractionDigits: 2 })

  const [firstPart, secondPart] = priceMemberDecimal.toString().split(',')
  return (
    <FormatValue>
      <p>R$ <span>{firstPart }</span>, {secondPart }</p>
    </FormatValue>
  )
}
