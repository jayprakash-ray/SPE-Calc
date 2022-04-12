import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-calculator-app';
  subDisplayText = '';
  mainDisplayText = '';
  operand1: number; 
  operand2: number; 
  operator = ''; 
  calculationString = '';
  // This string  denotes the operation being performed
  answered = false;
  //  flag to check whether the solution has been processed
  operatorSet = false; 
   
  fact(n: number): number{
    if(n==1||n==0)
      return 1;
    else
      return n*this.fact(n-1);
  }
  pressKey(key: string) {
  
    if (key === '√' || key === 'ln' || key === '^' || key === '!') {
      console.log(this.mainDisplayText);
      const lastKey = this.mainDisplayText[this.mainDisplayText.length - 1];
      if (lastKey === '^' || lastKey === '!') {
        this.operatorSet = true;
      }
      if (lastKey === '√' || lastKey === 'ln') {
        const lastKey = this.mainDisplayText[this.mainDisplayText.length - 1];
        if (lastKey === '√' || lastKey === 'ln') {
          this.operatorSet = true;
        }
      }
     /* if ( (this.mainDisplayText === '')) {
        return;
      }*/
      this.operand1 = parseFloat(this.mainDisplayText);
      this.operator = key;
      this.operatorSet = true;
    }
    if (this.mainDisplayText.length === 10) {
      return;
    }
    this.mainDisplayText += key;
  }
  allClear() {
    this.mainDisplayText = '';
    this.subDisplayText = '';
    this.operatorSet = false;
  }
  getAnswer() {
    this.calculationString = this.mainDisplayText;
      {this.operand2 = parseFloat(this.mainDisplayText.split(this.operator)[1]);}
    if (this.operator === '^') {
      //this.subDisplayText = this.mainDisplayText;
      this.mainDisplayText = Math.pow(this.operand1, this.operand2).toString();
      //this.subDisplayText = this.calculationString;
      if (this.mainDisplayText.length > 9) {
        this.mainDisplayText = this.mainDisplayText.substr(0, 9);
      }
    } else if (this.operator === '!') {
     //this.subDisplayText = this.mainDisplayText;
      this.mainDisplayText = this.fact(this.operand1).toString();
      //this.subDisplayText = this.calculationString;
      if (this.mainDisplayText.length > 30) {
        this.mainDisplayText = 'Infinity';
        //this.subDisplayText = 'Range Exceeded';
      }
    } else if (this.operator === 'ln') {
     // this.subDisplayText = this.mainDisplayText;
      this.mainDisplayText = Math.log(this.operand2).toString();
     // this.subDisplayText = this.calculationString;
    } else if (this.operator === '√') {
     // this.subDisplayText = this.mainDisplayText;
      this.mainDisplayText = Math.sqrt(this.operand2).toString();
     // this.subDisplayText = this.calculationString;
      if (this.mainDisplayText.length > 20) {
        this.mainDisplayText = 'Infinity';
       // this.subDisplayText = 'Range Exceeded';
      }
    } else {
      this.subDisplayText = 'ERROR: Invalid Operation';
    }
    this.answered = true;
  }
}
