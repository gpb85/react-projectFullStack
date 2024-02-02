import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import AppContextProvider from "./context/AppContext";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import SignInForm from "./pages/SignInForm";
import SignUpForm from "./pages/SignupForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppContextProvider>
          <Navbar />
          <SignUpForm />

          <Footer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AppContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
