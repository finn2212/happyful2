import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoalTodosPage } from './goal-todos.page';

describe('GoalTodosPage', () => {
  let component: GoalTodosPage;
  let fixture: ComponentFixture<GoalTodosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalTodosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GoalTodosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
