import styles from "./PeopleList.module.css"
import { Link } from "react-router-dom"
import { IPeople } from "@/types"

export interface IPeopleListProps {
  people: IPeople[]
}

const PeopleList = (props: IPeopleListProps) => {
  const { people } = props

  return (
    <ul className={styles.list}>
      {people.map(({ name, url, id, imgUrl }) => (
        <li key={id} className={styles.item}>
          <Link to={`/people/${id}`} className={styles.item__link}>
            <img src={imgUrl} alt={name} className={styles.item__img} />
            <p className={styles.item__text}>{name}</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default PeopleList
