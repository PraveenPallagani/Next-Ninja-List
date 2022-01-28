import Link from 'next/link';
import Head from 'next/head';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
        props:{
            ninjas:data
        }
    };
}


const NinjaList = ({ninjas}) => {

    const content = ninjas.map(ninja=>(
        <Link key={ninja.id} href={'/ninjas/'+ninja.id}>
            <a>{ninja.id} - {ninja.name}</a>
        </Link>
    ));

    return ( 
        <>
            <Head>
                <title>Ninja List | Ninjas</title>
            </Head>
            <div>
                <h2>NinjaList Page</h2>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    {content}
                </div>
            </div>
        </>
    );
}
 
export default NinjaList;