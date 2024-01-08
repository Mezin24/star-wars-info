import { Route, Routes } from "react-router-dom"
import { routerConfig } from "@routes/routesConfig"
import Header from "@components/Header"
import styles from "@styles/App.module.css"

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Routes>
        {Object.values(routerConfig).map(({ path, element }) => (
          <Route key={path} element={element} path={path} />
        ))}
      </Routes>
    </div>
  )
}
export default App
