import model from "./model.js";
export const createCourse = (course) => model.create(course);
export const findAllCourses = () => model.find();
export const findCourseById = (courseId) => model.findById(courseId);
export const findCoursesByAuthor = (author) => model.find({ author: author });
