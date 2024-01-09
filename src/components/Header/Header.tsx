import styles from "./Header.module.css"

import { NavLink } from "react-router-dom"

const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <ul className={styles.list__container}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/people/?page=1">People</NavLink>
        </li>
        <li>
          <NavLink to="/not-found">Not Found</NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header
