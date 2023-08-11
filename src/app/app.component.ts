import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = " ";
  passwordLength = 0;
  useLetters = false;
  useNumbers = false;
  useSymbols = false;

  onButtonClick() {
    const numbers = "1234567890";
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbols = "!§$%&/()=?";

    let validChars = "";
    if (this.useLetters) {
      validChars += letters
    }
    if (this.useNumbers) {
      validChars += numbers;
    }
    if (this.useSymbols) {
      validChars += symbols;
    }

    let generatedPasssword = "";
    for (let i = 0; i < this.passwordLength; i++){
      const index = Math.floor(Math.random() * validChars.length);
      generatedPasssword += validChars[index];
    }
    this.password = generatedPasssword;
  }

  onChangePasswordLength(value:any) {
    const parsedValue = parseInt(value.target.value);

    if (!isNaN(parsedValue)) {
      this.passwordLength = parsedValue;
    }
    console.log(parsedValue);
  }

  onChangeUseLetters() {
    this.useLetters = !this.useLetters;
  }

  onChangeUseNumbers() {
    this.useNumbers = !this.useNumbers;
  }
  onChangeUseSymbols() {
    this.useSymbols = !this.useSymbols;
  }
}
