import Link from "next/link"
import Head from 'next/head'
import Layout from "../../components/layout"

export default function FirstPost () {
	return (
		<Layout>
			<Head>
				<title>hello,First Post</title>
			</Head>
			<h1>hello,First Post</h1>
			<p>
				<Link href='/'>
					go Home
				</Link>
			</p>
			
			<Link href='/seconds/seconds'>
				go seconds
			</Link>
			<style jsx>{`
				h1{
					color:red;
				}
			`}</style>
		</Layout>
	)
}
