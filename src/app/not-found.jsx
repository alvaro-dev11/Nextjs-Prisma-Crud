import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <section className="flex h-[calc(100vh-7rem)] justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Página no encontrada 404</h1>
        <Link href={'/'} className="text-slate-400 text-2xl mt-5 block">Volver al inicio</Link>
      </div>
    </section>
  );
};

export default NotFound;
