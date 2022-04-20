import { Router } from "@vaadin/router";
import { state } from "../state";

const logo = require("url:../img/cashflow-nice-logo.png");
const burgerMenu = require("url:../img/burger-menu-blanco.png");
const xButton = require("url:../img/Vector.png");

export class Header extends HTMLElement {

    shadow: ShadowRoot;
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        const currentState = state.getState();
        const headerEl = document.createElement("header");
        headerEl.className = "header";
        const headerStyle = document.createElement("style");

        if (currentState.token) {

            headerEl.innerHTML = `
            <div class="logo-container">
                <img src=${logo} class="logo-img"/>
            </div>
            <div class="menu-nav">
                <nav class="nav">
                    <p class="nav-section contacto"> Contacto </p>
                    <p class="nav-section servicio"> Servicio </p>
                    <p class="nav-section dudas"> Dudas </p>
                    <p class="nav-section sesion"> Cerrar sesión </p>
                </nav>
            </div>
            <div class="menu-mobile">
                <img src=${burgerMenu} class="burger-menu"/>
            </div>
        `;
        } else {

            headerEl.innerHTML = `
                <div class="logo-container">
                    <img src=${logo} class="logo-img"/>
                </div>
                <div class="menu-nav">
                    <nav class="nav">
                        <p class="nav-section contacto"> Contacto </p>
                        <p class="nav-section servicio"> Servicio </p>
                        <p class="nav-section dudas"> Dudas </p>
                        <p class="nav-section sesion"> Iniciar sesión </p>
                    </nav>
                </div>
                <div class="menu-mobile">
                    <img src=${burgerMenu} class="burger-menu"/>
                </div>
            `;
        }

        headerStyle.innerHTML = `
            .header {
                width: 100%;
                display: flex;
                height: 100px;
                flex-direction: row;
                background-color: #111111;
                justify-content: space-between;
            }
            .logo-img {
                width: 215px;
                height: 70px;
                cursor: pointer;
                border-radius: 10px;
                margin: 15px 0 0 20px;
            }
            .nav {
                width: 310px;
                display: flex;
                column-gap: 10px;
                border-radius: 5px;
                flex-direction: row;
                margin: 25px 15px 0 0;
                background-color:#FBB11B;
                text-decoration: underline;
                justify-content: space-evenly;
            }
            .nav-section {
                cursor: pointer;
            }
            .menu-mobile {
                display: none;
            }
            @media(max-width: 570px) {
                .menu-mobile {
                    display: inherit;
                }
                .burger-menu {
                    width: 50px;
                    height: 40px;
                    margin: 30px 20px 0 0;
                }
                .nav {
                    display: none;
                }
            }
        `;

        headerEl.appendChild(headerStyle);
        this.shadow.appendChild(headerEl);

        const menuDisplay = document.createElement("div");
        menuDisplay.className = "menuDisplay";
        const menuDisplayStyle = document.createElement("style");

        const menuMobile = this.shadow.querySelector(".burger-menu");
        menuMobile.addEventListener("click", (e) => {
            e.preventDefault();

            menuDisplay.innerHTML = `
                <div class="menu-display">
                    <img src=${xButton} class="x-button" />
                    <div class="menu-options">
                        <h3 class="text"> Contacto </h3>
                        <h3 class="text"> Servicio </h3>
                        <h3 class="text"> Dudas </h3>
                        <h3 class="text"> Iniciar sesión </h3>
                    </div>
                </div>
            `;

            menuDisplayStyle.innerHTML = `
                .menu-display {
                    top: -0px;
                    right: 0px;
                    width: 60%;
                    height: 310px;
                    display: flex;
                    border-radius: 10px;
                    position: absolute;
                    align-items: center;
                    flex-direction: column;
                    background-color: #FEFEFE;
                }
                .menu-options {
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                }
                .text {
                    color: #FBB11B;
                    text-decoration: underline;
                }
                .x-button {
                    width: 40px;
                    height: 40px;
                    align-self: flex-end;
                    margin: 15px 15px 0 0;
                }
                @media(min-width: 560px) {
                    .menu-display {
                        display: none;
                    }
                }
            `;

            this.shadow.appendChild(menuDisplay);
            menuDisplay.appendChild(menuDisplayStyle);

            const closeMenu = this.shadow.querySelector(".x-button");
            closeMenu.addEventListener("click", (e) => {
                e.preventDefault();

                menuDisplayStyle.innerHTML = `
                    .menu-display {
                        display: none;
                    }
                `;

                headerStyle.innerHTML = `
                    .header {
                        width: 100%;
                        display: flex;
                        height: 100px;
                        flex-direction: row;
                        background-color: #111111;
                        justify-content: space-between;
                    }
                    .logo-img {
                        width: 215px;
                        height: 70px;
                        border-radius: 5px;
                        margin: 15px 0 0 20px;
                    }
                    .nav {
                        width: 310px;
                        display: flex;
                        column-gap: 10px;
                        border-radius: 5px;
                        flex-direction: row;
                        margin: 25px 20px 0 0;
                        background-color:#FBB11B;
                        text-decoration: underline;
                        justify-content: space-evenly;
                    }
                    .menu-mobile {
                        display: none;
                    }
                    @media(max-width: 570px) {
                        .menu-mobile {
                            display: inherit;
                        }
                        .burger-menu {
                            width: 50px;
                            height: 40px;
                            margin: 30px 20px 0 0;
                        }
                        .nav {
                            display: none;
                        }
                    }
                `;
            });
        });
    }
}

customElements.define('header-component', Header);