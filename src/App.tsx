import { SWAPI_BASE_URL, SWAPI_PEOPLE, getApiResource } from "@/utils/api"
;(async () => {
  const data = await getApiResource(SWAPI_BASE_URL + SWAPI_PEOPLE)
  console.log(data)
})()

const App = () => {
  return (
    <>
      <h1>App</h1>
    </>
  )
}
export default App
