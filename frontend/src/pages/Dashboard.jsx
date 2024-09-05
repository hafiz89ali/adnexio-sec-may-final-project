import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import "../styles/dashboardStyle.css";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <>
      <body>
        <div className="side-nav">
          <p>Side Navigation</p>
        </div>
        <div className="main-area">
          <p>Main Area</p>
        </div>
      </body>
    </>
  );
}

export default Dashboard;
