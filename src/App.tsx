import { ThemeProvider } from 'styled-components';
import Classe from './components/classe/Classe';
import { defaultTheme, adcTheme, bruiserTheme, assassinTheme, supportTheme, mageTheme } from './styles/themes';
import { GlobalStyle } from "./styles/global";
import { AppWrapper, ClassesWrapper } from "./styles/App";
import { useState } from 'react';
import ClassDesc from './components/classDesc/ClassDes';

function App() {
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);
  const [currentTitle, setCurrentTitle] = useState("Escolha Sua Classe:")

  function switchTheme(currentTheme: string){
    console.log(currentTheme);
    switch(currentTheme){
      case "Lutador":
        setCurrentTheme(bruiserTheme);
        setCurrentTitle("Lutador");
      break;

      case "Assassino":
        setCurrentTheme(assassinTheme);
        setCurrentTitle("Assassino");
      break;

      case "Mago":
        setCurrentTheme(mageTheme);
        setCurrentTitle("Mago");
      break;

      case "Atirador":
      setCurrentTheme(adcTheme);
      setCurrentTitle("Atirador");
      break;

      case "Suporte":
        setCurrentTheme(supportTheme);
        setCurrentTitle("Suporte");
      break;

      default:
        setCurrentTheme(defaultTheme);
        setCurrentTitle("Escolha Sua Classe:");
      break;
    }
  }


  return (
    <>
    <ThemeProvider theme={currentTheme}>
      <AppWrapper>
      <header>
      <h1 className='title'>Conheça as classes do lolzinho</h1>
      </header>
      <div className="center-content">

      <h1 className='class-title'>{currentTitle}</h1>
      <ClassesWrapper>
        <Classe changeTheme={(currentTheme) => switchTheme(currentTheme)} gameClass="Lutador"/>
        <Classe changeTheme={(currentTheme) => switchTheme(currentTheme)} gameClass="Assassino"/>
        <Classe changeTheme={(currentTheme) => switchTheme(currentTheme)} gameClass="Mago"/>
        <Classe changeTheme={(currentTheme) => switchTheme(currentTheme)} gameClass="Atirador"/>
        <Classe changeTheme={(currentTheme) => switchTheme(currentTheme)} gameClass="Suporte"/>
      </ClassesWrapper>
      <p
      className='reset-btn'
      onClick={()=>{
        switchTheme("")
      }}
      >Resetar</p>
      </div>

      <ClassDesc selectedClass={currentTitle}/>
      </AppWrapper>
      <GlobalStyle />
    </ThemeProvider>
    </>
  );
}

export default App;
