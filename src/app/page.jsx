import NavBars from "./components/NavBars";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <NavBars />
      <h1 className="text-white text-4xl font-bold text-center pt-20">
        Hello World
      </h1>
    </div>
  );
}
