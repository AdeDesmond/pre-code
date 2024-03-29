import { ThemeProvider, createTheme } from "@mui/material/styles";
import DarkMode from "./componets/DarkMode";
import { useState } from "react";
import Signup from "./pages/Signup";
import "./App.css";
import AppBar from "./componets/Appbar";
import Footer from "./componets/Footer";
import LandingPage from "./pages/Landingpage";
import { Routes, Route } from "react-router-dom";
import Plans from "./pages/Plans";
import LoginPage from "./pages/Login";
import NoPage from "./pages/NoPage";
import Premiumplan from "./pages/Premiumplan";
import Diary from "./pages/Diary";
import Exercise from "./pages/Exercise";
import Leaderboard from "./pages/Leaderboard";
export const BASEURL = "http://localhost:8000";
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [user, setLoginUser] = useState({});
  const AppTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <>
      <ThemeProvider theme={AppTheme}>
        <DarkMode check={darkMode} change={() => setDarkMode(!darkMode)} />
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route
              path="/"
              element={user && user._id ? <LandingPage /> : <LoginPage />}
            ></Route>
            <Route path="/plans" element={<Plans />}></Route>
            <Route
              path="/Login"
              element={<LoginPage setLoginUser={setLoginUser} />}
            ></Route>
            <Route path="/Gopremium" element={<Premiumplan />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/Diary" element={<Diary />}></Route>
            <Route path="/Exercise" element={<Exercise />}></Route>
            <Route path="/Leaderboard" element={<Leaderboard />}></Route>
          </Route>
          <Route path="*" element={<NoPage />}></Route>
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
