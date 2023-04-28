import React from "react";
import {Formik, Form, Field} from 'formik'

function App() {
  const initialValues = {
    name: "",
    login: "",
    age: "",
    email: "",
  };

  const validate = (values) => {
    const errors = {};

    if (!/^[a-zA-Z]+$/.test(values.name) || values.name.length < 1) {
      errors.name = "Enter correct Name";
    }

    if (values.login.length < 5) {
      errors.login = "Enter correct Login";
    }

    if (values.age < 18) {
      errors.age = "Enter correct Age";
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Enter correct Email";
    }

    return errors;
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="wrapper">
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validate}>
        {({values, errors, touched, handleChange, handleBlur, handleSubmit}) => (
          <Form onSubmit={handleSubmit}>
            <label>Name</label>
            <Field className={touched.name && errors.name ? "invalid" : ""} name="name" onChange={handleChange} onBlur={handleBlur} />
            {touched.name && errors.name && <p>{errors.name}</p>}
            <label>Login</label>
            <Field className={touched.login && errors.login ? "invalid" : ""} name="login" onChange={handleChange} onBlur={handleBlur} />
            {touched.login && errors.login && <p>{errors.login}</p>}
            <label>Age</label>
            <Field className={touched.age && errors.age ? "invalid" : ""} name="age" type="number" onChange={handleChange} onBlur={handleBlur} />
            {touched.age && errors.age && <p>{errors.age}</p>}
            <label>Email</label>
            <Field className={touched.email && errors.email ? "invalid" : ""} name="email" onChange={handleChange} onBlur={handleBlur} />
            {touched.email && errors.email && <p>{errors.email}</p>}
            <button type="submit">Sign in</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;

