import { Calculator } from "./Calculator";

class DecCalculator extends Calculator{
    constructor(settings) {
        super(settings);
        console.log( this.getName() );
    }

    changeNumber(root) {
        let activeElement = root.find('.active');

        activeElement.attr('contenteditable', 'true');
        activeElement.trigger("focus")

    }

    initEvents() {
        super.initEvents();

        let btn = this.$calculatorDOMElement.find('.operator-bar span');
        btn.on('click', (event) => {
            console.log(this +', '+ event)
            this.checkNumber();
            this.updateResult();
        })


    }

    checkNumber() {
        super.checkNumber();

    }

    add(numberX, numberY) {
        let result = [0,0,0,0,0,0,0,0,0];
        for(let i = numberX.length - 1; i >= 0  ; i--) {
            let carryBit =  numberX[i] + numberY[i] + result[i];
            if( carryBit  === 10) {
                result[i] = 0;
                result[i-1] = 1;
            } else if (carryBit === 11 ){
                result[i] = 1;
                result[i-1] = 1;
            }else if (carryBit === 12 ){
                result[i] = 2;
                result[i-1] = 1;
            }else if (carryBit === 13 ){
                result[i] = 3;
                result[i-1] = 1;
            }else if (carryBit === 14 ){
                result[i] = 4;
                result[i-1] = 1;
            }else if (carryBit === 15 ){
                result[i] = 5;
                result[i-1] = 1;
            }else if (carryBit === 16 ){
                result[i] = 6;
                result[i-1] = 1;
            }else if (carryBit === 17 ){
                result[i] = 7;
                result[i-1] = 1;
            }else if (carryBit === 18 ){
                result[i] = 8;
                result[i-1] = 1;
            }else if (carryBit === 19 ){
                result[i] = 9;
                result[i-1] = 1;
            } else {
                result[i] = carryBit;
            }
        }
        return result;
    }

    updateResult(){

    }

   //  /* Method changing Result
   // */
   //  updateResult() {
   //      let root =  this.$calculatorDOMElement;
   //      let $resultNumber = root.children(".group-number").children(".result-bit");
   //      for(let i =  this.resultNumberArray.length - 1, j = 0; i >= 0 ; i--, j++) {
   //          let valueResult = parseInt( $resultNumber.eq(j).find(".active").text() );
   //          if( this.resultNumberArray[i] != valueResult ) {
   //              let activeElement = $resultNumber.eq(j).find(".active").removeClass("active");
   //              activeElement.siblings().addClass("active");
   //              $resultNumber.eq(j).children(":first-child").slideToggle();
   //          }
   //      }
    }
    
}


export { DecCalculator  };