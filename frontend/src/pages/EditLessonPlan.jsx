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

  async function editLessonPlan() {
    try {
      const token = Cookies.get("authToken");
      const serverRes = await putApiWithToken(
        `http://localhost:3000/edit/lessonplan/${id}`,
        lessonPlan,
        token
      );
      if (!serverRes.ok) {
        alert("You are not authorized to edit this lesson plan.");
      }
      alert("Lesson plan edited successfully");
      fetchLinks();
    } catch (error) {
      console.error("Error at editLessonPlan");
      alert("Error at editLessonPlan");
    }
  }

  function formatDate(dateString) {
    const datePart = dateString.split("T")[0];
    const [year, month, day] = datePart.split("-");
    return `${day}/${month}/${year}`;
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
      <input
        {...register("title")}
        type="text"
        name="title"
        value={lessonPlan.title}
      />
      <div className="lessonPlanDetails">
        <p>{lessonPlan.subject_name} .</p>
        <p>{lessonPlan.class_name} .</p>
        <p>{formatDate(lessonPlan.date)} .</p>
        <p>{lessonPlan.time} </p>
      </div>
      <div className="lessonPlan">
        <input
          {...register("lesson_plan")}
          type="text"
          name="title"
          value={lessonPlan.lesson_plan}
        />
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
