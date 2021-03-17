import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetisationComponent } from './budgetisation.component';

describe('BudgetisationComponent', () => {
  let component: BudgetisationComponent;
  let fixture: ComponentFixture<BudgetisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
