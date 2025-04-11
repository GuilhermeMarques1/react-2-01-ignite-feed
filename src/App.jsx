import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import './global.css'

import styles from './App.module.css'

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <h1>Hello world</h1>
        </main>
      </div>
    </div>
  )
}

export default App
