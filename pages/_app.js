"use client"
import Layout from '@/components/Layout'
import '@/styles/globals.css'

export default function MyApp({ Component, pageProps }) {
   if(Component.name === "Login") {
    return <Component {...pageProps} />
   }
    return (
        <Layout key={'layout'}>
            <Component key={Component.name} {...pageProps}/>
        </Layout>
    )
}