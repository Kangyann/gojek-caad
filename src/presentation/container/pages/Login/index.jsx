import AuthTemplate from "presentation/component/template/Auth";
import loginImage from "core/assets/images/base/login.png";

const Login = () => {
  const data = {
    Main: {
      key_id: "Log In",
      option: {
        text: "Belum punya akun?",
        link_text: "Buat Akun yuk!",
        to: "/register",
      },
    },
    Aside: {
      title: "Log in untuk nikmati semua keuntungannya!",
      description: "Kamu cukup masukkan nomor ponsel atau email aja, kok.",
      image: loginImage
    },
  };
  return (
    <>
    <AuthTemplate {...data}/>
    </>
  );
};

export default Login;
