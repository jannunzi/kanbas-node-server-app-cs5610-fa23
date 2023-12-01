// import Database from "../Database/index.js";
import * as dao from "./dao.js";
function CourseRoutes(app) {
  app.get("/api/courses", async (req, res) => {
    const author = req.session.currentUser._id;
    const courses = await dao.findCoursesByAuthor(author);
    res.json(courses);
  });
  app.get("/api/courses/all", async (req, res) => {
    const courses = await dao.findAllCourses();
    res.json(courses);
  });
  app.get("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    // const course = Database.courses.find((course) => course._id === id);
    const course = await dao.findCourseById(id);
    if (!course) {
      res.status(404).send("Course not found");
      return;
    }
    res.json(course);
  });
  app.delete("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    const index = Database.courses.findIndex((course) => course._id === id);
    if (index === -1) {
      res.status(404).send("Course not found");
      return;
    }
    Database.courses.splice(index, 1);
    res.json(204);
  });
  app.post("/api/courses", async (req, res) => {
    const author = req.session.currentUser._id;
    const newCourse = await dao.createCourseByAuthor(author, req.body);
    res.json(newCourse);
  });
  app.put("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    const index = Database.courses.findIndex((course) => course._id === id);
    if (index === -1) {
      res.status(404).send("Course not found");
      return;
    }
    Database.courses[index] = {
      ...Database.courses[index],
      ...req.body,
    };
    res.json(200);
  });
}
export default CourseRoutes;
