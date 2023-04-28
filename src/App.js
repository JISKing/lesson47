import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input {...register("name", { required: true, pattern: /^[a-zA-Z]+$/ })} />
        {errors.name?.type === "required" && <p>Enter Name</p>}
        {errors.name?.type === "pattern" && <p>Enter correct Name</p>}
        <label>Login</label>
        <input {...register("login", { required: true, minLength: 5 })} />
        {errors.login?.type === "required" && <p>Enter Login</p>}
        {errors.login?.type === "minLength" && <p>Login should be at least 5 characters</p>}
        <label>Age</label>
        <input {...register("age", { required: true, min: 18 })} type="number" />
        {errors.age?.type === "required" && <p>Enter Age</p>}
        {errors.age?.type === "min" && <p>Age should be at least 18 years old</p>}
        <label>Email</label>
        <input {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} />
        {errors.email?.type === "required" && <p>Enter Email</p>}
        {errors.email?.type === "pattern" && <p>Enter correct Email</p>}
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}

export default App;
