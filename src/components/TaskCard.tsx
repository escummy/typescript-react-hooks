import { Task } from "../interfaces/Task";

interface Props {
  task: Task;
  deleteTask: (id: number) => void;
}

export default function TaskCard({ task, deleteTask }: Props) {
  return (
    <div className="card card-body bg-secondary">
      <h2>{task.title}</h2>
      <p>ID: {task.id}</p>
      <p>{task.description}</p>
      <button className="btn btn-danger" onClick={() => task.id && deleteTask(task.id)}>
        Delete
      </button>
    </div>
  );
}
