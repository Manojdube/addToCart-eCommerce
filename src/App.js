import "./App.css";
import Header from "./component/Header";
import Main from "./component/Main";
import { Route, Routes } from "react-router-dom";
import Cart from "./component/Cart";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
