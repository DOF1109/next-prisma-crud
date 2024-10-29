"use client";

import { useRouter } from "next/navigation";

const NewPage = () => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;

    const res = await fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    }).then((resp) => resp.json);

    router.push("/");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form className="bg-slate-800 p-10" onSubmit={handleSubmit}>
        <label htmlFor="title" className="font-bold text-sm">
          Title
        </label>
        <input
          id="title"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          type="text"
          placeholder="Title"
        />
        <label htmlFor="description" className="font-bold text-sm">
          Description
        </label>
        <textarea
          id="description"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          row="3"
          placeholder="Description"
        ></textarea>
        <button className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded">
          Create
        </button>
      </form>
    </div>
  );
};

export default NewPage;
