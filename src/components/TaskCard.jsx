"use client";
import { useRouter } from "next/navigation";

const TaskCard = ({ task }) => {
  const router = useRouter();
  return (
    <div
      className="bg-slate-900 hover:bg-slate-800 hover:cursor-pointer transition p-3 rounded-md"
      onClick={() => router.push("/tasks/edit/"+task.id)}>
      <h3 className="text-2xl font-bold mb-2 uppercase">{task.title}</h3>
      <p className="text-slate-300 mb-2">{task.description}</p>
      <p>{new Date(task.createAt).toLocaleDateString()}</p>
    </div>
  );
};

export default TaskCard;
