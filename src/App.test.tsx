import { render, screen } from '@testing-library/react';
import App from './App';

test('should render static components properly',() => {
  render(<App />);
  const title = screen.getByText("Conheça as classes do lolzinho");
  const currentTitle = screen.getByText("Escolha Sua Classe:");
  const resetBttn = screen.getByText("Resetar");


  expect(title).toBeInTheDocument();
  expect(currentTitle).toBeInTheDocument();
  expect(resetBttn).toBeInTheDocument();
});


test("should render componentes properly", async ()=>{
  render(<App />)

  const cardAdc = screen.getByText("Atirador");

  expect(cardAdc).toBeInTheDocument();
})