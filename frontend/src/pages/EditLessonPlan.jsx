import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { getApiWithToken, putApiWithToken } from "../utils/api";
import "../styles/viewLessonPlan.css";
import iconHome from "../assets/iconHome.svg";
import iconFileEdit from "../assets/iconFileEdit.svg";

function EditLessonPlan() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [lessonPlan, setLessonPlan] = useState({});

  async function fetchLinks() {
    try {
      setIsLoading(true);
      const token = Cookies.get("authToken");
      const serverRes = await getApiWithToken(
        `http://localhost:3000/view/lessonplan/${id}`,
        token
      );
      if (!serverRes.ok) {
        alert("You are not authorized to view this page.");
      }
      const data = await serverRes.json();
      setLessonPlan(data.data);
    } catch (error) {
      console.error("Error at fetchLessonPlans");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(function () {
    fetchLinks();
  }, []);

  return (
    <div className="viewLessonPlan">
      <div className="action-sect">
        {/* <p>Action Section</p> */}
        <div className="action">
          <Link to="/dashboard">
            <img src={iconHome} alt="" />
          </Link>
        </div>
        <div className="action">
          <Link to={`/view/lessonplan/${id}`}>
            <img src={iconFileEdit} alt="" />
          </Link>
        </div>
      </div>
      {/* <h1>Edit Lesson Plan</h1> */}
      <h1>{lessonPlan.title}</h1>
      <input type="text" name="title" value={lessonPlan.title} />
      <div className="lessonPlanDetails">
        <p>{lessonPlan.subject_name}</p>
        <p>{lessonPlan.class_name}</p>
        <p>{lessonPlan.date}</p>
        <p>{lessonPlan.time}</p>
      </div>
      <div className="lessonPlan">
        <p>{lessonPlan.lesson_plan}</p>
      </div>
      <div className="edit">
        <Link to={`/edit/lessonplan/${id}`}>
          <button>Edit</button>
        </Link>
      </div>
    </div>
  );
}

export default EditLessonPlan;
