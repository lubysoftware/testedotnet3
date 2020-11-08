import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotDetailsComponent } from './dot-details.component';

describe('DotDetailsComponent', () => {
  let component: DotDetailsComponent;
  let fixture: ComponentFixture<DotDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DotDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
