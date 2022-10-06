import { Link } from "react-router-dom";
import "./Button.css";

interface ButtonProps {
  path: string;
  name: string;

  icon: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  return (
    <Link to={props.path} className="button">
      {props.name}
      <span className="icon">{props.icon}</span>
    </Link>
  );
};

export default Button;
