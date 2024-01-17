import { HTTP, HTTPS } from "@/constants/api"

/**
 * Get resource from API
 * @param url -string, url for fetch request
 * @returns Promise with fetch data
 */

export const getApiResource = async (url: string) => {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      console.log("Couldn't fetch data")
      return false
    }

    const data = await response.json()
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

/**
 * Update http protocol on https
 * @param url - string or null for updating protocol
 * @returns return  updated url with https protocol
 */

export const replaceProtocol = (url: string) => {
  return url ? (url.includes(HTTPS) ? url : url.replace(HTTP, HTTPS)) : null
}

/**
 * Make Concurent Request
 * @param urls - string array
 * @returns return  updated url with https protocol
 */

export const makeConcurentRequest = async (urls: string[]) => {
  const res = await Promise.all(
    urls.map((url) => fetch(url).then((res) => res.json())),
  )
  return res
}
