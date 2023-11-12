import model from "./model.js";
export const createModule = (courseId, module) =>
  model.create({ ...module, course: courseId });
export const findModulesForCourse = (courseId) =>
  model.find({ course: courseId });
export const findAllModules = () => model.find();
