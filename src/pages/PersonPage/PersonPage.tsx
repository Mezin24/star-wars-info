import styles from "./PersonPage.module.css"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getApiResource } from "@/utils/api"
import {
  API_PERSON,
  GUIDE_IMG_EXTENSION,
  URL_IMG_PERSON,
} from "@/constants/api"
import { IPeopleData } from "@/types"
import { withErrorApi } from "@/hoc/withErrorApi"
import PersonInfo from "@/components/PersonPage/PersonInfo"
import PersonImage from "@/components/PersonPage/PersonImage"

const PersonPage: React.FC = ({ setIsError }: any) => {
  const { id } = useParams<{ id: string }>()
  const [personData, setPersonData] = useState<
    { title: string; data: string }[] | null
  >(null)
  const [personName, setPersonName] = useState<string | null>(null)
  const [imgUrl, setImgUrl] = useState<string | null>(null)

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
      } else {
        setIsError(true)
      }
    })()
  }, [])

  return (
    <div className={styles.wrapper}>
      <span className={styles.name}>{personName}</span>
      <div className={styles.container}>
        {imgUrl && (
          <PersonImage imgUrl={imgUrl} personName={personName || "person"} />
        )}
        <ul>{personData && <PersonInfo personData={personData} />}</ul>
      </div>
    </div>
  )
}

export default withErrorApi(PersonPage)
