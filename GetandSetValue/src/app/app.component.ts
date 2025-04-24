import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { every } from 'rxjs';
import { StyleOptionComponent } from '../style-option/style-option.component';
import { IfElseComponent } from "../if-else/if-else.component";
import { ElseIfComponent } from "../else-if/else-if.component";
import { SwitchCaseComponent } from "../switch-case/switch-case.component";
import { ForLoopComponent } from "../for-loop/for-loop.component";
import { SignalsComponent } from "../signals/signals.component";

@Component({
  selector: 'app-root',
  imports: [StyleOptionComponent, IfElseComponent, ElseIfComponent, SwitchCaseComponent, ForLoopComponent, SignalsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name=""
  displayName=""

  getName(event:Event){
    const name=(event.target as HTMLInputElement).value

    this.name=name;
    console.log(name);
    
  }

  setName(){
     this.name="Raj";
  }

  showName(){
    this.displayName=this.name;
  }

  email=""
  displayEmail=""

  getEmail(event:Event){
    const email=(event.target as HTMLInputElement).value

    this.email=email;

  }
  
  showEmail(){
    this.displayEmail=this.email;
  }
  setEmail(){
    this.email="default@gmail.com"
  }

}
