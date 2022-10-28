import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerFicheComponent } from './consumer-fiche.component';

describe('ConsumerFicheComponent', () => {
  let component: ConsumerFicheComponent;
  let fixture: ComponentFixture<ConsumerFicheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerFicheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumerFicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
