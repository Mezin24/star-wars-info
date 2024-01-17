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
    <div>
      <ul>
        {filmNames
          .sort((a, b) => a.episode_id - b.episode_id)
          .map(({ episode_id, title }) => (
            <li key={episode_id}>
              <span>Episode {episode_id}</span>
              <span> : </span>
              <span>{title}</span>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default PersonFilms
