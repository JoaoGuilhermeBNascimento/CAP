import { ThemeProvider } from 'styled-components';
import defaultTheme from '../Assets/styles/themes/default';
import { Barra } from '../components/Barra';
import GlobalStyle from '../Assets/styles/GlobalStyle';
import { Header } from '../components/Header';
import { Carrousel } from '../components/Carrousel';
import { MiddleHeader } from '../components/MiddleHeader';
import { Cards } from '../components/Cards';
import { Footer } from '../components/Footer';

function App() {
  return (
    (
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Barra />
        <Header />
        <Carrousel />
        <MiddleHeader />
        <Cards
        />
        <Footer />
      </ThemeProvider>

    )
  );
}

export default App;
