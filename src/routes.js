import React from "react";
import { Phones, Homepage, Detail, About, AddPhonepage } from "./containers";

const routes = [
  {
    path: "/react-phone-comment-app/",
    exact: true,
    component: Homepage,
    title: Phones,
  },
  {
    path: "/react-phone-comment-app/phones",
    exact: false,
    component: Phones,
    title: Phones,
  },
  {
    path: "/react-phone-comment-app/detail/:id",
    exact: false,
    component: Detail,
    title: Phones,
  },
  {
    path: "/react-phone-comment-app/about",
    exact: false,
    component: About,
    title: Phones,
  },
  {
    path: "/react-phone-comment-app/add-phone",
    exact: false,
    component: AddPhonepage,
    title: Phones,
  },
];

export default routes;
