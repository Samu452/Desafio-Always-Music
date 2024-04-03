import pkg from "pg";
const { Pool } = pkg;
import pool from "../config/db.js";

const argumentos = process.argv.slice(2);
const opcion = argumentos[0];
const nombre = argumentos[1];
const rut = argumentos[2];
const curso = argumentos[3];
const nivel = argumentos[4];

const agregarMusico = async (nombre, rut, curso, nivel) => {
  try {
    const sql =
      "INSERT INTO musicos (nombre, rut, curso, nivel) VALUES ($1, $2, $3, $4)";
    const values = [nombre, rut, curso, nivel];
    const res = await pool.query(sql, values);
    console.log(`Guardado:`);
  } catch (error) {
    console.error("Error:", error);
  }
};

const mostrarMusico = async () => {
  try {
    const sql = "SELECT * FROM musicos";
    const res = await pool.query(sql);
    console.log(res.rows);
  } catch (error) {
    console.error("Error:", error);
  }
};

const updateMusico = async (nombre, rut, curso, nivel) => {
  try {
    const sql =
      "UPDATE musicos SET nombre = $1, rut = $2, curso = $3, nivel = $4 WHERE rut = $2";
    const values = [nombre, rut, curso, nivel];
    const res = await pool.query(sql, values);
    console.log(`Actualizado:`);
  } catch (error) {
    console.error("Error:", error);
  }
};

const deleteMusico = async (rut) => {
  try {
    const sql = "DELETE FROM musicos WHERE rut = $1";
    const values = [rut];
    const res = await pool.query(sql, values);
    console.log(`Eliminado: ${rut}`);
  } catch (error) {
    console.error("Error:", error);
  }
};

switch (opcion) {
  case "agregar":
    agregarMusico(nombre, rut, curso, nivel);
    break;
  case "mostrar":
    mostrarMusico();
    break;
  case "actualizar":
    updateMusico(nombre, rut, curso, nivel);
    break;
  case "eliminar":
    deleteMusico(rut);
    break;
  default:
    console.log("Comando no reconocido");
}
