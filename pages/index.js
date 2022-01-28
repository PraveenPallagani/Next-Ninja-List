import styles from '../styles/Home.module.css';
import Head from 'next/head';

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas"/>
    </Head>
    <div>
    <h2>Home Page</h2>
        <p>
            This is a ninja list page, build using the next js. NextJS is used for server side rendering for the site.
            It was a small demo application, used the next js as backend service and deployed to vercel.
        </p>
    </div>
    </>
  )
}
