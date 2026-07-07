import photo from "../assets/WIN_20250123_10_00_10_Pro.jpg";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub } from "react-icons/fa";

function Sidebar() {

    const skills = [
        { nom: "HTML", niveau: 70 },
        { nom: "CSS", niveau: 70 },
        { nom: "React", niveau: 60 },
        { nom: "JavaScript", niveau: 65 },
        { nom: "Java", niveau: 55 },
        { nom: "SQL", niveau: 50 },
        { nom: "Python", niveau: 60 },
        { nom: "C#", niveau: 70 },
        { nom: "Git", niveau: 60 },
    ];

    const languages = [
        { nom: "Anglais (C1)", niveau: 75 },
    ];

    return (
        <aside className="sidebar">

            <img
                src={photo}
                alt="Photo de Benoît"
                className="photo"
            />

            <h2>Contact</h2>

            <p><FaEnvelope /> marliere.benoit59@gmail.com</p>
            <p><FaPhone /> 06 58 92 19 31</p>
            <p><FaMapMarkerAlt /> Samadet</p>

            <p>
                <FaGithub />{" "}
                <a
                    href="https://github.com/benben59"
                    target="_blank"
                    rel="noreferrer"
                >
                    github.com/benben59
                </a>
            </p>

            <h2>Compétences</h2>

            {skills.map((skill) => (
                <div className="skill" key={skill.nom}>
                    <span>{skill.nom}</span>

                    <div className="bar">
                        <div
                            className="fill"
                            style={{ width: `${skill.niveau}%` }}
                        ></div>
                    </div>
                </div>
            ))}

            <h2>Langues</h2>

            {languages.map((language) => (
                <div className="skill" key={language.nom}>
                    <span>{language.nom}</span>

                    <div className="bar">
                        <div
                            className="fill"
                            style={{ width: `${language.niveau}%` }}
                        ></div>
                    </div>
                </div>
            ))}

        </aside>
    );
}



export default Sidebar;