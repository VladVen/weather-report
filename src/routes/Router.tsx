import Main from "../pages/Main/Main";
import City from "../pages/City/City";
import Error from "../pages/Error/Error";

export const routes = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/city/:id",
    element: <City />,
  },
  {
    path: "/error",
    element: <Error />,
  },
];
