export const paginationGeneratorIndex = (total: number)  => {
  const keep = 9
  const dictListIndex: {
    [key: string]: number[]
  } = {
  }
  const pages = Math.round(total / 9)

  if (total <= 9) {
    dictListIndex['1'] = [0, total]
  }

  let b = keep
  let a = 0
  for (let i = 0; i < pages; i += 1) {
    dictListIndex[i + 1] = [a, b]
    a = b
    b = a + keep
  }

  return dictListIndex
}
