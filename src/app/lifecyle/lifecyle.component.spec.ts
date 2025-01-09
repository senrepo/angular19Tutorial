import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecyleComponent } from './lifecyle.component';

describe('LifecyleComponent', () => {
  let component: LifecyleComponent;
  let fixture: ComponentFixture<LifecyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecyleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
