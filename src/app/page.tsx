import Image from 'next/image'
import { ChevronLeft, ChevronRight, Shuffle, SkipBack, Play, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume1, Maximize2 } from 'lucide-react'
import AlbumHorinzontal from '@/components/AlbumHorizontal'
import AlbumVertical from '@/components/AlbumVertical'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        
        <Sidebar />

        <main className="flex-1 p-6">
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1'><ChevronLeft /></button>
            <button className='rounded-full bg-black/40 p-1'><ChevronRight /></button>
          </div>

          <h1 className='font-semibold text-3xl mt-5'>Good Afternoon</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-4 mt-4">
            <AlbumHorinzontal />
            <AlbumHorinzontal />
            <AlbumHorinzontal />
            <AlbumHorinzontal />
            <AlbumHorinzontal />
            <AlbumHorinzontal />
          </div>

          <h1 className='font-semibold text-2xl mt-5'>Made for Diego Schell Fernandes</h1>

          <div className='grid  grid-cols-2  md:grid-cols-2 lg:grid-cols-4  xl:grid-cols-5  xxl:grid-cols-7 gap-6 mt-4'>
            <AlbumVertical />
            <AlbumVertical />
            <AlbumVertical />
            <AlbumVertical />
            <AlbumVertical />
            <AlbumVertical />
            <AlbumVertical />
          </div>
        </main>
      </div>
      
      <Footer/>

    </div>
  )
}
