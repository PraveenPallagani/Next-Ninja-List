import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const PageNotFound404 = () => {
    const router = useRouter();
    useEffect(() =>{
        setTimeout(() =>{
            router.replace('/');
        },3000);
    },[]);
    return (
        <>
            <Head>
                <title>Ninja List | 404 Not Found</title>
                <meta name="keywords" content="ninjas"/>
            </Head>
            <div>
                <ul>
                    <li>Ooooops....</li>
                    <li>Sorry requested page not found.</li>
                    <li><Link href="/"><a>Go to home</a></Link></li>
                </ul>
            </div>
        </>
      );
}
 
export default PageNotFound404;