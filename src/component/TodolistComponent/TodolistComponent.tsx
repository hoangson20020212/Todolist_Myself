import { useState } from "react";
import "./TodolistComponent.css";
import InputItemComponent from "../InputItemComponent/InputItemComponent";
import ItemTaskComponent from "../ItemTaskComponent/ItemTaskComponent";

interface ItemProps {
  number: number;
  content: string;
  deleted: boolean;
}

const TodolistComponent = () => {
  const [listTasks, setListTasks] = useState<ItemProps[]>([]);

  const handleAddTask = (task: string) => {
    const newTask = {
      number: listTasks.length + 1,
      content: task,
      deleted: false,
    };
    setListTasks([...listTasks, newTask]);
  };

  return (
    <>
      <div className="container">
        <div className="heading_content">Todolist</div>
        <InputItemComponent addTask={handleAddTask} />
        <div className="list">
          <ul>
            {listTasks.map((item: ItemProps) => (
              <ItemTaskComponent item={item.content} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TodolistComponent;
