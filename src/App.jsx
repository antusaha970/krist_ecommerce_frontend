import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Navbar from "./components/Shared/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
