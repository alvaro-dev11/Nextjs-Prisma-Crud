// Rutas de Backend: API
import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json("Listando tareas")
}