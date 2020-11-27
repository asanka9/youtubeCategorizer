import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppssComponent } from './appss.component';

describe('AppssComponent', () => {
  let component: AppssComponent;
  let fixture: ComponentFixture<AppssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
