import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioModelacionComponent } from './bio-modelacion.component';

describe('BioModelacionComponent', () => {
  let component: BioModelacionComponent;
  let fixture: ComponentFixture<BioModelacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioModelacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BioModelacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
