import { ChangeEvent, FormEvent, useState, useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";
// import {} from "uuid";
import { Task } from "../interfaces/Task";

interface Props {
  addNewTask: (task: Task) => void;
}

type HandleInput = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const initialState = {
  title: "",
  description: "",
};

export default function TaskForm({ addNewTask }: Props) {
  const [task, setTask] = useState(initialState);
  const inputTitle = useRef<HTMLInputElement>(null)

  // To save actualization of this variable specifying all (e: HTML input types)
  const handleInputChange = ({ target: { name, value } }: HandleInput) => {
    setTask({ ...task, [name]: value });
  };

  const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewTask(task);
    setTask(initialState)
    inputTitle.current?.focus()
  };

  return (
    <div className="card card-body bg-secondary">
      <h1>Add task</h1>

      <form onSubmit={handleNewTask}>
        <input
          type="text"
          placeholder="Write a title"
          name="title"
          className="form-control mb-3 rounded-0 shadow-none border-0"
          onChange={handleInputChange}
          value={task.title}
          autoFocus
          ref={inputTitle}
        />

        {/* name=description to match with useState properties and autofill */}
        <textarea
          name="description"
          rows={10}
          placeholder="Write a description"
          className="form-control mb-2 shadow-none border-0"
          onChange={handleInputChange}
          value={task.description}
        ></textarea>

        <button className="btn btn-primary m-2">
          Save
          (<AiOutlinePlus />)
        </button>
      </form>
    </div>
  );
}
