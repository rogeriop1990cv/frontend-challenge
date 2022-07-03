type TDictListIndex = {
  [key: string]: number[]
}

export const paginationGeneratorIndex = (total: number)  => {
  const keep = 9
  const dictListIndex: TDictListIndex = {
  }

  const pages = Math.round(total / keep)

  if (total <= keep) {
    dictListIndex[1] = [0, total]
  }

  let lastIndex = keep
  let curIndex = 0
  for (let i = 0; i < pages; i += 1) {
    dictListIndex[i + 1] = [curIndex, lastIndex]
    curIndex = lastIndex
    lastIndex = curIndex + keep
  }

  return dictListIndex
}
