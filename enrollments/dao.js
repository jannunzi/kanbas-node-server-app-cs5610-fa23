import model from "./model.js";

export const enrollStudentInSection = (section, student) =>
  model.create({ section, student });
export const unenrollStudentFromSection = (section, student) =>
  model.deleteOne({ section, student });
export const findSectionsForStudent = (student) =>
  model.find({ student }).populate("section").exec();
export const findStudentsForSection = (section) =>
  model.find({ section }).populate("student").exec();
