import { Calculator } from "./Calculator";

class DecCalculator extends Calculator{
    constructor(settings) {
        super(settings);
        console.log( this.getName() );
    }

    /* Abstract method changing number
       *  @param {jQuery element} root Parent element
       */
    changeNumber(root) {
        let activeElement = root.find('.active');

        activeElement.attr('contenteditable', 'true');
        activeElement.trigger("focus")

    }

    initEvents() {
        super.initEvents();
        this.$calculatorDOMElement.find(".operator-bar").find("span").on('click', (event) => {
            super.checkNumber();
            this.updateResult();

        });
    }

    checkNumber() {
        super.checkNumber();

    }

    /* Abstract method add numbers in two array
   *  @param {array} numberX First number
   *  @param {array} numberY Second number
   *  @return {array}
   */
    add(numberX, numberY) {
        let result = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let i = numberX.length - 1; i >= 0; i--) {
            if (Number.isInteger(numberX[i]) && Number.isInteger(numberY[i]) && numberX[i] < 10 && numberY[i] < 10) {
                let carryBit = numberX[i] + numberY[i] + result[i];
                if (carryBit >= 10) {
                    result[i] = carryBit - 10;
                    result[i - 1]++;
                } else {
                    result[i] = carryBit;
                }
            } else {
                alert("Możesz wpisać tylko i wyłącznie cyfry, jedna w pojedynczym okienku");
            }
        }
        return result;
    }

    // Method changing Result

    updateResult() {
        let root = this.$calculatorDOMElement;
        let $resultNumber = root.children(".group-number").children(".result-bit");

        for (let i = this.resultNumberArray.length - 1, j = 0; i >= 0; i--, j++) {
            $resultNumber.eq(i).find(".active").text(this.resultNumberArray[j]);
        }
    }
    
}


export { DecCalculator  };