// src/components/formikForm.js
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Formik Submitted:", values);

    // Mock API call
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log("API Response:", data))
      .catch((err) => console.error("Error:", err));

    resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className="p-4 border rounded w-96 mx-auto mt-10">
        <h2 className="text-lg font-bold mb-4">User Registration (Formik)</h2>

        <div className="mb-2">
          <Field type="text" name="username" placeholder="Username" className="border p-2 w-full" />
          <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />
        </div>

        <div className="mb-2">
          <Field type="email" name="email" placeholder="Email" className="border p-2 w-full" />
          <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
        </div>

        <div className="mb-2">
          <Field type="password" name="password" placeholder="Password" className="border p-2 w-full" />
          <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
        </div>

        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Register
        </button>
      </Form>
    </Formik>
  );
}
export default FormikForm;
