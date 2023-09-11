import Image from 'next/image'
import Logo from '../../public/logo.png'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className="navbar__menu">
                <ul>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/about'>About</Link></li>
                    <li><Link href='/blog'>Blog</Link></li>
                </ul>
            </div>

            <div className="navbar__logo">
                <Image src={Logo} alt='logo' width={220} quality={100} placeholder='blur' />
            </div>

            <div className="navbar__menu">
                <ul>
                    <li><Link href='/menu'>Menu</Link></li>
                    <li><Link href='/shop'>Shop</Link></li>
                    <li><Link href='/contact'>Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}
