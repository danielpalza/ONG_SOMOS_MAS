import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    name: Yup.string().required("No name was provided"),
    lastName: Yup.string().required("No last name was provided"),
    role: Yup.number().min(1)
});

export default validationSchema;