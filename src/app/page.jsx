import { prisma } from "@/libs/prisma";
import TaskCard from "@/components/TaskCard";

async function loadTasks() {
  return await prisma.task.findMany();
}

export const revalidat = 60;

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
