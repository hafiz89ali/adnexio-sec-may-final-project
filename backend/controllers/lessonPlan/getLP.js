import database from "../../database/connection.js";

const query = `
SELECT id, date, time, class_name, subject_name, title, lesson_plan, created_by, created_at
FROM lesson_plans
WHERE created_by = $1
ORDER BY created_at DESC;
`;

async function getLP(req, res) {
  try {
    const createdBy = req.user.id;
    const dbRes = await database.query(query, [createdBy]);
    const lessonPlans = dbRes.rows;
    const data = {
      message: "Lesson Plans fetched successfully",
      data: lessonPlans,
    };
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export default getLP;
