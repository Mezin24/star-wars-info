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
}

const PersonImage = (props: IPersonImageProps) => {
  const { imgUrl, personName, id } = props
  const dispatch = useAppDispatch()

  return (
    <>
      <div className={styles.container}>
        <img src={imgUrl} alt={personName} className={styles.photo} />
      </div>
      <button
        onClick={() =>
          dispatch(addToFavorites({ img: imgUrl, name: personName, id }))
        }
      >
        Add
      </button>
      <button onClick={() => dispatch(removeFromFavorites(id))}>Remove</button>
    </>
  )
}

export default PersonImage
