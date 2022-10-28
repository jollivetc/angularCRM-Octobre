import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Subscriber, Subscription, take } from 'rxjs';
import { DemoObservableService } from '../common/demo-observable.service';

@Component({
  selector: 'crm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private subs:Subscription[]=[];

  constructor(private observableService: DemoObservableService) { }

  ngOnInit(): void {
  }

  testObservable():void{
    const subscriber = {
      next: (data:number)=>{console.log(data)},
      error:(error: Error)=>{console.error(error)},
      complete:()=>{console.log('End')}
    }
    console.log('before')
    const subscription = this.observableService.test().pipe(
        map(x=>x*10),
        take(2)
      ).subscribe(subscriber)
    this.subs.push(subscription);
    console.log('after')

  }

  ngOnDestroy(): void {
      this.subs.forEach(sub=>sub.unsubscribe());
  }
}
