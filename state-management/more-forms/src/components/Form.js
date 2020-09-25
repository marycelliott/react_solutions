import React from "react";

// I can destructure props right in the component's arrow function
const Form = ({ state, setState }) => {
  const regex = new RegExp(/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/);
  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form>
      <div className="form-group">
        <label for="firstName">First Name</label>
        <input
          className="form-control form-control-sm"
          type="text"
          name="firstName"
          onChange={onChange}
        />
        {state.firstName < 1 ? (
          <span className="text-danger small">First Name cannot be blank.</span>
        ) : null}
      </div>
      <div className="form-group">
        <label for="lastName">Last Name</label>
        <input
          className="form-control form-control-sm"
          type="text"
          name="lastName"
          onChange={onChange}
        />
        {state.lastName < 1 ? (
          <span className="text-danger small">Last Name cannot be blank.</span>
        ) : null}
      </div>
      <div className="form-group">
        <label for="email">Email</label>
        <input
          className="form-control form-control-sm"
          type="text"
          name="email"
          onChange={onChange}
        />
        {!state.email.match(regex) ? (
          <span className="text-danger small">Email address is invalid.</span>
        ) : null}
      </div>
      <div className="form-group">
        <label for="password">Password</label>
        <input
          className="form-control form-control-sm"
          type="password"
          name="password"
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label for="confPassword">Confirm Password</label>
        <input
          className="form-control form-control-sm"
          type="password"
          name="confPassword"
          onChange={onChange}
        />
        {state.password !== state.confPassword ? (
          <span className="text-danger small">Password don't match.</span>
        ) : null}
      </div>
    </form>
  );
};

export default Form;
