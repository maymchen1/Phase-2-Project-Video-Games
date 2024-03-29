import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ViewCart from "./components/carts/ViewCart";
import ItemList from "./components/items/ItemList";
import Logo from "./components/navigation/Logo";
import Navbar from "./components/navigation/Navbar";
import Home from "./components/static/Home";

const App = () => {
  const [currentCart, setCurrentCart] = useState({items: []})
    const [items, setItems] = useState([])
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/items" element={<ItemList />} />
//         <Route path="/checkout" element={<ViewCart />} />
//       </Routes>
//       </Router>
//   );
// }

return (
  <Router>
    <Logo/>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/items" element={<ItemList items={items} setItems={setItems} />} />
      <Route path="/checkout" element={<ViewCart currentCart={currentCart} setCurrentCart={setCurrentCart} />} />
    </Routes>
  </Router>
);
}
export default App;
