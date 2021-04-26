import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './golbalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData } from './components/Products/data';

function App() {
  return (
    <Router>
      <GlobalStyle />
        <Hero />
        <Products heading='Choose your favorite' data={productData} />
    </Router>
  );
}

export default App;
