import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NuevotabPage } from './nuevotab.page';

describe('NuevotabPage', () => {
  let component: NuevotabPage;
  let fixture: ComponentFixture<NuevotabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevotabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NuevotabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
