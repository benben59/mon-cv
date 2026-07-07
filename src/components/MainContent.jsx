import Profil from "./Profil";
import Experience from "./Experience";
import Formation from "./Formation";

function MainContent() {
    return (
        <main className="main-content">
            <Profil />
            <Experience />
            <Formation />
        </main>
    );
}

export default MainContent;