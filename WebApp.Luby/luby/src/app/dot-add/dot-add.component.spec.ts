import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotAddComponent } from './dot-add.component';

describe('DotAddComponent', () => {
  let component: DotAddComponent;
  let fixture: ComponentFixture<DotAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DotAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
