import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageForm from "./pages/form";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
