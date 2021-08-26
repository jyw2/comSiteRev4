import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexItemComponent } from './complex-item.component';

describe('ComplexItemComponent', () => {
  let component: ComplexItemComponent;
  let fixture: ComponentFixture<ComplexItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplexItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
