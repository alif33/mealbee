import { 
  BrowserRouter, 
  Routes, 
  Route
} from "react-router-dom"
import Home from "./pages/home"
import Blog from "./pages/blog"
import Login from "./pages/login"

function App() {
  return (
    <div className="max-w-xl min-h-screen mx-auto bg-white text-black overflow-y-hidden overflow-x-hidden">
      <div className="px-3">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
