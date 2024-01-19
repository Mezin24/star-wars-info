import styles from "./Favorites.module.css"
import bookmarkImg from "./img/bookmark.svg"
import { Link } from "react-router-dom"

const Favorites: React.FC = () => {
  return (
    <div className={styles.container}>
      <Link to="/favorites">
        <span className={styles.counter}>0</span>
        <img src={bookmarkImg} alt="bookmark" className={styles.icon} />
      </Link>
    </div>
  )
}

export default Favorites
