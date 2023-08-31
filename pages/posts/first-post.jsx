import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/Layout';

const firstPost = () => {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <Script
                src='https://connect.facebook.net/en_US/sdk.js'
                strategy='lazyOnload'
                onLoad={() => console.log(`腳本正確地載入，window.FB 已被定義`)}
            />
            <div>
                <br />
                <Link href='/'>Back to home</Link>
                <br />
                {JSON.stringify(process.env.apiKey)}
                <Image
                    src='/images/all-2.webp' // 圖片文件的路徑
                    height={144}
                    width={144}
                    alt='Your Name'
                />
                <Link href='/posts/ssg-ssr'>前往 /posts/ssg-ssr</Link>
                <br />
                <Link href='/posts/pre-rendering'>前往 /posts/pre-rendering</Link>
            </div>
        </Layout>
    );
};
export default firstPost;
