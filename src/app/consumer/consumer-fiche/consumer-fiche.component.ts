import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConsumerService } from '../consumer.service';
import { Consumer } from '../model/consumer';

@Component({
  selector: 'crm-consumer-fiche',
  templateUrl: './consumer-fiche.component.html',
  styleUrls: ['./consumer-fiche.component.scss']
})
export class ConsumerFicheComponent implements OnInit, OnDestroy {

  private subs:Subscription[]=[];
  consumerForm:FormGroup;

  constructor(private consumerService:ConsumerService, private router:Router) {
    this.consumerForm = new FormGroup({
      civility : new FormControl(''),
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone:new FormControl('', [Validators.required])
    })

  }

  ngOnInit(): void {
  }

  save():void{
    this.subs.push(this.consumerService.save(this.consumerForm.value).subscribe({
      next:(data:Consumer)=>{},
      error:(error:Error)=>{console.error(error)},
      complete:()=>{this.router.navigateByUrl('/consumers')}
    }));
  }
  ngOnDestroy(): void {
      this.subs.forEach(sub=>sub.unsubscribe());
  }
}
