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
          <div key={task.id} className="bg-slate-900 hover:bg-slate-800 hover:cursor-pointer transition p-3 rounded-md">
            <h3 className="text-2xl font-bold mb-2 uppercase">{task.title}</h3>
            <p className="text-slate-300 mb-2">{task.description}</p>
            <p>{new Date(task.createAt).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePage;
