import React from "react";

const Item = ({ item, index, task, setItem }) => {
  const isChecked = e => {
    let selectedTasks = item.slice();
    selectedTasks[index].isComplete = !selectedTasks[index].isComplete;
    setItem(selectedTasks);
    if (e.target.checked) {
      e.target.parentNode.parentNode.parentNode.parentNode.setAttribute(
        "id",
        "disabled"
      );
    } else {
      e.target.parentNode.parentNode.parentNode.parentNode.setAttribute(
        "id",
        null
      );
    }
  };
  const deleteTask = () => {
    setItem(item.filter(task => item.indexOf(task) !== index));
  };
  return (
    <div class="col s12 offset-m3 m6">
      <div class="card">
        <div class="card-content grey-text text-darken-4">
          <h5>{task.task}</h5>
        </div>
        <div class="card-action">
          <div
            onMouseOver={e => (e.target.style.cursor = "pointer")}
            onClick={deleteTask}
            style={{ display: "inline-block", verticalAlign: "middle" }}
          >
            <i class="small material-icons grey-text text-darken-2">
              delete_forever
            </i>
          </div>
          <div
            class="switch"
            style={{
              display: "inline-block",
              marginLeft: "2.5em",
              verticalAlign: "middle"
            }}
          >
            <h6>Completed?</h6>
            <label>
              No
              <input
                type="checkbox"
                onClick={isChecked}
                checked={task.isComplete}
              />
              <span class="lever"></span>
              Yes
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
