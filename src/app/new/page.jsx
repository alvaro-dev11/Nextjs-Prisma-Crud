"use client";
import { useRouter } from "next/navigation";

const NewPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    // console.log(e)
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;

    const res = await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    router.push("/");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form onSubmit={onSubmit} className="bg-slate-800 p-10 lg:w-1/4 md:w-1/2">
        <label htmlFor="title" className="font-bold text-sm mb-4 block">
          Título de la tarea
        </label>
        <input
          type="text"
          id="title"
          placeholder="Título"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
        />
        <label htmlFor="description" className="font-bold text-sm">
          Descripción de la tarea
        </label>
        <textarea
          rows="3"
          id="description"
          placeholder="Describe tu tarea"
          className="border border-gray-400 p-2 mb-4 w-full text-black"></textarea>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Crear
        </button>
      </form>
    </div>
  );
};

export default NewPage;
