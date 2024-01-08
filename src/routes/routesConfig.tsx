import { RouteProps } from "react-router-dom"
import HomePage from "@/pages/HomePage"
import PeoplePage from "@/pages/PeoplePage"

export enum AppRoutes {
  HOME = "home",
  PEOPLE = "people",
}

export const RoutesPats: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.PEOPLE]: "/people",
}

export const routerConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: RoutesPats.home,
    element: <HomePage />,
  },
  [AppRoutes.PEOPLE]: {
    path: RoutesPats.people,
    element: <PeoplePage />,
  },
}
