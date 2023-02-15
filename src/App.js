import "./App.css";
import LoginPage from "./pages/login";
import Home from "./component/Home";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/" element={<LoginPage></LoginPage>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
