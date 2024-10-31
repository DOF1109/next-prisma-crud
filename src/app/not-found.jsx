import Link from "next/link";

const NotFound = () => {
  return (
    <section className="flex justify-center items-center h-[calc(100vh-4rem)]">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Not found :P</h1>
        <Link className="text-slate-300" href="/">
          Go home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
