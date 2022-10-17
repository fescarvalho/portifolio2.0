import { Link } from "react-router-dom";
import "./Button.css";

interface ButtonProps {
  path: string;
  name: string;
  icon?: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  return (
    <Link to={props.path} className="button">
      <span className="icon">{props.icon}</span>
      {props.name}
    </Link>
  );
};

export default Button;
