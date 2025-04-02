import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeployeeComponent } from './editeployee.component';

describe('EditeployeeComponent', () => {
  let component: EditeployeeComponent;
  let fixture: ComponentFixture<EditeployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditeployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
