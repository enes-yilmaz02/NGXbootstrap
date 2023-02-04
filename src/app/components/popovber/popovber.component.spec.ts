import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopovberComponent } from './popovber.component';

describe('PopovberComponent', () => {
  let component: PopovberComponent;
  let fixture: ComponentFixture<PopovberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopovberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopovberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
