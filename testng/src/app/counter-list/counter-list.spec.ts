import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterList } from './counter-list';

describe('CounterList', () => {
  let component: CounterList;
  let fixture: ComponentFixture<CounterList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
