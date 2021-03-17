import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviMembreComponent } from './suivi-membre.component';

describe('SuiviMembreComponent', () => {
  let component: SuiviMembreComponent;
  let fixture: ComponentFixture<SuiviMembreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiviMembreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviMembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
