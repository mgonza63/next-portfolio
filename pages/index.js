import Head from 'next/head'
import Layout from '../components/Layout'


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div class="grid">
        <header>
          Header
        </header>

        <aside class="sidebar-left">
          Left Sidebar
        </aside>

        <article>
          Article
        </article>

        <aside class="sidebar-right">
          Right Sidebar
        </aside>
        
        <footer>
          Footer
        </footer>
      </div>
      

    </Layout>
  )
}
