import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getApiWithToken, putApiWithToken } from "../utils/api";
import Cookies from "js-cookie";
import dateFormat from "dateformat";
import "../styles/viewLessonPlan.css";
import iconHome from "../assets/iconHome.svg";
import iconFileEdit from "../assets/iconFileEdit.svg";

function EditLessonPlan() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [lessonPlan, setLessonPlan] = useState({});
  const { register, handleSubmit } = useForm();

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
    } catch {
      console.error("Error at fetchLessonPlans");
    } finally {
      setIsLoading(false);
    }
  }

  async function onSubmit(data) {
    try {
      const token = Cookies.get("authToken");
      const serverRes = await putApiWithToken(
        `http://localhost:3000/update/lessonplan/${id}`,
        data,
        token
      );
      if (!serverRes.ok) {
        const serverError = await serverRes.json();
        const message = serverError.message;
        alert(message);
        throw new Error(message);
      }
      const resData = await serverRes.json();
      const message = resData.message;
      alert(message);
    } catch (error) {
      console.error(error);
    }
  }

  function onSubmit(data) {
    editLP(data);
    console.log(data);
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
          <Link to={`/edit/lessonplan/${id}`}>
            <img src={iconFileEdit} alt="" />
          </Link>
        </div>
      </div>
      {/* <h1>View Lesson Plan</h1> */}
      <form onSubmit={handleSubmit(onSubmit)} id="newLP" className="newLP">
        <input
          {...register("title")}
          type="text"
          name="title"
          value={lessonPlan.title}
        />
        <h1>{lessonPlan.title}</h1>
        <div className="lessonPlanDetails">
          <p>{lessonPlan.subject_name} .</p>
          <p>{lessonPlan.class_name} .</p>
          <p>{dateFormat(lessonPlan.date, "dd/mm/yyyy")}</p>
          <p>{lessonPlan.time}</p>
        </div>
        <p>{lessonPlan.lesson_plan}</p>
      </form>
    </div>
  );
}

export default EditLessonPlan;
