import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialComponent2 } from './material-component2';

describe('MaterialComponent2', () => {
  let component: MaterialComponent2;
  let fixture: ComponentFixture<MaterialComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialComponent2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
