import TaskCard from "@/components/TaskCard";

async function loadTasks() {
  const res = await fetch("http://localhost:3000/api/tasks");
  const data = await res.json();
  return data;
}

const HomePage = async () => {
  const tasks = await loadTasks();
  return (
    <section className="container mx-auto">
      <div className="grid-tareas">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </section>
  );
};

export default HomePage;
