import Image from "next/image"
import { Play } from 'lucide-react'

export default function AlbumHorinzontal() {
    return (
        <a href="#" className='bg-white/5 rounded-md group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
            <Image src="/album.jpg" width={95} height={95} alt="Capa do Album Nevermind do Nirvana" />
            <strong>Nevermind</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible'>
                <Play />
            </button>
        </a>
    )
}