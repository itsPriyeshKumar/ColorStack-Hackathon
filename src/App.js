import logo from "./logo.svg";
import "./App.css";
import AppHeader from "./nav/header";
import { Route, Router, Routes } from "react-router";
import Home from "./pages/home";
import Profile from "./pages/profile";
import MyNetwork from "./pages/myNetwork";
import FindPeople from "./pages/findPeople";
import Blog from "./pages/blog";

function App() {
  const isAuth = true;
  const ProtectedRoutes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Home />} />
      <Route path="/my-network" element={<MyNetwork />} />
      <Route path="/find-new-people" element={<FindPeople />} />
      <Route path="/blog" element={<Blog />} />

      <Route path="/profile" element={<Profile />} />
    </Routes>
  );

  const PublicRoutes = (
    <Routes>
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
  return (
    <div className="App">
      {isAuth && <AppHeader />}
      {isAuth ? ProtectedRoutes : PublicRoutes}
    </div>
  );
}

export default App;
