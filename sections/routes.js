import * as dao from "./dao.js";
function SectionRoutes(app) {
  const createSectionForCourse = async (req, res) => {
    const course = req.params.courseId;
    const section = req.body;
    const newSection = await dao.createSectionForCourse(course, section);
    res.json(newSection);
  };
  const findSectionsForCourse = async (req, res) => {
    const course = req.params.courseId;
    const sections = await dao.findSectionsForCourse(course);
    res.json(sections);
  };

  app.post("/api/courses/:courseId/sections", createSectionForCourse);
  app.get("/api/courses/:courseId/sections", findSectionsForCourse);
}

export default SectionRoutes;
