import { useCallback, useEffect, useState } from "react"
import styles from "./PeoplePage.module.css"
import { getApiResource } from "@/utils/api"
import {
  API_PEOPLE,
  GUIDE_IMG_EXTENSION,
  URL_IMG_PERSON,
} from "@/constants/api"
import { IPeople, IPeopleResponse } from "@/types"
import { getIdFromUrl } from "@services/getPeopleData"
import PeopleList from "@components/PeoplePage/PeopleList"
import { withErrorApi } from "@hoc/withErrorApi"

const PeoplePage = ({ setIsError }: any) => {
  const [people, setPeople] = useState<IPeople[] | null>(null)

  const getResource = useCallback(async () => {
    const res: IPeopleResponse = await getApiResource(API_PEOPLE)

    if (res) {
      const peopleLits = res.results.map(({ name, url }) => {
        const id = getIdFromUrl(url)!
        const person = {
          name,
          url,
          id,
          imgUrl: URL_IMG_PERSON + id + GUIDE_IMG_EXTENSION,
        }
        return person
      })
      setIsError(false)
      setPeople(peopleLits)
    } else {
      setIsError(true)
    }
  }, [setIsError])

  useEffect(() => {
    getResource()
  }, [getResource])

  return (
    <>
      <h2>Navigation</h2>
      {people && <PeopleList people={people} />}
    </>
  )
}

export default withErrorApi(PeoplePage)
