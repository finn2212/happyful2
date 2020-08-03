import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewGoalSubmitPage } from './new-goal-submit.page';

describe('NewGoalSubmitPage', () => {
  let component: NewGoalSubmitPage;
  let fixture: ComponentFixture<NewGoalSubmitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGoalSubmitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewGoalSubmitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
