import { useState } from "react";
import Navbar from "./components/Navbar";
import SectionHome from "./components/SectionHome";
import SectionGallery from "./components/SectionGallery";
import SectionEnding from "./components/SectionEnding";
import LoginPage from "./pages/LoginPage";
import "./App.css";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  if (!authenticated) {
    return <LoginPage onLoginSuccess={() => setAuthenticated(true)} />;
  }
  return (
    <div>
      <Navbar />
      <div id="home">
        <SectionHome />
      </div>
      <div id="gallery">
        <SectionGallery />
      </div>
      <div id="ending">
        <SectionEnding />
      </div>
    </div>
  );
}

export default App;
