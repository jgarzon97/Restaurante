import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InforPageComponent } from './infor-page.component';

describe('InforPageComponent', () => {
  let component: InforPageComponent;
  let fixture: ComponentFixture<InforPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InforPageComponent]
    });
    fixture = TestBed.createComponent(InforPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
