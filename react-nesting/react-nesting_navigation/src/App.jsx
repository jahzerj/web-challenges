import "./styles.css";

import Header from "./components/Header";
import Naviation from "./components/Navigation";
import Link from "./components/Link";
import Avatar from "./components/Avatar";
import Logo from "./components/Logo";

export default function App() {
  return (
    <>
      <Header>
        <Logo />
        <Naviation>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
        </Naviation>
        <Avatar />
      </Header>
      <main>content goes here…</main>
    </>
  );
}
