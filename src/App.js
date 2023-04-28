import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const [nameValid, setNameValid] = useState(true);
  const [loginValid, setLoginValid] = useState(true);
  const [ageValid, setAgeValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);

  const submit = (e) => {
    e.preventDefault();
    console.log(name, login, age, email);
  };

  const nameChange = (e) => {
    setName(e.target.value);
    setNameValid(/^[a-zA-Z]+$/.test(e.target.value) && e.target.value.length >= 1);
  };
  
  const loginChange = (e) => {
    setLogin(e.target.value);
    setLoginValid(e.target.value.length >= 5);
  };
  
  const ageChange = (e) => {
    setAge(e.target.value);
    setAgeValid(e.target.value >= 18);
  };
  
  const emailChange = (e) => {
    setEmail(e.target.value);
    setEmailValid(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.target.value));
  };

  return (
    <div className="wrapper">
      <form onSubmit={submit}>
        <label>Name</label>
        <input className={nameValid ? "" : "invalid"} onChange={nameChange} />
        {!nameValid && <p>Enter correct Name</p>}
        <label>Login</label>
        <input className={loginValid ? "" : "invalid"} onChange={loginChange} />
        {!loginValid && <p>Enter correct Name</p>}
        <label>Age</label>
        <input className={ageValid ? "" : "invalid"} onChange={ageChange} type="number" />
        {!ageValid && <p>Enter correct Name</p>}
        <label>Email</label>
        <input className={emailValid ? "" : "invalid"} onChange={emailChange} />
        {!emailValid && <p>Enter correct Name</p>}
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}

export default App;
