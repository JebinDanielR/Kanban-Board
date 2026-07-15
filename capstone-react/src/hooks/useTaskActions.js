import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export function useTaskActions() {
  return useContext(TaskContext);
}