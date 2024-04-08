import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsconeComponent } from './ascone.component';

describe('AsconeComponent', () => {
  let component: AsconeComponent;
  let fixture: ComponentFixture<AsconeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsconeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsconeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
