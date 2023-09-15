import * as components from "./components/index";
import {objectWithImages} from "./data.js";
import MyImages, { Attribute } from "./components/Images/Images";

class AppContainer extends HTMLElement {
    images: HTMLDivElement[] = [];
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        objectWithImages.images.forEach((array) => {
            const arrayImages = this.ownerDocument.createElement(
                "div");
                arrayImages.classList.add("arrayImages");
                array.forEach((line)=> {
                    const lineImages = this.ownerDocument.createElement("div");
                    lineImages.classList.add("lineImages");
                    line.forEach((number) => {
                        const color = this.ownerDocument.createElement("my-images");
                        if (number === 0){
                            color.setAttribute(Attribute.color, "white")
                        }else {
                            color.setAttribute(Attribute.color, "black")
                        };
                        lineImages.appendChild(color);

                    })
                    arrayImages.appendChild(lineImages)
                })
                this.images.push(arrayImages)

               
            });
        }
        
        connectedCallback() {
            this.render();
        }
        
        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = ` <link rel="stylesheet" href="./index.css">`;
                
                this.images.forEach((image) => {
                    this.shadowRoot?.appendChild(image);
                });
            }
        }
    }
    
customElements.define("app-container", AppContainer);