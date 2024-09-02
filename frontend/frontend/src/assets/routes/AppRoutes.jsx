import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import LessonPlan from "../pages/LessonPlan";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/lessonplan" element={<LessonPlan />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
