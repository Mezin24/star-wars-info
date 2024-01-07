export const getIdFromUrl = (url: string) => {
  return url.split("/").at(-1) || url.split("/").at(-2)
}
