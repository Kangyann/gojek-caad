import tiketLogo from "core/assets/images/base/tiket-logo.webp";

const Login = ({...data}) => {
  return (
    <>
      <div className="auth__aside">
        <span className="auth__aside__text">
          <img src={tiketLogo} alt="Tiket Logo" />
          <h1>{data.title}</h1>
          <p>{data.description}</p>
        </span>
        <div className="auth__aside__image">
          <img src={data.image} alt="Background" />
        </div>
      </div>
    </>
  );
};

export default Login;
