//cannot use arrow function inside classes.
//only use constructor if you want to add new properties to the class. 
//ie. like utilities class that doesnt have other properties.

class shapes {
    constructor() {
        this.color = '';

    }


    pickColor(userColor) {

        this.color = userColor
    }
}

class circle extends shapes {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }

}
class triangle extends shapes {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

class square extends shapes {
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`

    }

}

module.exports={circle, triangle, square}