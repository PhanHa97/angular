import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructorDirectiveComponent } from './structor-directive.component';

describe('StructorDirectiveComponent', () => {
  let component: StructorDirectiveComponent;
  let fixture: ComponentFixture<StructorDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructorDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructorDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
