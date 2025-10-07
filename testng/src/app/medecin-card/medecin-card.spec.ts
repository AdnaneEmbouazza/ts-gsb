import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinCard } from './medecin-card';

describe('MedecinCard', () => {
  let component: MedecinCard;
  let fixture: ComponentFixture<MedecinCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedecinCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedecinCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
