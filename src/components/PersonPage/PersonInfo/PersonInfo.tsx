import styles from "./PersonInfo.module.css"

export interface IPersonInfoProps {
  personData: { title: string; data: string }[]
}

const PersonInfo = (props: IPersonInfoProps) => {
  const { personData } = props

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {personData.map(
          ({ data, title }) =>
            data && (
              <li key={title} className={styles.item}>
                <span className={styles.title}>{title}: </span>
                {data}
              </li>
            ),
        )}
      </ul>
    </div>
  )
}

export default PersonInfo
