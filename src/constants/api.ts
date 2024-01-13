export const HTTP = "http"
export const HTTPS = "https"

const SWAPI_BASE_URL = "https://swapi.dev/api/"
const SWAPI_PEOPLE = "people"
const SWAPI_PAGE_PARAM = "/?page="
export const API_PEOPLE = SWAPI_BASE_URL + SWAPI_PEOPLE + SWAPI_PAGE_PARAM
export const API_PERSON = SWAPI_BASE_URL + SWAPI_PEOPLE

const GUIDE_BASE_URL = "https://starwars-visualguide.com/assets/img/"
const GUIDE_CATEGORY = "characters/"
export const GUIDE_IMG_EXTENSION = ".jpg"
export const URL_IMG_PERSON = GUIDE_BASE_URL + GUIDE_CATEGORY
