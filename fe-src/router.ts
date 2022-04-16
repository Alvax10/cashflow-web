import { Router } from "@vaadin/router";

const router = new Router(document.querySelector(".root"));
router.setRoutes([
    {path: "/", component: "home-page"},
    {path: "/login-1", component: "login1-page"},
    {path: "/login-2", component: "login2-page"},
    {path: "/mis-datos/registrarse", component: "mis-datos"},
]);