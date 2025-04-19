import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/guilhermemarques1.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Guilherme Marques</strong>
              <time title="15 de abril de 2025" datetime="2025-04-15 00:07:35">Cerca de 1h atrás</time>
            </div>

            {/* Para button que é apenas um ícone ou que não tem texto dentro dele, para acessibilidade é bom ter um title */}
            <button title="Deleter comentário">
              <Trash size={20}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}