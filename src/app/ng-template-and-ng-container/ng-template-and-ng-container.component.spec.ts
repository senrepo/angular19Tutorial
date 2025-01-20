import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplateAndNgContainerComponent } from './ng-template-and-ng-container.component';

describe('NgTemplateAndNgContainerComponent', () => {
  let component: NgTemplateAndNgContainerComponent;
  let fixture: ComponentFixture<NgTemplateAndNgContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgTemplateAndNgContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgTemplateAndNgContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
