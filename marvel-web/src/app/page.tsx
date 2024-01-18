import "./ui/globals.css";
import Home from "./dashboard/home/page";

export default async function Page() {
  return (
    <main>
      <div className="app-container">
        <Home />
      </div>
    </main>
  );
}
