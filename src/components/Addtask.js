import React from "react";

function Addtask() {
  return (
    <section className="addTask">
      <form>
        <input
          type="text"
          placeholder="Add Task"
          autoComplete="off"
          name="task"
          maxLength="25"
        />
        <button type="submit">Add </button>
      </form>
    </section>
  );
}

export default Addtask;
