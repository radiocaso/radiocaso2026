import { Route, Routes } from "react-router";
import Header from "@/components/Header";
import Home from "@/pages/Home";
import Info from "@/pages/Info";

function App() {
  return (
    <div className="px-4 py-4">
      <Header />
      <section className="py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
