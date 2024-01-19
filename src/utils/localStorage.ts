export const setToLocalStorage = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data))
}

export const getFromLocalStorage = (key: string) => {
  const data = localStorage.getItem(key)

  if (data) {
    return JSON.parse(data)
  }

  return {
    ids: [],
    entities: {},
  }
}
