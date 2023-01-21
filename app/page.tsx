import Image from 'next/image'
import { Inter } from '@next/font/google'
import Search from '../ui/Search';
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className="leading-6">Welcome to TF | Tomes</h1>
      <Search />
      <h2>Search for Summoners or Create an account for more in-depth information.</h2>
    </main>
  )
}
