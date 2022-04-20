import { Router } from "@vaadin/router";
import { state } from "../state";

const logo = require("url:../img/cashflow-nice-logo.png");
const instaImg = require("url:../img/insta-icon.png");
const facebookImg = require("url:../img/facebook-icon.png");

export class Footer extends HTMLElement {

    shadow: ShadowRoot;
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        const footerEl = document.createElement("footer");
        footerEl.className = "footer";
        const footerStyle = document.createElement("style");

        footerEl.innerHTML = `
            <section class="imgs">
                <div class="redes">
                    <label class="label">
                        Instagram
                    <img src=${instaImg} class="img" alt="Instagram" />
                    </label>
                    <label class="label">
                        Facebook
                        <img src=${facebookImg} class="img" alt="Facebook" />
                    </label>
                </div>
                <img class="logo" src=${logo} />
            </section>
            <section class="help">
                <p class="text"> Todos los derechos reservados @ClasesCashflow™ </p>
                <p class="text"> Para soporte y dudas a: alvaro695547@gmail.com </p>
            </section>
        `;

        footerStyle.innerHTML = `
            .footer {
                width: 100%;
                display: flex;
                flex-direction: column;
                background-color: #111111;
            }
            .imgs {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            .logo {
                width: 350px;
                height: 120px;
                cursor: pointer;
                padding: 5px 15px;
                border-radius: 25px;
                margin: 15px 0 0 20px;
            }
            @media(max-width: 525px) {
                .logo {
                    width: 250px;
                    height: 90px;
                }
            }
            .redes {
                display: flex;
                flex-direction: column;
            }
            .label {
                display: flex;
                color: #F6F6F6;
                margin: 15px 0;
                align-items: center;
                flex-direction: row-reverse;
            }
            .img {
                padding: 5px 15px;
            }
            .text {
                color: #F6F6F6;
            }
            .help {
                display: flex;
                padding: 0 15px;
                margin-top: 45px;
                justify-content: space-between;
            }
            @media(max-width: 700px) {
                .text {
                    width: 250px;
                }
            }
        `;
        
        footerEl.appendChild(footerStyle);
        this.shadow.appendChild(footerEl);
    }
}

customElements.define('footer-component', Footer);