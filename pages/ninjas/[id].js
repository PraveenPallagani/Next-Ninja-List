import Head from 'next/head';
import {useRouter} from 'next/router';

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(ninja=>{
        return {params:{id:ninja.id.toString()}};
    });

    return {
        paths:paths,
        fallback:false
    }
}


export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/'+id);
    const data = await res.json();
    return {
        props:{
            ninja:data
        }
    };
}

const Details = ({ninja}) => {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>{`Ninja List | ${ninja.name}`}</title>
            </Head>
            <div>
                <h3>{ninja.name}</h3>
                <ul>
                    <li><b>Email:</b> {ninja.email}</li>
                    <li><b>Website:</b> {ninja.website}</li>
                    <li><b>City:</b> {ninja.address.city}</li>
                </ul>
                <button onClick={()=>{router.back()}}>Go Back</button>
            </div>
        </>
    );
}

export default Details;