import Navbar from "~/components/Navbar";

export default function Index() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
        <h1>this is the home page</h1>
      </main>
    </>
  );
}
