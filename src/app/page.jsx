"use client";

import TaskCard from "@/components/TaskCard";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const res = await fetch("http://localhost:3000/api/tasks").then((resp) =>
      resp.json()
    );
    setTasks(res);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-3 gap-3 mt-10">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
};

export default HomePage;
