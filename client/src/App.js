import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageForm from "./pages/form";
import Navbar from "./components/Navbar";
import TableList from "./pages/tableList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="flex">
          <Navbar />
          <div className="w-full">
            <Routes>
              <Route path="/" element={<PageForm />} />
              <Route path="/list" element={<TableList />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
