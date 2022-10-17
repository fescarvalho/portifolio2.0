import "./Header.css";
import { Link } from "react-router-dom";
interface HeaderProps {
  title: string;
  toOne: string;
  toTwo: string;
  nameOne: string;
  nameTwo: string;
}

const Header = (props: HeaderProps) => {
  return (
    <div className="header">
      <Link to={props.toOne} className="link">
        {props.nameOne}
      </Link>
      <h1 className="title">{props.title}</h1>
      <Link to={props.toTwo} className="link">
        {props.nameTwo}
      </Link>
    </div>
  );
};

export default Header;
