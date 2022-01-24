import Head from 'next/head';
import Link from 'next/link';
import { Button, Text } from '../components/common';
import { Layout } from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>JS Testing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container flex flex-col text-center">
        <Text variant="h1">Welcome to Full Stack Testing</Text>
        <div className="text-left mt-10">
          <h2 className="text-2xl">
            The purpose of this repo is to cover testing recipes across
          </h2>
          <ol className="mt-3 ml-10">
            <li className="mt-1 text-xl">1. React</li>
            <li className="mt-1 text-xl">2. Javascript</li>
            <li className="mt-1 text-xl">3. Node</li>
          </ol>
          <h2 className="text-2xl mt-10">Using common testing tools</h2>
          <ol className="mt-3 ml-10">
            <li className="mt-1 text-xl">1. Jest</li>
            <li className="mt-1 text-xl">2. React Testing Library</li>
            <li className="mt-1 text-xl">3. Cypress</li>
          </ol>
        </div>
        <div className="mt-10">
          <Button name="get-started">
            <Link href="/review">Leave a review</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
}
