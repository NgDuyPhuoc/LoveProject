import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SectionHome from "./components/SectionHome";
import SectionGallery from "./components/SectionGallery";
import SectionEnding from "./components/SectionEnding";
import GalleryDetail from "./components/GalleryDetail";
import LoginPage from "./pages/LoginPage";
import "./App.css";


function App() {
  const [authenticated, setAuthenticated] = useState(false);

  if (!authenticated) {
    return <LoginPage onLoginSuccess={() => setAuthenticated(true)} />;
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Trang chính */}
        <Route
          path="/"
          element={
            <>
              <div id="home">
                <SectionHome />
              </div>
              <div id="gallery">
                <SectionGallery />
              </div>
              <div id="ending">
                <SectionEnding />
              </div>
            </>
          }
        />

        {/* Trang chi tiết ảnh hoặc video */}
        <Route path="/gallery/:type/:id" element={<GalleryDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
