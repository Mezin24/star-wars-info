import { useEffect, useState } from "react"
import styles from "./PersonFilms.module.css"
import { makeConcurentRequest, replaceProtocol } from "@/utils/api"
import Loader from "@/components/UI/Loader"

interface IFilmNames {
  title: string
  episode_id: number
}

export interface IPersonFilmsProps {
  personFilms: string[]
}

const PersonFilms = (props: IPersonFilmsProps) => {
  const { personFilms } = props
  const [filmNames, setFilmNames] = useState<IFilmNames[] | null>(null)

  useEffect(() => {
    ;(async () => {
      // const formtedUrls = personFilms
      //   .map((url) => replaceProtocol(url))
      //   .filter((url) => url !== null)

      const responses: IFilmNames[] = await makeConcurentRequest(personFilms)
      setFilmNames(responses)
    })()
  }, [personFilms])

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {filmNames ? (
          filmNames
            .sort((a, b) => a.episode_id - b.episode_id)
            .map(({ episode_id, title }) => (
              <li key={episode_id} className={styles.item}>
                <span className={styles.episod}>Episode {episode_id}</span>
                <span className={styles.colon}> : </span>
                <span className={styles.title}>{title}</span>
              </li>
            ))
        ) : (
          <Loader theme="white" hasShadow />
        )}
      </ul>
    </div>
  )
}

export default PersonFilms
