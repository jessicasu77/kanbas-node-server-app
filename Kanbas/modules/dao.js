import model from "./model.js";
export const findAllModules = () => model.find();
export const createModule = (module) => {
  delete module._id
  return model.create(module);
}
export const findModuleByCourse = (courseId) =>  model.find({ course: courseId });
export const updateModuleById = (mid, module) =>  model.updateOne({ _id: mid }, { $set: module });
export const deleteModuleById = (mid) => model.deleteOne({ _id: mid });
