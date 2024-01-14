import styles from "./PersonInfo.module.css"

export interface IPersonInfoProps {
  personData: { title: string; data: string }[]
}

const PersonInfo = (props: IPersonInfoProps) => {
  const { personData } = props

  return personData.map(
    ({ data, title }) =>
      data && (
        <li key={title}>
          <span>
            {title}: {data}
          </span>
        </li>
      ),
  )
}

export default PersonInfo
