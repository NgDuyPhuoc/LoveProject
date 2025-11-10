import { useState } from "react";
<<<<<<< HEAD
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
>>>>>>> a51b743 (update)
import Navbar from "./components/Navbar";
import SectionHome from "./components/SectionHome";
import SectionGallery from "./components/SectionGallery";
import SectionEnding from "./components/SectionEnding";
<<<<<<< HEAD
=======
import GalleryDetail from "./components/GalleryDetail";
>>>>>>> a51b743 (update)
import LoginPage from "./pages/LoginPage";
import "./App.css";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  if (!authenticated) {
    return <LoginPage onLoginSuccess={() => setAuthenticated(true)} />;
  }
<<<<<<< HEAD
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
=======

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

        {/* Trang chi tiết ảnh */}
        <Route path="/gallery/:type/:id" element={<GalleryDetail />} />

      </Routes>
    </Router>
>>>>>>> a51b743 (update)
  );
}

export default App;
