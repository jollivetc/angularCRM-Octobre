import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from '../app-material.module';
import { HelpComponent } from '../component/help/help.component';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[AppMaterialModule, NoopAnimationsModule, ReactiveFormsModule],
      declarations: [ LoginComponent, HelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable the button on creation', ()=>{
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('button')?.disabled).toBeTrue();
  })
});
