import React, { useState } from "react";
import "./InputItemComponent.css";

interface InputItemComponentProps {
  addTask: (task: string) => void;
}

const InputItemComponent = ({ addTask }: InputItemComponentProps) => {
  const [task, setTask] = useState<string>("");
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    addTask(task);
    setTask("");
  };

  return (
    <>
      <div className="enterTask">
        <input
          className="input_task"
          type="text"
          onChange={handleChangeInput}
          value={task}
        ></input>
        <button className="add_btn" onClick={handleAddTask}>
          Add
        </button>
      </div>
    </>
  );
};

export default InputItemComponent;
