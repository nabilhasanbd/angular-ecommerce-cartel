import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinterProductComponent } from './winter-product.component';

describe('WinterProductComponent', () => {
  let component: WinterProductComponent;
  let fixture: ComponentFixture<WinterProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinterProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinterProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
