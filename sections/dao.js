import model from "./model.js";

export const createSectionForCourse = (course, section) =>
  model.create({ ...section, course });
export const findSectionsForCourse = (course) => model.find({ course });
