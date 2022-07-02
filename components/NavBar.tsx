import { ImageCustom as Image } from '../styles/NavBar'
import Link from "next/link";

import { Container, Links, Infos, Logo } from "../styles/NavBar";

import logo from '../public/images/logo.svg'
import bag from '../public/images/bag.png'
import search from '../public/images/search.svg'
import userPhoto from '../public/images/user.svg'

export default function NavBar() {
  return (
    <Container>
      <Logo>
        <Image src={logo} alt="Imagem Escrito Wine" />
      </Logo>
      <Links>
        <Link href='/'>Clube</Link>
        <Link href='/'>Loja</Link>
        <Link href='/'>Produtores</Link>
        <Link href='/'>Ofertas</Link>
        <Link href='/'>Eventos</Link>
      </Links>
      <Infos>
        <div className="search">
          <Image src={search} alt="Imagem Escrito Wine" />
        </div>
        <div className="userPhoto">
          <Image className="img001" src={userPhoto} alt="Imagem Escrito Wine" />
        </div>
        <div>
          <Image src={bag} alt="Imagem Escrito Wine" />
        </div>
      </Infos>
    </Container>
  )
}
