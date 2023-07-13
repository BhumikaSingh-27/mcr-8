import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Card from "./components/card/Card";
import Dropdown from "./components/Dropdown";
import Speaker from "./components/speaker/Speaker";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Details from "./pages/details/Details";
import Landing from "./pages/Landing";
import { useContext } from "react";
import { DataContext } from "./context/DataContext";
import Modal from "./components/modal/Modal";

function App() {
  const { isModal } = useContext(DataContext);
  return (
    <div className="App">
      {isModal && <Modal />}
      <Header />

      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/:eventId" element={<Details />}></Route>
      </Routes>
    </div>
  );
}

export default App;
