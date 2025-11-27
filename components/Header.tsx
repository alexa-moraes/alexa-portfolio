import Link from 'next/link';

export default function Header() {
    return (
        <header className='w-full py-6 border-b border-b-[rgba(180,140,110,0.06]'>
            <div className='max-w-4xl mx-auto px-6 flex items-center justify-between'>
                <div>
                    <h1 className='text-da-paper font-serif text-2xl'>Alexa - Pesquisadora</h1>
                    <p className='text-sm text-da-accent'>Cognição Social · Preconceito · Neurociência Moral</p>
                </div>
                <nav>
                    <ul className='flex gap-6 text-sm'>
                        <li><Link href='' legacyBehavior><a className='accent'>Home</a></Link></li>
                        <li><Link href='/pesquisas' legacyBehavior><a className='accent'>Pesquisas</a></Link></li>
                        <li><Link href='/producoes' legacyBehavior><a className='accent'>Produções</a></Link></li>
                        <li><Link href='/materiais' legacyBehavior><a className='accent'>Materiais</a></Link></li>
                        <li><Link href='/contato' legacyBehavior><a className='accent'>Contato</a></Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}