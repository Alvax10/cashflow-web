import { Router } from "@vaadin/router";
import { state } from "../state";

const logo = require("url:../img/cashflow-nice-logo.png");
const cashflowImage = require("url:../img/cashflow-logo.png");
const burgerMenu = require("url:../img/burger-menu.png");
const xButton = require("url:../img/Vector.png");

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
        const currentState = state.getState();
        const footerEl = document.createElement("footer");
        footerEl.className = "footer";
        const footerStyle = document.createElement("style");

        
    }
}

customElements.define('footer-component', Footer);