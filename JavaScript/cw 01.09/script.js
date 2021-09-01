class Printer {
    constructor(color="green", size="14px", Family="Arial") {
    this.color = color;
    this.size = size;
    this.Family = Family;
    }

    print(text) {
        document.write(`<span style = "font-size: ${this.size}; color: ${this.color};font-family: ${this.Family};">${text}<span>`);
    }
}

const DefaultPrint = new Printer();

const CalibriPrint = new Printer("green","24px", "Arial");

console.log(DefaultPrint)

console.log(CalibriPrint)

CalibriPrint.print("Привет!!");