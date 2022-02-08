import React,{useState} from 'react';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [products]=useState([
    {
      name: 'AA Battery',
      cost:'₹229',
      image:'https://m.media-amazon.com/images/I/71FJJEM2VgL._AC_SR240,110_QL70_.jpg'
    },
    {
      name: 'Philips LED Bulb',
      cost:'₹98',
      image:'https://m.media-amazon.com/images/I/51L72b6ArpL._AC_UL480_FMwebp_QL65_.jpg'
    },
    {
      name: 'Smart Watch',
      cost:'₹1999',
      image:'https://m.media-amazon.com/images/I/61Qokvo0JSL._AC_SR146,118_QL70_.jpg'
    }
  ]);

  const addToCart = (product) =>{
    console.log('we are in addToCart');
    setCart([...cart, product]);
  };
  return (
    <div className="App">
      <header>
        <button> Go to Cart ({cart.length})</button>
      </header>
      <h1>Products</h1>
      <div className="products">
      {products.map((product, idx)=>(
        <div classNmae="product" key={idx}>
          <h3>{product.name}</h3>
          <h4>{product.cost}</h4>
          <img src ={product.image} alt={product.name} />
          <button onClick={() => addToCart(product)}> Add to Chart</button>
          </div>
      ))}
    </div>
    </div>
  );
}

export default App;
