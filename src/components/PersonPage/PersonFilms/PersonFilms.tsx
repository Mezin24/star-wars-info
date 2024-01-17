import styles from "./PersonFilms.module.css"
import { useEffect, useState } from "react"
import { makeConcurentRequest, replaceProtocol } from "@/utils/api"

interface IFilmNames {
  title: string
  episode_id: number
}

export interface IPersonFilmsProps {
  personFilms: string[]
}

const PersonFilms = (props: IPersonFilmsProps) => {
  const { personFilms } = props
  const [filmNames, setFilmNames] = useState<IFilmNames[]>([])

  useEffect(() => {
    ;(async () => {
      const formtedUrls = personFilms.map((url) => replaceProtocol(url))
      const responses: IFilmNames[] = await makeConcurentRequest(formtedUrls)
      setFilmNames(responses)
    })()
  }, [personFilms])

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {filmNames
          .sort((a, b) => a.episode_id - b.episode_id)
          .map(({ episode_id, title }) => (
            <li key={episode_id} className={styles.item}>
              <span className={styles.episod}>Episode {episode_id}</span>
              <span className={styles.colon}> : </span>
              <span className={styles.title}>{title}</span>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default PersonFilms
