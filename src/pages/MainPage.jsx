import Navbar from "../components/Navbar";
import SectionHome from "../components/SectionHome";
import SectionGallery from "../components/SectionGallery";
import SectionEnding from "../components/SectionEnding";

function MainPage() {
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

export default MainPage;
