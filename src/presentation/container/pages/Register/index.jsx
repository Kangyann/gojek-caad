import AuthTemplate from "presentation/component/template/Auth";
import registerImage from "core/assets/images/base/register.png"

const Register = () => {
  const data = {
    Main: {
      key_id: "Register",
      option: {
        text: "Udah punya akun?",
        link_text: "Log in aja",
        to: "/login",
      },
    },
    Aside: {
      title: "Bisa liburan ala Sultan, tapi dompet tetap aman!",
      description:
        "Buat akun untuk dapet harga lebih hemat, diskon ekstra, & asuransi gratis.",
      image : registerImage
    },
  };
  return (
    <>
      <AuthTemplate {...data} />
    </>
  );
};

export default Register;
