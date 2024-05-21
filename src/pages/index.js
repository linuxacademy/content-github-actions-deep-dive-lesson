import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/global.css"

import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <header>
        <title>Cloud Coffee</title>
        <meta name="description" content="Bringing Coffee to the Cloud" />
      </header>
      
      <main className='main'>
        

          <h1 className='title'>
            Welcome to{' '}
            <code className='title_code'>Cloud Coffee</code>
          </h1>
      

          <p className='description'>
            Join Our Mailing List!
            <br/>
            <input type="text"></input>
            <br/>
            <button>Submit</button>
          </p>

          <footer className='footer'>
            <a
              href="https://acloud.guru"
            >
              Powered by{' '}
              <span className='logo'>
                <StaticImage src="../images/ACG_Orange_Logo_Horizontal.png" alt="A Cloud Guru logo" width={119} height={16} />
              </span>
            </a>
          </footer>
      </main>

      
    </Layout>
  )
}

export default IndexPage
