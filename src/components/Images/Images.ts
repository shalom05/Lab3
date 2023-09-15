export enum Attribute {
    "color" = "color",
}

class MyImages extends HTMLElement {
    color?: string;

    
    static get observedAttributes() {
        const attrs: Record<Attribute, null> = {
            color: null,
           
        };
        return Object.keys(attrs);
    }
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    
    connectedCallback() {
        this.render();
    }
    
    attributeChangedCallback(
        propName: Attribute,
        _: string | undefined,
        newValue: string | undefined
        ) {
            switch (propName) {
                default:
                this[propName] = newValue;
                break;
            }
            
            this.render();
        }
        
        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="./Images.css">
                <div class"${this.color}"></div>`
            }
        }
    }
    
customElements.define("my-images", MyImages);
export default MyImages;