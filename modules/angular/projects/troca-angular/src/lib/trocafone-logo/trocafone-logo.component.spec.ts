import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrocafoneLogoComponent } from './trocafone-logo.component';

describe('TrocafoneLogoComponent', () => {
  let component: TrocafoneLogoComponent;
  let fixture: ComponentFixture<TrocafoneLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrocafoneLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrocafoneLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
