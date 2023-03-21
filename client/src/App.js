import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Article from "./pages/Article";
import ArticlesList from "./pages/ArticlesList";
// Components
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/about" element={<About></About>}/>
          <Route path="/articles" element={<ArticlesList></ArticlesList>}/>
          <Route path="/article/:name" element={<Article></Article>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
