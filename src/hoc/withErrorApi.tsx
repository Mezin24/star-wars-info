import ErrorMessage from "@components/ErrorMessage"
import { useState } from "react"

export interface InjectedProps {
  setIsError?: React.Dispatch<React.SetStateAction<boolean>>
}

export const withErrorApi = <T extends InjectedProps>(
  View: React.ComponentType<T>,
) => {
  return (props: T) => {
    const [isError, setIsError] = useState<boolean>(false)

    return isError ? (
      <ErrorMessage />
    ) : (
      <View {...(props as T)} setIsError={setIsError} />
    )
  }
}
