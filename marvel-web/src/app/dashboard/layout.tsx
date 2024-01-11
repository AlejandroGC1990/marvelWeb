import Navbar from '../ui/Components/Navbar/Navbar';

export default function Layout (
  { children } : { children: React.ReactNode }
  ) {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>{children}</div>
    </div>
  );
}