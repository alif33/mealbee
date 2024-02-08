import { 
  BrowserRouter, 
  Routes, 
  Route
} from "react-router-dom"
import Home from "./pages/home"
import Blog from "./pages/blog"

function App() {
  return (
    <div className="max-w-xl min-h-screen mx-auto bg-black text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/blog" element={<Blog/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
