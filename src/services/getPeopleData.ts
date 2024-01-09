/**
 * Get Id from url
 * @param url -string
 * @returns -string ID from url
 */

import { API_PEOPLE } from "@/constants/api"

export const getIdFromUrl = (url: string) => {
  return url.split("/").at(-1) || url.split("/").at(-2)
}

/**
 * Get page from url and convert to number
 * @param url - string url
 * @returns - number, page from url
 */

export const getPeoplePageId = (url: string) => {
  return +url.replace(API_PEOPLE, "")
}
