import styles from "./PersonFilms.module.css"

export interface IPersonFilmsProps {
  personFilms: string[]
}

const PersonFilms = (props: IPersonFilmsProps) => {
  const { personFilms } = props
  console.log(personFilms)

  return <div>PersonFilms</div>
}

export default PersonFilms
