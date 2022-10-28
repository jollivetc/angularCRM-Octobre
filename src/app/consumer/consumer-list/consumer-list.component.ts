import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsumerService } from '../consumer.service';
import { Consumer } from '../model/consumer';

@Component({
  selector: 'crm-consumer-list',
  templateUrl: './consumer-list.component.html',
  styleUrls: ['./consumer-list.component.scss']
})
export class ConsumerListComponent implements OnInit {

  search?:string;
  consumers?: Observable<Consumer[]>

  constructor(private consumerService: ConsumerService) { }

  ngOnInit(): void {
    this.consumers= this.consumerService.getList()
  }

  doSearch():void{
    this.consumers = this.consumerService.getFilteredList(this.search!)
  }

  delete(id:number):void{

    this.consumerService.delete(id).subscribe({
      next:(data)=>{this.consumers = this.consumerService.getList()},
      error:(error)=>{console.error(error)},
      complete:()=>{}
    })
  }

}
