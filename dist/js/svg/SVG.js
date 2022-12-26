class SVG {
    constructor(className, id, fill) {
        this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.path = document.createElementNS('http://www.w3.org/2000/svg', "path");
        this.svg.setAttribute("viewBox", "0 0 512 512");
        this.path.setAttribute("fill", fill);
        this.svg.setAttribute("class", className);
        this.svg.id = id;
        this.path.setAttribute("fill", fill);
        this.svg.appendChild(this.path);
    }
}
export default SVG;
