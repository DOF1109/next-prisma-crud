"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NewPage = ({ params }) => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setDescription(data.description);
        });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (params.id) {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application-json",
        },
        body: JSON.stringify({ title, description }),
      }).then((resp) => resp.json());
      console.log(res);
    } else {
      const res = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      }).then((resp) => resp.json);
    }

    router.push("/");
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure?")) {
      const resp = await fetch(`/api/tasks/${params.id}`, {
        method: "DELETE",
      }).then((res) => res.json());
      console.log(resp);

      router.push("/");
    }
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
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor="description" className="font-bold text-sm">
          Description
        </label>
        <textarea
          id="description"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          row="3"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button
          className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded"
          type="submit"
        >
          Submit
        </button>
        {params.id && (
          <button
            className="bg-red-500 hover:bg-red-700 font-bold py-2 px-4 rounded ml-4"
            type="button"
            onClick={handleDelete}
          >
            Delete
          </button>
        )}
      </form>
    </div>
  );
};

export default NewPage;
