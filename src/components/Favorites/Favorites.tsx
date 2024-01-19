import styles from "./Favorites.module.css"
import bookmarkImg from "./img/bookmark.svg"
import { Link } from "react-router-dom"
import { useAppSelector } from "@/app/hooks"
import { favoritesSelectors } from "@/features/favorites/favoritesSelectors"

const Favorites: React.FC = () => {
  const totalFavorites = useAppSelector(favoritesSelectors.selectTotal)

  const favoriteCounter =
    totalFavorites.toString.length > 2 ? "..." : totalFavorites

  return (
    <div className={styles.container}>
      <Link to="/favorites">
        <span className={styles.counter}>{favoriteCounter}</span>
        <img src={bookmarkImg} alt="bookmark" className={styles.icon} />
      </Link>
    </div>
  )
}

export default Favorites
