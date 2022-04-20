import { state } from "../state";
import { Router } from "@vaadin/router";
const cashflowLogo = require("url:../img/chasflow-logo.png");

class Home extends HTMLElement {

    shadow: ShadowRoot;
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }
    render() {

        const divEl = document.createElement('div');
        divEl.className = 'general-container';
        const style = document.createElement('style');

        divEl.innerHTML = `
            <header-component></header-component>
            <div class="main-body">
                <section class="text-section">
                    <h1> Aprende a jugar Cashflow! </h1>
                    <h3 class="subtitle"> ¿Quires saber como ganar en la vida? Juega Cashflow y descúbrelo! </h3>
                    <div class="text-container">
                        <p>
                            Acá va a ver mucho texto random explicando por qué decidimos arrancar con el proyecto, de que se trata y como son las cosas. Texto random lol alsjdlakjsdlkajsdlasdlkasjdlaksdjlakdsjlakjdslaksdjlaksdjlaksjdlaksdjl
                        </p>
                        <p>
                            Un poco más de texto pero por seaparado para que, visualmente hablando, sea más fácil y menos cansador de leer. texto random alsdjalk sdjlak sjdla ksjdlakj askjdlkasjd aksdj alwkjalkdjw woijd aw  jlkasañlsdkñalskdñasdñlkasdñalsdñalsdkñalskdñlkdññ
                        </p>
                    </div>
                </section>
                <div class="cashflow-image-container">
                    <img src=${cashflowLogo} class="cashflow-logo" />
                </div>
            </div>
            <section class="form-section">
                <p class="text"> Si desea recibir información extra o notificaciones, rellene el siguiente formulario. </p>
                <form class="form-event">
                    <div class="form">
                        <label class="label">
                            Nombre
                            <input class="input-name input" name="input-name" placeholder="Ej: Alvaro/Clara" />
                        </label>
                        <label class="label">
                            apellido
                            <input class="input-lastname input" name="input-lastname" placeholder="Ej: Fernandez/Roca" />
                        </label>
                        <label class="label">
                            Email
                            <input class="input-email input" name="input-email" placeholder="exmaple@gmail.com" />
                        </label>
                        <label class="label">
                            Mensaje
                            <textarea class="message" placeholder="Deposite su mensaje"></textarea>
                        </label>
                    </div>

                    <button class="button"> Enviar </button>
                </form>
            </section>
            <section class="paying-section">
                <h2 class="mini-title"> ¿Le ha interesado el curso? Lléveselo a precio unico! </h2>
                <p class="subtitle2"> El curso incluye clases presenciales, no tiene que disponer del juego de mesa cashflow clases 2 veces a la semana de 25hs a 28hs hora de la madrugada. Clases y partidas durante 5 meses. </p>
                <div class="comparing-prices">
                    <p class="first-price"> $100000000000 USD </p>
                    <p class="second-price"> $1 ARS </p>
                </div>
                <button class="button"> Quiero aprender! </button>
            </section>
            <footer-component></footer-component>
        `;

        style.innerHTML = `
        .main-body {
            display: flex;
            margin-bottom: 40px;
            justify-content: space-around;
        }
        .text-section {
            display: flex;
            padding-left: 10px;
            flex-direction: column;
        }
        .subtitle {
            padding: 10px 0;
            max-width: 400px;
        }
        .cashflow-image-container {
            width: 330px;
            margin: 20px;
            height: 270px;
            padding-top: 20px;
            border-radius: 10px;
            background-color: #FBB11B;
        }
        .cashflow-logo {
            width: 320px;
            height: 255px;
        }
        .text-container {
            color: #F6F6F6;
            max-width: 743px;
            padding: 5px 10px;
            border-radius: 10px;
            background-color: #572261;
        }
        @media(max-width: 800px) {
            .main-body {
                align-items: center;
                flex-direction: column;
            }
            .text-container {
                max-width: 350px;
                min-height: 100px;
                margin-bottom: 30px;
            }
        }
        .text {
            margin: 15px 10px;
            color: #F6F6F6;
            font-size: 22px;
            align-self: center;
        }
        .form-section {
            display: flex;
            border-radius: 5px;
            align-items: center;
            flex-direction: column;
            background-color: #572261;
        }
        .form-event {
            display: flex;
            flex-direction: column;
        }
        .form {
            display: grid;
            column-gap: 25px;
            grid-template-columns: 315px 315px;
            grid-template-rows: 80px 80px;
        }
        .label {
            display: flex;
            color: #F6F6F6;
            flex-direction: column;
        }
        .input {
            width: 312px;
            height: 30px;
            border: none;
            padding: 2px;
            margin-top: 2px;
            border-radius: 5px;
            margin-bottom: 15px;
            background-color: #F6F6F6;
        }
        .message {
            width: 312px;
            height: 60px;
            border: none;
            padding: 2px;
            margin-top: 2px;
            border-radius: 5px;
            margin-bottom: 20px;
            background-color: #F6F6F6;
        }
        .button {
            border: none;
            width: 312px;
            height: 50px;
            cursor: pointer;
            font-size: 20px;
            align-self: center;
            text-align: center;
            border-radius: 5px;
            margin: 15px 0 40px 0;
            background-color: #FBB11B;
        }
        @media(max-width: 700px) {
            .form {
                display: flex;
                align-items: center;
                flex-direction: column;
            }
        }
        .paying-section {
            display: flex;
            padding: 5px 15px;
            align-items: center;
            border-radius: 10px;
            flex-direction: column;
            background-color: #F6F6F6;
        }
        .subtitle2 {
            color: #000000;
            max-width: 500px;
        }
        .comparing-prices {
            gap: 50px;
            display: flex;
            align-items: center;
            flex-direction: row;
        }
        .first-price {
            font-size: 20px;
            text-decoration: line-through;
        }
        .second-price {
            font-size: 32px;
            text-decoration: underline;
        }
        `;

        divEl.appendChild(style);
        this.shadow.appendChild(divEl);
    }
}
customElements.define("home-page", Home);