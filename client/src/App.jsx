import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Navbar from "./layout/Navbar";
import Login from "./auth/Login";
import Signup from "./auth/Signup";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>

            <Route path="/" element={<Home />} />

          </Route>
          <Route path="/auth/login" element={<Login/>}/>
          <Route path="/auth/signup" element={<Signup/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
