import "./App.css";
import Profile from "./profile/profile.js";

function App() {
  const nameHandler = (fullname) => {
    alert(fullname);
  };
  return (
    <div className="App">
      <Profile
        fullname="Anagor Chidera"
        bio="I am a Tech Enthusiast"
        Profession="Software Engineer"
        nameHandler={nameHandler}
      ></Profile>
    </div>
  );
}

export default App;