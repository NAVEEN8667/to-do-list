import React from "react";
import { useState } from "react";
const Input = () => {
  const [valuearray, setvaluearray] = useState([]);
  const [inputvalue, setinputvalue] = useState("");
  const [completed, setcompleted] = useState(null);

  const handleonchange = (e) => {
    setinputvalue(e.target.value);
  };

  const handlesubmit = () => {
    setvaluearray([...valuearray, { text: inputvalue, completed: false }]);
    setinputvalue("");
  };

  const handledelete = (key) => {
    const updated = valuearray.filter((_, index) => key !== index);
    setvaluearray(updated);
  };

  const marked = (key) => {
    const updated = valuearray.map((item, index) =>
      index === key ? { ...item, completed: !item.completed } : item
    );
    setvaluearray(updated);
  };

  return (
    <div>
      <h2 className="heading">To Do List</h2>

      <div class="form__group field">
        <input
          required=""
          class="form__field"
          type="text"
          value={inputvalue}
          placeholder="type to add tasks"
          onChange={(event) => {
            handleonchange(event);
          }}
        />
        <label class="form__label" for="name">
          type to add tasks
        </label>
      </div>

      <button className="submitbutton" onClick={handlesubmit}>
        Submit
      </button>

      <div className="valuescontainer">
        {valuearray.length === 0 ? (
          <center>
            <h3>no tasks added yet</h3>
          </center>
        ) : (
          valuearray.map((tasks, index) => (
            <div
              key={index}
              className={
                tasks.completed ? "completedinside" : "valuesinsidecontainer"
              }
            >
              <h4 className={tasks.completed ? "completed" : "notcompleted"}>
                {tasks.text}
              </h4>
              <i
                className="bi bi-check2-all"
                onClick={() => {
                  marked(index);
                }}
              ></i>

              <i
                className="bi bi-archive"
                onClick={() => {
                  handledelete(index);
                }}
              ></i>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Input;
