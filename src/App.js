import Header from './Component/Layout/Header';

import Main from './Component/Layout/Main';
import Footer from './Component/Layout/Footer';
import CardProvider from './store/CardProvider';

import './App.css';

function App() {
  return (
      <CardProvider>
        <Header />
        <Main />
        <Footer />
      </CardProvider>
  );
}

export default App;
