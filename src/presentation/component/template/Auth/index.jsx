import Main from "presentation/component/organisms/Auth/Main";
import Aside from "presentation/component/organisms/Auth/Aside";

const Auth = ({ children, ...data }) => {
  return (
    <>
      <div className="auth">
        <Aside {...data.Aside} />
        <Main {...data.Main} />
      </div>
    </>
  );
};

export default Auth;
