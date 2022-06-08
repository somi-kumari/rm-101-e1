import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";

const Task = (props) => {
  const { lists, setLists } = props
  function handleClick(id) {
    setLists(
      lists.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  function handleDelete(id) {
    setLists(lists.filter((task) => task.id !== id));
  }
  // NOTE: do not delete `data-testid` key value pair
  return (
    <>
      {lists.map((task) => (
        <li data-testid="task" className={styles.task} key={task.id}>
          {task.done ? (
            <input
              type="checkbox"
              data-testid="task-checkbox"
              onClick={() => {
                handleClick(task.id);
              }}
              defaultChecked
            />
          ) : (
            <input
              type="checkbox"
              data-testid="task-checkbox"
              onClick={() => {
                handleClick(task.id);
              }}
            />
          )}
          <div
            data-testid="task-text"
            style={task.done ? { textDecoration: "line-through" } : {}}
          >
            {task.text}
          </div>
          <Counter countvalue={task.count} />
          <button
            data-testid="task-remove-button"
            onClick={() => {
              handleDelete(task.id);
            }}
          >
            x
          </button>
        </li>
      ))}
    </>
  );
};

export default Task;
