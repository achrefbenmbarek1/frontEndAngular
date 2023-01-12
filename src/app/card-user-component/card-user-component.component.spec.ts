import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUserComponentComponent } from './card-user-component.component';

describe('CardUserComponentComponent', () => {
  let component: CardUserComponentComponent;
  let fixture: ComponentFixture<CardUserComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardUserComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardUserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
