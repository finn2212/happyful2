import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalendarDetailPage } from './calendar-detail.page';

describe('CalendarDetailPage', () => {
  let component: CalendarDetailPage;
  let fixture: ComponentFixture<CalendarDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalendarDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
