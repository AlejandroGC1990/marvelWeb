import Image from 'next/image'
import Navbar from './ui/Components/Navbar'

export default function Home() {
  return (
    <main>
      <div className="w-full flex-none md:w-64">
        <Navbar />
      </div>
      <h1>Home</h1>
    </main>
  )
}
