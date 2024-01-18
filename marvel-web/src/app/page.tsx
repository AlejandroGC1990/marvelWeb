import "./ui/globals.css";
import Home from "./dashboard/home/page";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Home Page',
};
export default async function Page() {
  return (
    <main>
      <div className="app-container">
        <Home />
      </div>
    </main>
  );
}
