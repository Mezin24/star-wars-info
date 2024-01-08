import { IPeople } from "@/types"
import styles from "./PeopleList.module.css"

export interface IPeopleListProps {
  people: IPeople[]
}

const PeopleList = (props: IPeopleListProps) => {
  const { people } = props

  return (
    <ul className={styles.list}>
      {people.map(({ name, url, id, imgUrl }) => (
        <li key={id} className={styles.item}>
          <a href={url} target="_blank" className={styles.item__link}>
            <img src={imgUrl} alt={name} className={styles.item__img} />
            <p className={styles.item__text}>{name}</p>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default PeopleList
