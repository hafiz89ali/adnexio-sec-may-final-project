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
          <div className="sub-main1">
            <div className="profile-sect">
              <p>Profile Section</p>
            </div>
            <div className="comm-sect">
              <p>Communication Section</p>
            </div>
          </div>
          <div className="action-sect">
            <p>Action Section</p>
          </div>
          <div className="content-area">
            <p>Contents Area</p>
            <h3>Rancangan Pengajaran Harian</h3>
            <div>
              <p>Sorting Area</p>
            </div>
            <div>
              <p>Real Contents</p>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Dashboard;
