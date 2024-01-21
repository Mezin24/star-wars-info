import styles from "./SearchPageInfo.module.css"
import { Link } from "react-router-dom"

import { IPeople } from "@/types"

export interface ISearchPageInfoProps {
  people: IPeople[]
}

const SearchPageInfo = (props: ISearchPageInfoProps) => {
  const { people } = props

  return (
    <div className={styles.container}>
      {people.length > 0 ? (
        <ul className={styles.list}>
          {people.map(({ id, name, imgUrl }) => (
            <li key={id} className={styles.item}>
              <Link to={`/people/${id}`} className={styles.link}>
                <img src={imgUrl} alt={name} className={styles.img} />
                <p className={styles.name}>{name}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <h1 className={styles.comment}>No Data</h1>
      )}
    </div>
  )
}

export default SearchPageInfo
