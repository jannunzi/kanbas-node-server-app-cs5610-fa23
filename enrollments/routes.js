import * as dao from "./dao.js";

function EnrollmentRoutes(app) {
  const enrollStudentInSection = async (req, res) => {
    const section = req.params.sectionId;
    const student = req.session.currentUser._id;
    const newEnrollment = await dao.enrollStudentInSection(section, student);
    res.json(newEnrollment);
  };

  const findStudentsForSection = async (req, res) => {
    const section = req.params.sectionId;
    const students = await dao.findStudentsForSection(section);
    res.json(students);
  };
  app.post("/api/sections/:sectionId/enrollments", enrollStudentInSection);
  app.get("/api/sections/:sectionId/enrollments", findStudentsForSection);
}

export default EnrollmentRoutes;
