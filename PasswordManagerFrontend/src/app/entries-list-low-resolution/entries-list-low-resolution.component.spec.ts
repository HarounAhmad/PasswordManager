import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntriesListLowResolutionComponent } from './entries-list-low-resolution.component';

describe('EntriesListLowResolutionComponent', () => {
  let component: EntriesListLowResolutionComponent;
  let fixture: ComponentFixture<EntriesListLowResolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntriesListLowResolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntriesListLowResolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
