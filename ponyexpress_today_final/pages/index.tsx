import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pony Express LTD</title>
        <meta name="description" content="Dry Van, Heated and Tanker Freight | Pony Express LTD from Hamilton, Ontario" />
      </Head>
      <main className="text-center p-8">
        <h1 className="text-5xl font-bold mb-4 text-blue-900">Pony Express LTD</h1>
        <p className="text-xl text-gray-700">Dry Van | Heated | Tanker Freight – Hamilton, ON</p>
      </main>
    </>
  )
}