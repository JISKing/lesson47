import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({mode: "onTouched"});

  const onSubmit = (value) => {
    console.log(value);
    reset();
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input {...register("name", { required: true, pattern: /^[a-zA-Z]+$/ })} className={errors.name ? "invalid" : ""} />
        {errors.name?.type === "required" && <p>Enter your Name</p>}
        {errors.name?.type === "pattern" && <p>Enter correct Name</p>}
        <label>Login</label>
        <input {...register("login", { required: true, minLength: 5 })} className={errors.login ? "invalid" : ""} />
        {errors.login?.type === "required" && <p>Enter Login</p>}
        {errors.login?.type === "pattern" && <p>Enter correct Login</p>}
        <label>Age</label>
        <input {...register("age", { required: true, min: 18 })} className={errors.age ? "invalid" : ""} type="number" />
        {errors.age?.type === "required" && <p>Enter your age</p>}
        {errors.age?.type === "pattern" && <p>Enter correct age</p>}
        <label>Email</label>
        <input {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} className={errors.email ? "invalid" : ""} />
        {errors.email?.type === "required" && <p>Enter Email</p>}
        {errors.email?.type === "pattern" && <p>Enter correct Email</p>}
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}

export default App;
