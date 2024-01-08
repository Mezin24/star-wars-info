import { useCallback, useEffect, useState } from "react"
import styles from "./PeoplePage.module.css"
import { getApiResource } from "@/utils/api"
import {
  API_PEOPLE,
  GUIDE_IMG_EXTENSION,
  URL_IMG_PERSON,
} from "@/constants/api"
import { IPeople, IPeopleResponse } from "@/types"
import { getIdFromUrl } from "@/services/getPeopleData"
import PeopleList from "@/components/PeoplePage/PeopleList"

const PeoplePage = () => {
  const [people, setPeople] = useState<IPeople[] | null>(null)

  const getResource = useCallback(async () => {
    const data: IPeopleResponse = await getApiResource(API_PEOPLE)
    const peopleLits = data.results.map(({ name, url }) => {
      const id = getIdFromUrl(url)!
      const person = {
        name,
        url,
        id,
        imgUrl: URL_IMG_PERSON + id + GUIDE_IMG_EXTENSION,
      }
      return person
    })

    setPeople(peopleLits)
  }, [])

  useEffect(() => {
    getResource()
  }, [getResource])

  console.log(people)

  return <>{people && <PeopleList people={people} />}</>
}

export default PeoplePage
