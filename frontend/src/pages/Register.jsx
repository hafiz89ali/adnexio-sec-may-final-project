import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import "../styles/loginStyle.css";

function Register() {
  return (
    <>
      <div className="login-container">
        <h2>Register to start writing your lesson plan.</h2>
        <form className="login-form" action="#">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button>Register</button>
          <h5 className="message">
            Already registered? <Link to="/login">Login</Link>
          </h5>
        </form>
      </div>
    </>
  );
}

export default Register;
