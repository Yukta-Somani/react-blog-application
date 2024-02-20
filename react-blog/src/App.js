import TopBar from "./components/topbar/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Setting from "./pages/settings/Setting";
import Home from "./pages/home/Home"
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import {BrowserRouter,Route, Routes} from "react-router-dom";
function App() {
  const user=false;
  return (
    <BrowserRouter>
     <TopBar/>
      <Routes>
      <Route path="/"element={<Home/>} />
      <Route path="/register" element={user ? <Register/> :<Home/>} />
      <Route path="/write"element={user?<Write/>:<Register/>} />
      <Route path="/login"element={user ? <Home/> :<Login/>} />
      <Route path="/settings"element={user?<Setting/>:<Register/>} />
      <Route path="/post/:postId"element={<Single/>} />
      </Routes>
    </BrowserRouter>
 
  );
}

export default App;
