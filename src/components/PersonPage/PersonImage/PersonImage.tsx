import { useCallback } from "react"
import favoriteIcon from "./img/favorite.svg"
import notFavoriteIcon from "./img/not-favorite.svg"
import styles from "./PersonImage.module.css"
import { useAppDispatch } from "@/app/hooks"
import {
  addToFavorites,
  removeFromFavorites,
} from "@/features/favorites/favoritesSlice"

export interface IPersonImageProps {
  id: string
  imgUrl: string
  personName: string
  isFavorite: boolean
}

const PersonImage = (props: IPersonImageProps) => {
  const { imgUrl, personName, id, isFavorite } = props
  const dispatch = useAppDispatch()

  const toggleFavorite = useCallback(() => {
    if (isFavorite) {
      dispatch(removeFromFavorites(id))
    } else {
      dispatch(addToFavorites({ imgUrl, name: personName, id }))
    }
  }, [dispatch, id, imgUrl, isFavorite, personName])

  return (
    <>
      <div className={styles.container}>
        <img src={imgUrl} alt={personName} className={styles.photo} />
        <button onClick={toggleFavorite} className={styles.btn}>
          <img
            src={isFavorite ? favoriteIcon : notFavoriteIcon}
            alt="star icon"
            className={styles.icon}
          />
        </button>
      </div>
    </>
  )
}

export default PersonImage
