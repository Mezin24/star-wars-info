import styles from "./FavoritesPage.module.css"
import { useAppSelector } from "@/app/hooks"
import PeopleList from "@/components/PeoplePage/PeopleList"
import { favoritesSelectors } from "@/features/favorites/favoritesSelectors"
import { IPeople } from "@/types"

const FavoritesPage: React.FC = () => {
  const favorites = useAppSelector(favoritesSelectors.selectAll)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>FavoritesPage</h1>
      {favorites.length ? (
        <PeopleList people={favorites as IPeople[]} />
      ) : (
        <h2>No data</h2>
      )}
    </div>
  )
}

export default FavoritesPage
