import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTeriffComponent } from './update-teriff.component';

describe('UserProfileComponent', () => {
  let component: UpdateTeriffComponent;
  let fixture: ComponentFixture<UpdateTeriffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTeriffComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTeriffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
