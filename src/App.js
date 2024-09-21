import logo from "./logo.svg";
import "./App.css";
import AppHeader from "./nav/header";
import { Route, Routes } from "react-router";
import Home from "./pages/home";
import Profile from "./pages/profile";
import MyNetwork from "./pages/myNetwork";
import FindPeople from "./pages/findPeople";
import Blog from "./pages/blog";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/my-network" element={<MyNetwork />} />
        <Route path="/find-new-people" element={<FindPeople />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
