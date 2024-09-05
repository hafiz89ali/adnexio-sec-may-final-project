import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import "../App.css";
import "../styles/loginStyle.css";

function Login() {
  const { register, handleSubmit } = useForm();
  function onSubmit(data) {
    console.log(data);
  }
  return (
    <>
      <div className="login-container">
        <h1>Write . Plan . Organize</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          <input
            {...register("email")}
            type="text"
            id="email"
            placeholder="Email"
          />
          <input
            {...register("password")}
            type="password"
            id="password"
            placeholder="Password"
          />
          <button type="submit">Login</button>
        </form>
        <h5 className="message">
          Not yet register? <Link to="/register">Create an account.</Link>
        </h5>
      </div>
    </>
  );
}

export default Login;
