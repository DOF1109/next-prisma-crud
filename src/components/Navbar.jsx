import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-slate-900">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <h3 className="font-bold text-3xl py-3">Next.js CRUD</h3>
        </Link>

        <ul className="flex gap-5 text-lg font-bold text-slate-300 ">
          <li className="hover:text-slate-200">
            <Link href={"/new"}>New task</Link>
          </li>
          <li className="hover:text-slate-200">
            <Link href={"/about"}>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
