import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import './global.css'

import styles from './App.module.css'
import { PostType, Post } from './components/Post'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Desenvolvedor Web"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋' },
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2025-04-16 22:13:34')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @ Rocketseat"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋' },
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2025-03-12 07:13:34')
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/guilhermemarques1.png",
      name: "Guilherme Marques",
      role: "Desenvolvedor Web"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋' },
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2025-02-03 20:13:34')
  },
]

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
