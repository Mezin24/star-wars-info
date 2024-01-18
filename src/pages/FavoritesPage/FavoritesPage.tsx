import styles from "./FavoritesPage.module.css"
import { useAppSelector } from "@/app/hooks"
import { favoritesSelectors } from "@/features/favorites/favoritesSelectors"

const FavoritesPage: React.FC = () => {
  const favorites = useAppSelector(favoritesSelectors.selectAll)
  console.log(favorites)
  return <div>FavoritesPage</div>
}

export default FavoritesPage
