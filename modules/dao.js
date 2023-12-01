import model from "./model.js";

export const createModuleForCourse = (course, module) =>
  model.create({ ...module, course });
export const findModulesForCourse = (course) => model.find({ course });
