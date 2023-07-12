import {Home as HomeIcon, Search, Library} from 'lucide-react'

export default function Sidebar() {
    return (
        <aside className="w-72 bg-zinc-950 p-6 hidden  md:block">
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full'></div>
            <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
            <div className='w-3 h-3 bg-green-500 rounded-full'></div>
          </div>


          <nav className='space-y-5 mt-10'>
            <a href="" className='flex items-center gap-2 text-sm font-semibold text-zinc-200'>
              <HomeIcon />
              Home
            </a>
            <a href="" className='flex items-center gap-2 text-sm font-semibold text-zinc-200'>
              <Search />
              Search
            </a>
            <a href="" className='flex items-center gap-2 text-sm font-semibold text-zinc-200'>
              <Library />
              Your Library
            </a>
          </nav>

          <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-2'>
            <Playlist nome="Vibração do Verão"/>
            <Playlist nome="Clássicos da Década de 80"/>
            <Playlist nome="Sons Relaxantes"/>
            <Playlist nome="Energia Matinal"/>
            <Playlist nome="Top Hits Internacionais"/>
            <Playlist nome="Ritmos Latinos"/>
            <Playlist nome="Indie Alternativo"/>
            <Playlist nome="Música para Malhar"/>
            <Playlist nome="Canções Acústicas"/>
            <Playlist nome="Party Mix: Dançando a Noite Toda"/>
            <Playlist nome="Trilhas Sonoras de Filmes"/>
          </nav>
        </aside>
    )
}

function Playlist({nome}){
  return(
      <a href="#" className='text-sm text-zinc-400 hover:text-zinc-100'>{nome}</a>
  )
}

