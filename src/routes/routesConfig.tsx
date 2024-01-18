import { RouteProps } from "react-router-dom"
import HomePage from "@/pages/HomePage"
import PeoplePage from "@/pages/PeoplePage"
import NotFoundPage from "@/pages/NotFoundPage"
import PersonPage from "@/pages/PersonPage"
import FavoritesPage from "@/pages/FavoritesPage"

export enum AppRoutes {
  HOME = "home",
  PEOPLE = "people",
  PERSON = "person",
  FAVORITES = "favorites",
  NOT_FOUND = "not-found",
}

export const RoutesPats: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.PEOPLE]: "/people",
  [AppRoutes.PERSON]: "/people/:id",
  [AppRoutes.FAVORITES]: "/favorites",
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
  [AppRoutes.PERSON]: {
    path: RoutesPats.person,
    element: <PersonPage />,
  },
  [AppRoutes.FAVORITES]: {
    path: RoutesPats.favorites,
    element: <FavoritesPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutesPats["not-found"],
    element: <NotFoundPage />,
  },
}
