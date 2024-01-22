import "./ui/globals.css";
import Home from "./dashboard/home/page";
import Navbar from "./ui/Components/Navbar/Navbar";

export default async function Page() {
  return (
    <main>
      <Navbar />
      
        <Home />
      
    </main>
  );
}
