import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioAnalisisComponent } from './bio-analisis.component';

describe('BioAnalisisComponent', () => {
  let component: BioAnalisisComponent;
  let fixture: ComponentFixture<BioAnalisisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioAnalisisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BioAnalisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
