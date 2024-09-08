import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getApiWithToken } from "../utils/api";

function ViewLP() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [lessonPlan, setLessonPlan] = useState({});

  async function fetchLinks() {
    try {
      setIsLoading(true);
      const token = Cookies.get("authToken");
      const serverRes = await getApiWithToken(
        `http://localhost:3000/viewlp/${id}`,
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

  useEffect(function () {
    fetchLinks();
  }, []);

  return (
    <div>
      <h1>View Lesson Plan</h1>
      <h1>{lessonPlan.title}</h1>
      <p>{lessonPlan.subject_name}</p>
      <p>{lessonPlan.class_name}</p>
      <p>{lessonPlan.date}</p>
      <p>{lessonPlan.time}</p>
      <p>{lessonPlan.lesson_plan}</p>
    </div>
  );
}

export default ViewLP;
