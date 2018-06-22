import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeinLogoComponent } from './tradein-logo.component';

describe('TradeinLogoComponent', () => {
  let component: TradeinLogoComponent;
  let fixture: ComponentFixture<TradeinLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeinLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeinLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
