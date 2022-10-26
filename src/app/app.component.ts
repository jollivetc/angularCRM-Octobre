import { Component } from '@angular/core';


@Component({
  selector: 'crm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'angularCRM';
  param: string = 'cool';
  
  onFinished($event:string):void{
    console.log($event);
  }

  onPasCool($event:string):void{
    console.error($event);
  }
}
