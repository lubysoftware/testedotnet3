import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevAddComponent } from './dev-add.component';

describe('DevAddComponent', () => {
  let component: DevAddComponent;
  let fixture: ComponentFixture<DevAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
