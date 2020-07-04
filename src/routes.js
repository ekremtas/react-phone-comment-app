import React from "react";
import { Phones } from "./containers";

const routes = [
    {
        path: "/react-phone-comment-app/",
        exact: true,
        component: () => {return <div><h1>Ana SAYFAAAA</h1></div>},
        title: Phones
    },
    {
        path: "/phones",
        exact: false,
        component: Phones,
        title: Phones
    },
    {
        path: "/add-phone",
        exact: false,
        component: () => {return <div><h1>TElefon Ekleeeeee</h1></div>},
        title: Phones
    }
]

export default routes;