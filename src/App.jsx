import { Route, Router, Routes } from "react-router";
import "./App.css";
import BirthDataForm from "./components/BirthDataForm/BirthDataForm";
import Result from "./components/Result/Result";
import { BirthProvider } from "./context/BirthContext";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <BirthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<BirthDataForm />} />
        <Route path="/create-chart" element={<Result />} />

        <Route path="contact" element={<Contact />} />
      </Routes>
    </BirthProvider>
  );
}

export default App;
