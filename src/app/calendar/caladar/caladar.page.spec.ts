import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaladarPage } from './caladar.page';

describe('CaladarPage', () => {
  let component: CaladarPage;
  let fixture: ComponentFixture<CaladarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaladarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CaladarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
