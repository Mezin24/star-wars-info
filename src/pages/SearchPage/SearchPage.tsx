import { useCallback, useEffect, useState } from "react"
import SearchPageInfo from "@/components/SearchPage/SearchPageInfo"
import {
  API_SEARCH,
  GUIDE_IMG_EXTENSION,
  URL_IMG_PERSON,
} from "@/constants/api"
import { withErrorApi } from "@/hoc/withErrorApi"
import { getIdFromUrl } from "@/services/getPeopleData"
import { IPeople, IPeopleData } from "@/types"
import { getApiResource } from "@/utils/api"

const SearchPage: React.FC = ({ setIsError }: any) => {
  const [value, setValue] = useState("")
  const [people, setPeople] = useState<IPeople[]>([])

  const getResource = useCallback(
    async (params: string) => {
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
    },
    [setIsError],
  )

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value
      setValue(inputValue)
      getResource(inputValue)
    },
    [getResource],
  )

  useEffect(() => {
    getResource("")
  }, [])

  return (
    <div>
      <h1 className="header__text">SearchPage</h1>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Input person search params"
      />
      <SearchPageInfo people={people} />
    </div>
  )
}

export default withErrorApi(SearchPage)
