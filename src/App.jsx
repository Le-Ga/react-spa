import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { Category } from "./pages/Category";
import { Recipe } from "./pages/Recipe";

function App() {
  return (
    <>
      <Router basename="/react-spa">
        <Header />
        <main className="container content">
          {/* Routes ранее был Switch , так же в Route ранее вместо element был component... */}
          {/* Routes должен содержать в себе только Route, если там окажется например наш main то будут проблемы */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contact />} />
            {/* Когда мы ставим ':' как например перед id, мы предполагаем что эта дальнейшая часть будет динамической
и это будет некий дополнительный параметр, и то как он там называется мы сможет этот параметр получить в наше приложение
и каким либо образом обработать его */}
            <Route path="/category/:name" element={<Category />} />
            <Route path="/meal/:id" element={<Recipe />} />
            <Route path="*" element={<NotFound />} />
            {/* path={*} - нужен для перевода на эту страницу в случае если не надётся никакая более */}
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
