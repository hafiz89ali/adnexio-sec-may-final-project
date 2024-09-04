import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";

function Login() {
  return (
    <>
      <h1>Write . Plan . Organize</h1>
      <form action="#">
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="submit" value="Login" />
        <p className="message">
          Not yet register? <Link to="/register">Create an account.</Link>
        </p>
      </form>
    </>
  );
}

export default Login;
