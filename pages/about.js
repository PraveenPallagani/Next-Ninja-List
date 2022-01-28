import Head from 'next/head';

const About = () => {
    return ( 
        <>
            <Head>
                <title>Ninja List | About</title>
                <meta name="keywords" content="ninjas"/>
            </Head>
            <div>
                <h2>About Page</h2>
                <p>
                    This webiste is to show some ninjas as a list in ninja list page. Then for each ninja a seperate page.
                    All the page are server side rendered and the static page are build by <code>npm run build</code> command.
                    And ever thinf is deployed to vercel.  
                </p>
            </div>
        </>
    );
}
 
export default About;