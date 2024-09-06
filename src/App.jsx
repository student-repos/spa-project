import { Route, Router, Routes } from "react-router";
import "./App.css";
import BirthDataForm from "./components/Form/BirthDataForm/BirthDataForm";
import Result from "./components/Form/Result/Result";
import { BirthProvider } from "./context/BirthContext";

function App() {
  return (
    <BirthProvider>
      <Routes>
        <Route path="/" element={<BirthDataForm />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BirthProvider>
  );
}

export default App;
