import model from "./model.js";

export const findAllCourses = () => model.find();
export const findCoursesByAuthor = (author) => model.find({ author });
export const createCourseByAuthor = (author, course) =>
  model.create({ ...course, author });
export const findCourseById = (id) => model.findById(id);
