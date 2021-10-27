import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap1ConentComponent } from './baitap1-conent.component';

describe('Baitap1ConentComponent', () => {
  let component: Baitap1ConentComponent;
  let fixture: ComponentFixture<Baitap1ConentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Baitap1ConentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap1ConentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
