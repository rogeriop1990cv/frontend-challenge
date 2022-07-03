import { Dispatch, MouseEvent, SetStateAction } from "react";
import { Container } from "../styles/PageNavigation";

type PageNavigation = {
  setPage: Dispatch<SetStateAction<number>>
}

export default function PageNavigation( { setPage }: PageNavigation) {
  return (
    <Container>
      <input className="selectPage" type="button" value="1" onClick={(e) => selectPageClickColor(e, setPage)}/>
      <input type="button" value="2" onClick={(e) => selectPageClickColor(e, setPage)}/>
      <input type="button" value="3" onClick={(e) => selectPageClickColor(e, setPage)}/>
      <input type="button" value="..." />
      <input type="button" value="Proximo >>" />
    </Container>
  )
}

const selectPageClickColor = (event: MouseEvent<HTMLInputElement>, setPage: Dispatch<SetStateAction<number>>) => {
  const allInputButton = document.querySelectorAll('div > input[type=button]')
  allInputButton.forEach((element) => element.classList.remove('selectPage'))
  const pageClick = Number(event.currentTarget.value)
  setPage(pageClick)
  event.currentTarget.classList.add('selectPage')
}
