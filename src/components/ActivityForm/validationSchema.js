import * as Yup from "yup";
const validationSchema = Yup.object().shape({
    name: Yup.string().required("No name was provided"),
    data: Yup.string().required("No content was provided"),

});
export default validationSchema


