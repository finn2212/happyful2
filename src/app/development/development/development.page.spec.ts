import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DevelopmentPage } from './development.page';

describe('DevelopmentPage', () => {
  let component: DevelopmentPage;
  let fixture: ComponentFixture<DevelopmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DevelopmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
