import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div style={{display: 'flex', flexDirection: 'row',alignItems: 'center'}}>
                <Image src="/logo.png" width={60} height={40} />
                &nbsp;&nbsp;&nbsp;&nbsp;NextJS
            </div>
            <div style={{display: 'flex', flexDirection: 'row',alignItems: 'center'}}>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/ninjas"><a>NinjaList</a></Link>
            </div>
        </nav>
       
     );
}
 
export default Navbar;