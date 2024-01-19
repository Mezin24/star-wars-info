import styles from "./PeoplePage.module.css"
import { useCallback, useEffect, useState } from "react"
import { withErrorApi } from "@hoc/withErrorApi"
import PeopleList from "@components/PeoplePage/PeopleList"
import { getIdFromUrl, getPeoplePageId } from "@services/getPeopleData"
import {
  API_PEOPLE,
  GUIDE_IMG_EXTENSION,
  URL_IMG_PERSON,
} from "@/constants/api"
import { IPeople, IPeopleResponse } from "@/types"
import { getApiResource, replaceProtocol } from "@/utils/api"
import { useQueryParams } from "@/hooks/useQueryParams"
import Navigation from "@/components/Navigation"
import Loader from "@/components/UI/Loader"

const PeoplePage = ({ setIsError }: any) => {
  const [people, setPeople] = useState<IPeople[] | null>(null)
  const [previousPage, setPreviousPage] = useState<null | string>(null)
  const [nextPage, setNextPage] = useState<null | string>(null)
  const [currentPage, setCurrentPage] = useState(+useQueryParams().get("page")!)

  const getResource = useCallback(
    async (url: string) => {
      const res: IPeopleResponse = await getApiResource(url)

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
        setNextPage(replaceProtocol(res.next as string))
        setPreviousPage(replaceProtocol(res.previous as string))
        setCurrentPage(getPeoplePageId(url))
      } else {
        setIsError(true)
      }
    },
    [setIsError],
  )

  useEffect(() => {
    getResource(API_PEOPLE + currentPage)
  }, [getResource, currentPage])

  return (
    <>
      <Navigation
        nextPage={nextPage}
        previousPage={previousPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      {people ? (
        <PeopleList people={people} />
      ) : (
        <div className={styles.loaderContainer}>
          {" "}
          <Loader />
        </div>
      )}
    </>
  )
}

export default withErrorApi(PeoplePage)
