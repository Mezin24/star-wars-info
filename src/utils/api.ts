import { IApiResponse } from "@/types"

export const SWAPI_BASE_URL = "https://swapi.dev/api/"
export const SWAPI_PEOPLE = "people"

export const getApiResource = async (url: string) => {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      console.log("Couldn't fetch data")
      return false
    }

    const data: IApiResponse = await response.json()
    return data
  } catch (error: unknown) {
    if (typeof error === "string") {
      console.log(error)
    } else if (error instanceof Error) {
      console.log(error.message)
    }
    return false
  }
}
