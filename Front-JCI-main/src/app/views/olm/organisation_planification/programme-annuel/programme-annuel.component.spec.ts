import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeAnnuelComponent } from './programme-annuel.component';

describe('ProgrammeAnnuelComponent', () => {
  let component: ProgrammeAnnuelComponent;
  let fixture: ComponentFixture<ProgrammeAnnuelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammeAnnuelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammeAnnuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
