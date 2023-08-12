import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InforAboutComponent } from './infor-about.component';

describe('InforAboutComponent', () => {
  let component: InforAboutComponent;
  let fixture: ComponentFixture<InforAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InforAboutComponent]
    });
    fixture = TestBed.createComponent(InforAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
