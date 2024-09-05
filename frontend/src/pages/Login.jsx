import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import "../App.css";
import "../styles/loginStyle.css";

function Login() {
  return (
    <>
      <div className="login-container">
        <h1>Write . Plan . Organize</h1>
        <form className="login-form" action="#">
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
          <h5 className="message">
            Not yet register? <Link to="/register">Create an account.</Link>
          </h5>
        </form>
      </div>
    </>
  );
}

export default Login;
