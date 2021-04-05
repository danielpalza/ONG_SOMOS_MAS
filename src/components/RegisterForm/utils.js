import * as Yup from "yup";

const postData = (values) => {
    const ordainedValues = JSON.stringify(values, null, 2);
    // once we have the End Point Ready , we need to add the fetch logic
    // to post the values to the server
    return alert(ordainedValues);
};

const registerSchema = Yup.object().shape({
    name: Yup.string().required("No name was provided"),
    surname: Yup.string().required("No surname was provided."),
    email: Yup.string()
        .email("Invalid email")
        .required("No email was provided"),
    password: Yup.string()
        .required("No password was provided.")
        .min(6, "Password is too short - Minimum 6 characters required"),
});

export { postData, registerSchema };
