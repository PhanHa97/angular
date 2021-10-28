import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoewayBindingComponent } from './twoeway-binding.component';

describe('TwoewayBindingComponent', () => {
  let component: TwoewayBindingComponent;
  let fixture: ComponentFixture<TwoewayBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoewayBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoewayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
