import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { postApi } from "../utils/api";
import "../App.css";
import "../styles/loginStyle.css";

function Register() {
  const { register, handleSubmit } = useForm();
  function onSubmit(data) {
    console.log(data);
  }
  return (
    <>
      <div className="login-container">
        <h2>Register to start writing your lesson plan.</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="login-form"
          action="#"
        >
          <input {...register("username")} type="text" placeholder="Username" />
          <input {...register("email")} type="text" placeholder="Email" />
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
          />
          {/* <input
            {...register("password")}
            type="password"
            placeholder="Confirm Password"
          /> */}
          <button>Register</button>
        </form>
        <h5 className="message">
          Already registered? <Link to="/login">Login</Link>
        </h5>
      </div>
    </>
  );
}

export default Register;
