import { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import Button from "@ui/Button"
import styles from "./Navigation.module.css"

export interface INavigationProps {
  previousPage: string | null
  nextPage: string | null
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  currentPage: number
}

const Navigation = (props: INavigationProps) => {
  const { nextPage, previousPage, setCurrentPage, currentPage } = props
  const navigate = useNavigate()

  const handlePrevious = useCallback(() => {
    if (previousPage) {
      setCurrentPage((prev) => prev - 1)
      navigate({ pathname: "/people", search: `?page=${currentPage - 1}` })
    }
  }, [navigate, currentPage, previousPage, setCurrentPage])

  const handleNext = useCallback(() => {
    if (nextPage) {
      setCurrentPage((prev) => prev + 1)
      navigate({ pathname: "/people", search: `?page=${currentPage + 1}` })
    }
  }, [navigate, nextPage, currentPage, setCurrentPage])

  return (
    <div className={styles.container}>
      <Button onClick={handlePrevious} disabled={!previousPage}>
        Previous
      </Button>
      <Button onClick={handleNext} disabled={!nextPage}>
        Next
      </Button>
    </div>
  )
}

export default Navigation
