import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Image from './components/Image';
import GoodsCard from './components/GoodsCard';


import Apple from "./img/products/apple.webp"
import Kiwi from "./img/products/kiwi.png"
import Banana from "./img/products/banana.png"
import Bread from "./img/products/bread.png"
import Orange from "./img/products/orange.jpg"
import Wattermelon from "./img/products/watermelon.jpg"


function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Image/>
      <h2>Task 2</h2>
      <div id="task2-container">

        <GoodsCard image={Apple} name="apple" price="25"/>
        <GoodsCard image={Kiwi} name="kiwi" price="80"/>
        <GoodsCard image={Banana} name="banana" price="70"/>
        <GoodsCard image={Bread} name="bread" price="40"/>
        <GoodsCard image={Orange} name="orange" price="100"/>
        <GoodsCard image={Wattermelon} name="wattermelon" price="38"/>
        {/* <GoodsCard photo={bread_pic} name="bread" price="30"/>
        <GoodsCard photo={butter_pic} name="butter" price="80"/>
        <GoodsCard photo={sugar_pic} name="sugar" price="20"/>
        <GoodsCard photo={coconut_pic} name="coconut" price="90"/>
        <GoodsCard photo={orange_pic} name="orange" price="60"/> */}
      </div>
      
    </div>
  );
}

export default App;
