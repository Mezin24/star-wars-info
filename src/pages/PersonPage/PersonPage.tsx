import { Suspense, lazy, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styles from "./PersonPage.module.css"
import { useAppSelector } from "@/app/hooks"
import LinkBack from "@/components/PersonPage/LinkBack"
import PersonImage from "@/components/PersonPage/PersonImage"
import PersonInfo from "@/components/PersonPage/PersonInfo"
import Loader from "@/components/UI/Loader"
import {
  API_PERSON,
  GUIDE_IMG_EXTENSION,
  URL_IMG_PERSON,
} from "@/constants/api"
import { favoritesSelectors } from "@/features/favorites/favoritesSelectors"
import { withErrorApi } from "@/hoc/withErrorApi"
import { IPeopleData } from "@/types"
import { getApiResource } from "@/utils/api"

const PersonFilms = lazy(() => import("@/components/PersonPage/PersonFilms"))

const PersonPage: React.FC = ({ setIsError }: any) => {
  const { id } = useParams<{ id: string }>()
  const isFavorite = useAppSelector((state) =>
    favoritesSelectors.selectById(state, id!),
  )

  const [personData, setPersonData] = useState<
    { title: string; data: string }[] | null
  >(null)
  const [personName, setPersonName] = useState<string | null>(null)
  const [imgUrl, setImgUrl] = useState<string | null>(null)
  const [personFilms, setPersonFilms] = useState<string[]>([])

  useEffect(() => {
    ;(async () => {
      const res: IPeopleData = await getApiResource(`${API_PERSON}/${id}`)

      if (res) {
        setIsError(false)
        setPersonData([
          { title: "Height", data: res.height },
          { title: "Mass", data: res.mass },
          { title: "Hair Color", data: res.hair_color },
          { title: "Skin Color", data: res.skin_color },
          { title: "Eye Color", data: res.eye_color },
          { title: "Birth Year", data: res.birth_year },
          { title: "Gender", data: res.gender },
        ])
        setPersonName(res.name)
        setImgUrl(URL_IMG_PERSON + id + GUIDE_IMG_EXTENSION)
        res.films.length && setPersonFilms(res.films)
      } else {
        setIsError(true)
      }
    })()
  }, [])

  return (
    <>
      <LinkBack />
      {personData ? (
        <div className={styles.wrapper}>
          <span className={styles.name}>{personName}</span>
          <div className={styles.container}>
            {imgUrl && (
              <PersonImage
                imgUrl={imgUrl}
                personName={personName || "person"}
                id={id!}
                isFavorite={isFavorite as boolean}
              />
            )}
            {personData && <PersonInfo personData={personData} />}
            {personFilms && (
              <Suspense fallback={<Loader theme="white" hasShadow />}>
                <PersonFilms personFilms={personFilms} />
              </Suspense>
            )}
          </div>
        </div>
      ) : (
        <div className={styles.loaderContainer}>
          <Loader />
        </div>
      )}
    </>
  )
}

export default withErrorApi(PersonPage)
