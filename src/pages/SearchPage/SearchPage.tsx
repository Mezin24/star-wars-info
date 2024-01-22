import { useCallback, useEffect, useState } from "react"
import { debounce } from "lodash"
import styles from "./SearchPage.module.css"
import SearchPageInfo from "@/components/SearchPage/SearchPageInfo"
import Loader from "@/components/UI/Loader"
import {
  API_SEARCH,
  GUIDE_IMG_EXTENSION,
  URL_IMG_PERSON,
} from "@/constants/api"
import { withErrorApi } from "@/hoc/withErrorApi"
import { getIdFromUrl } from "@/services/getPeopleData"
import { IPeople, IPeopleData } from "@/types"
import { getApiResource } from "@/utils/api"
import Input from "@/components/UI/Input"

const SearchPage: React.FC = ({ setIsError }: any) => {
  const [value, setValue] = useState("")
  const [people, setPeople] = useState<IPeople[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const getResource = useCallback(
    async (params: string) => {
      setIsLoading(true)
      const res: { results: IPeopleData[] } = await getApiResource(
        API_SEARCH + params,
      )

      if (res) {
        setIsError(false)
        const people = res.results.map(({ url, name }) => {
          const id = getIdFromUrl(url)!
          return {
            id: id,
            name,
            url,
            imgUrl: URL_IMG_PERSON + id + GUIDE_IMG_EXTENSION,
          }
        })
        setPeople(people)
      } else {
        setIsError(true)
      }
      setIsLoading(false)
    },
    [setIsError],
  )

  const debouncedGetResponse = useCallback(
    debounce((value) => getResource(value), 300),
    [],
  )

  const handleChange = useCallback(
    (value: string) => {
      setValue(value)
      // getResource(value)
      debouncedGetResponse(value)
    },
    [debouncedGetResponse],
  )

  useEffect(() => {
    getResource("")
  }, [])

  return (
    <div>
      <h1 className="header__text">SearchPage</h1>
      <Input
        value={value}
        handleChange={handleChange}
        placeholder="Input character's name"
        classes={styles.input}
      />
      {isLoading ? (
        <div className={styles.loaderContainer}>
          <Loader />
        </div>
      ) : (
        <SearchPageInfo people={people} />
      )}
    </div>
  )
}

export default withErrorApi(SearchPage)
