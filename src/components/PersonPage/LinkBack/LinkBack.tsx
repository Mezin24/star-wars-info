import { useCallback } from "react"
import { SlArrowLeft } from "react-icons/sl"
import { useNavigate } from "react-router-dom"
import styles from "./LinkBack.module.css"

const LinkBack: React.FC = () => {
  const navigate = useNavigate()
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault()
      navigate(-1)
    },
    [navigate],
  )
  return (
    <a href="/#" onClick={handleClick} className={styles.link}>
      <SlArrowLeft color="#ffff00" size={"30px"} />
      <span>Go Back</span>
    </a>
  )
}

export default LinkBack
