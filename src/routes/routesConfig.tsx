import { RouteProps } from "react-router-dom"
import HomePage from "@/pages/HomePage"
import PeoplePage from "@/pages/PeoplePage"
import NotFoundPage from "@/pages/NotFoundPage"

export enum AppRoutes {
  HOME = "home",
  PEOPLE = "people",
  NOT_FOUND = "not-found",
}

export const RoutesPats: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.PEOPLE]: "/people",
  [AppRoutes.NOT_FOUND]: "*",
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
  [AppRoutes.NOT_FOUND]: {
    path: RoutesPats["not-found"],
    element: <NotFoundPage />,
  },
}
