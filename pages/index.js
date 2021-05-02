import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <>
      <Head>
        <title>Net Ninja | Home</title>
      </Head>
      <div>
        <h1>Homepage</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto iure corrupti reiciendis modi ipsum at, sit nisi assumenda velit molestias molestiae eius voluptates? Repellendus enim ipsa ad nulla magnam pariatur.</p>
        <br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto iure corrupti reiciendis modi ipsum at, sit nisi assumenda velit molestias molestiae eius voluptates? Repellendus enim ipsa ad nulla magnam pariatur.</p>
      </div>
      </>
  )
}
