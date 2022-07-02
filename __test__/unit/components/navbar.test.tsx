import { render, screen } from '@testing-library/react'
import NavBar from '../../../components/NavBar'

describe('Testing NavBar Component', () => {
  it('should show a header with the texts "Club" "Loja" "Produtores" "Ofertas" "Eventos"', () => {
    render(<NavBar />)

    expect(screen.getByText(/Clube/i)).toBeInTheDocument()
    expect(screen.getByText(/Loja/i)).toBeInTheDocument()
    expect(screen.getByText(/Produtores/i)).toBeInTheDocument()
    expect(screen.getByText(/Ofertas/i)).toBeInTheDocument()
    expect(screen.getByText(/Eventos/i)).toBeInTheDocument()
  })
})
