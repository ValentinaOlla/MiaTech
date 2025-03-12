import { useNavigate } from "react-router";

const About = () => {
    const navigate = useNavigate();

  return (
    <div>
        <button onClick={() => navigate("/")}>Torna alla Home</button>
        <h1>About</h1>
        <p>Qui ci saranno delle informazioni sull'applicazione</p>
    </div>
  )
}

export default About
