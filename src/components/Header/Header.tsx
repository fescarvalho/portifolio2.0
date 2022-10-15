import "./Header.css";
import { Link } from "react-router-dom";
interface HeaderProps {
  title: string;
}

const Header = (props: HeaderProps) => {
  return (
    <div className="header">
      <Link to="/" className="link">
        Home
      </Link>
      <h1 className="title">{props.title}</h1>
      <Link to="/sobre" className="link">
        Sobre mim
      </Link>
    </div>
  );
};

export default Header;
