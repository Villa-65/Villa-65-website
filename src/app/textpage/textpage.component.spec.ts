import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TextpageComponent } from './textpage.component';

describe('TextpageComponent', () => {
  let component: TextpageComponent;
  let fixture: ComponentFixture<TextpageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TextpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
