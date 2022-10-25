import { Component } from '@angular/core';


@Component({
  selector: 'crm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'AngularCRM';
  maClass:string = 'textRed';
  message:string = 'C\'est cool';
  exist:boolean =false;
  fruits:string[]= ['apple', 'pear','cherry'];

  changeMessage($event:MouseEvent):void{
    console.log($event);
    this.message= 'ca marche';
    this.maClass='textYellow'
    this.exist=!this.exist;
  }
}
