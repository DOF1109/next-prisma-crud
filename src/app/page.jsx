const loadTasks = async () => {
  const res = await fetch("http://localhost:3000/api/tasks").then((resp) =>
    resp.json()
  );
  return res;
};

const HomePage = async () => {
  const tasks = await loadTasks();

  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-3 gap-3 mt-10">
        {tasks.map((task) => (
          <div
            className="bg-slate-800 p-3 hover:bg-slate-700 hover:cursor-pointer"
            key={task.id}
          >
            <h3 className="font-bold text-2xl mb-2">{task.title}</h3>
            <p>{task.description}</p>
            <p>{new Date(task.createdAt).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePage;
