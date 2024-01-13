export interface IPeopleResponse {
  count: number
  next: string | null
  previous: string | null
  results: IPeopleData[]
}

export interface IPeopleData {
  birth_year: string
  eye_color: string
  films: string[]
  gender: string
  hair_color: string
  height: string
  homeworld: string
  mass: string
  name: string
  skin_color: string
  created: string
  edited: string
  species: string[]
  starships: string[]
  url: string
  vehicles: string[]
}

export interface IPeople {
  name: string
  url: string
  id: string
  imgUrl: string
}

enum PersonCharacters {
  HAIR = "Hair",
  MASS = "Mass",
  HAIR_COLOR = "Hair Color",
  SKIN_COLOR = "Skin Color",
  EYE_COLOR = "Eye Color",
  BIRTH_YEAR = "Birth Year",
  GENDER = "Gender",
}
