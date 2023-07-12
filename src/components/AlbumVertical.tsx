import Image from "next/image"

export default function AlbumVertical() {
    return (
        <a href="#" className='bg-white/5 p-4 rounded-md flex flex-col gap-2 hover:bg-white/10'>
            <Image src="/album.jpg" className="w-full" width={120} height={120} alt="Capa do Album Nevermind do Nirvana" />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-sm text-zinc-500'>Wallows, COIN, girl in red more</span>
        </a>
    )
}