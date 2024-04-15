import { Link } from "react-router-dom";

const Button = ({children, ...props }) => {
  return (
    <>
      <Link to={props.to} className={props.className}>
        {props.name}
        {children && children}
      </Link>
    </>
  );
};

export default Button;
