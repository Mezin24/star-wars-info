import NotFoundImage from "./img/image.png"
import styles from "./NotFoundPage.module.css"
import { useLocation } from "react-router-dom"

const NotFoundPage: React.FC = () => {
  const location = useLocation()
  return (
    <>
      <img src={NotFoundImage} alt="not found" className={styles.img} />
      <p className={styles.text}>
        No match for <u>{location.pathname}</u>
      </p>
    </>
  )
}

export default NotFoundPage
