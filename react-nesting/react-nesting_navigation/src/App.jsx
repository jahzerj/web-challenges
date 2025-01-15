import "./styles.css";

import avatar from "./img/avatar.jpg";
import logo from "./img/logo.jpg";
import Header from "./components/Header";
import Naviation from "./components/Navigation";
import Link from "./components/Link";
// import Image from "./components/Image";

export default function App() {
  return (
    <>
      <Header>
        <Link href="#">
          <img className="round-img" src={logo} alt="logo" />
        </Link>
        <Naviation>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
        </Naviation>
        <button
          type="button"
          onClick={() => console.log("I could toggle a profile!")}
          aria-label="toggle profile"
        >
          <img className="round-image" src={avatar} alt="avatar" />
        </button>
      </Header>
      <main>content goes here…</main>
    </>
  );
}
