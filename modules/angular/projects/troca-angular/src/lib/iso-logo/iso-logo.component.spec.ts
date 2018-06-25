import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsoLogoComponent } from './iso-logo.component';

describe('TIsoLogoComponent', () => {
  let component: IsoLogoComponent;
  let fixture: ComponentFixture<IsoLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsoLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsoLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
