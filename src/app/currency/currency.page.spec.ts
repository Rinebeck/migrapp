import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CurrencyPage } from './currency.page';

describe('Tab3Page', () => {
  let component: CurrencyPage;
  let fixture: ComponentFixture<CurrencyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencyPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CurrencyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
