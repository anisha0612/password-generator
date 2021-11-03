import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length: number = 0;
  password: string = "";
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;

  // Get password length from user input

  getLength(event: any){
    const parsedValue = parseInt(event.target.value);

    if(!isNaN(parsedValue)){
      this.length= parsedValue;
      
    }
  }

  // Change events for all checkboxes (Letters, Numbers, Symbols)
  onChangeNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeLetters(){
    this.includeLetters=!this.includeLetters;
  }

  onChangeSymbols(){
    this.includeSymbols=!this.includeSymbols;
  }

  onButtonClick(){
    // console.log(` Length: ${this.length}, include letters: ${this.includeLetters}, include numbers: ${this.includeNumbers}, include symbols: ${this.includeSymbols}`)

    const letters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols= "!@#$%^&*()";

    let validChars = "";
    
    if(this.includeLetters){
      validChars+= letters;
    }

    if(this.includeNumbers){
      validChars+= numbers;
    }

    if(this.includeSymbols){
      validChars+= symbols;
    }


    let generatedPassword= "";
    for(let i=0; i < this.length; i++){
      const index : number = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }
}
