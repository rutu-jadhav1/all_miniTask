import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialComponent4 } from './material-component4';

describe('MaterialComponent4', () => {
  let component: MaterialComponent4;
  let fixture: ComponentFixture<MaterialComponent4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialComponent4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialComponent4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
