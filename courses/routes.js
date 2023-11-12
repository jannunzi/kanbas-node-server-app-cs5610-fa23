import Database from "../Database/index.js";
import * as dao from "./dao.js";
function CourseRoutes(app) {
  app.get("/api/authors/:uid/courses", async (req, res) => {
    const { uid } = req.params;
    const courses = await dao.findCoursesByAuthor(uid);
    res.json(courses);
  });
  app.get("/api/courses", async (req, res) => {
    const courses = await dao.findAllCourses();
    res.json(courses);
  });
  app.get("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    const course = await dao.findCourseById(id);
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
  app.post("/api/courses", (req, res) => {
    const newCourse = {
      ...req.body,
      _id: new Date().getTime().toString(),
    };
    Database.courses.unshift(newCourse);
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
