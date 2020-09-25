import React from "react";

const Form = ({ state, setState }) => {
  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form>
      {Object.keys(state).map((field) => (
        <div>
          <div>
            <label for="inline-full-name">{field}</label>
          </div>
          <div className="md:w-2/3">
            {field === "password" || field === "confPassword" ? (
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                name={field}
                onChange={onChange}
              />
            ) : (
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name={field}
                onChange={onChange}
              />
            )}
          </div>
        </div>
      ))}
    </form>
  );
};

export default Form;
