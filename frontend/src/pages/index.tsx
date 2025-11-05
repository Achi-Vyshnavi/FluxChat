import Head from 'next/head';
import Layout from '../components/Layout';
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>FluxChat - No-Code Workflow Builder</title>
        <meta
          name="description"
          content="FluxChat: Real-time no-code workflow builder enabling collaborative custom workflows."
        />
      </Head>

      <section style={{ textAlign: 'center', marginTop: '4rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          Welcome to FluxChat!
        </h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
          Build, manage, and collaborate on custom workflows in real time — without writing a single line of code.
        </p>
      </section>
    </Layout>
  );
}
