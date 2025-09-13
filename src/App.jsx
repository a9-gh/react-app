import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Header from "./components/Header"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import TodoList from "./components/TodoList"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/skills">Skills</Link> | 
        <Link to="/projects">Projects</Link> | 
        <Link to="/todo">Todo</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
