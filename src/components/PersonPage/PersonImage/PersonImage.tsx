import styles from "./PersonImage.module.css"

export interface IPersonImageProps {
  imgUrl: string
  personName: string
}

const PersonImage = (props: IPersonImageProps) => {
  const { imgUrl, personName } = props

  return (
    <div className={styles.container}>
      <img src={imgUrl} alt={personName} className={styles.photo} />
    </div>
  )
}

export default PersonImage
