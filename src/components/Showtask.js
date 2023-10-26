import React from "react";

function Showtask() {
  return (
    <section className="showTask">
      <div className="head">
        <>
          <span className="title">Add</span>
          <span className="count">0</span>
        </>
        <button>Clear All</button>
      </div>
      <ul>
        <li>
          <p>
            <span className="name">Task-A</span>
            <span className="time">9:30 am 23/10/2023</span>
          </p>
          <i className="bi bi-pencil-squre"></i>
          <i className="bi bi-trash"></i>
        </li>
      </ul>
    </section>
  );
}

export default Showtask;
