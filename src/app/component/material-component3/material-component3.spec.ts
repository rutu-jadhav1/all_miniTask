import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialComponent3 } from './material-component3';

describe('MaterialComponent3', () => {
  let component: MaterialComponent3;
  let fixture: ComponentFixture<MaterialComponent3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialComponent3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialComponent3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
