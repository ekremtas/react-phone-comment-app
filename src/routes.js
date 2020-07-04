import React from "react";
import { Phones, Homepage, Detail, About } from "./containers";

const routes = [
  {
    path: "/react-phone-comment-app/",
    exact: true,
    component: Homepage,
    title: Phones,
  },
  {
    path: "/phones",
    exact: false,
    component: Phones,
    title: Phones,
  },
  {
    path: "/detail/:id",
    exact: false,
    component: Detail,
    title: Phones,
  },
  {
    path: "/about",
    exact: false,
    component: About,
    title: Phones,
  },
  {
    path: "/add-phone",
    exact: false,
    component: () => {
      return (
        <div>
          <h1>TElefon Ekleeeeee</h1>
        </div>
      );
    },
    title: Phones,
  },
];

export default routes;
