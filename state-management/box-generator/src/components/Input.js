import React from "react";

const Input = ({ setBox, box }) => {
  let color = "";
  const onChange = e => {
    color = e.target.value;
  };
  const grabColor = () => {
    console.log(box.colors);
    setBox({
      ...box,
      colors: [...box.colors, color]
    });
    console.log(typeof box.colors);
  };
  return (
    <div class="input-group mb-3">
      <input
        onChange={onChange}
        type="text"
        class="form-control"
        name="color"
      />
      <div class="input-group-append">
        <button onClick={grabColor} class="btn btn-primary" type="button">
          Add Box
        </button>
      </div>
    </div>
  );
};

export default Input;
