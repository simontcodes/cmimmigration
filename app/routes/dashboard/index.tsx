import { Outlet, Link } from "@remix-run/react";
import Navbar from "~/components/Navbar";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <main>
        <h1>Dashboard</h1>
        <div className=" flex flex-col">
          <Link
            to={"/dashboard/questionnaire"}
            className="text-red-400 underline"
          >
            Questionnaire
          </Link>
          <Link
            to={"/dashboard/clients"}
            className="ml-3 text-red-400 underline"
          >
            Clients
          </Link>
        </div>
        <Outlet />
      </main>
    </>
  );
}
