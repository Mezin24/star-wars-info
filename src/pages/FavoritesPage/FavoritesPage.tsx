import styles from "./FavoritesPage.module.css"
import { useAppSelector } from "@/app/hooks"
import { getFavorites } from "@/features/favorites/favoritesSelectors"

const FavoritesPage: React.FC = () => {
  const { favorites } = useAppSelector(getFavorites)
  console.log(favorites)
  return <div>FavoritesPage</div>
}

export default FavoritesPage
