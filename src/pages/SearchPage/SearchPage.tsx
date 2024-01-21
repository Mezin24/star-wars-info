import styles from "./SearchPage.module.css"
import { useCallback, useState } from "react"
import { getApiResource } from "@/utils/api"
import { API_SEARCH } from "@/constants/api"
import { withErrorApi } from "@/hoc/withErrorApi"

const SearchPage: React.FC = ({ setIsError }: any) => {
  const [value, setValue] = useState("")

  const getResource = useCallback(
    async (params: string) => {
      const res = await getApiResource(API_SEARCH + params)

      if (res) {
        setIsError(false)
        console.log(res)
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

  return (
    <div>
      <h1 className="header__text">SearchPage</h1>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Input person search params"
      />
    </div>
  )
}

export default withErrorApi(SearchPage)
