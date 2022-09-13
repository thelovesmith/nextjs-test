import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1> First Post</h1>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
    </Layout>
  );
}
export default FirstPost;
