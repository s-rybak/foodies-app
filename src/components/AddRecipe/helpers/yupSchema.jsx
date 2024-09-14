import * as yup from "yup";

const yupSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup
    .string()
    .max(200, "Description must be at most 200 characters")
    .required("Description is required"),
  category: yup.string().required("Category is required"),
  area: yup.string().required("Area is required"),
  instructions: yup
    .string()
    .max(2000, "Description must be at most 200 characters")
    .required("Instructions are required"),
});
export default yupSchema;
