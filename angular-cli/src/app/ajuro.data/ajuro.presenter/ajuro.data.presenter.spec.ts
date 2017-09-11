import { AjuroInterceptor } from './../../my.interceptor';
import { HTTP_INTERCEPTORS, HttpBackend, HttpClientModule } from '@angular/common/http';
import {DataService} from './../ajuro.data.service';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { DataModule } from './../ajuro.data.module';
import { DataPresenterComponent } from './../ajuro.presenter/ajuro.data.presenter.component';
// Containing describe block (or "suite"), usually named for an app feature.
describe('DataAccessTests', function() {
  describe('MyGridApplicationComponent', () => {
    let dataService: DataService;
    let httpBackend: HttpBackend;
    let component: DataPresenterComponent;
    let fixture: ComponentFixture<DataPresenterComponent>;

    // Include Modules
    beforeEach(async(() => {
      TestBed.configureTestingModule({
          imports: [
            HttpClientModule
          ],
          declarations: [
            DataPresenterComponent
          ],
          providers: [{
            provide: HTTP_INTERCEPTORS,
            useClass: AjuroInterceptor,
            multi: true
          }, DataService
          ],
      })
      .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DataPresenterComponent);
        component = fixture.componentInstance;
    });

    beforeEach(function() {

    });

    beforeEach(inject([DataService], function(_DataService_, $httpBackend) {
      dataService = _DataService_;
      httpBackend = $httpBackend;
    }));

    it('UNIT TEST FOR FUNCTION: (method) DataService.setCards(cardType: number, data: any, source: number): void', function() {
      expect(component.dataService.setCards).toBeDefined();
      expect(component.dataService.setCards).toEqual(jasmine.any(Function));
    });

    it('Adding empty arrays should be just fine', function() {

      // Prepare the empty cards holder
      const existentCards = DataService.allCards.getValue();
      existentCards[DataService.CardType.Table] = [];
      DataService.allCards.next(existentCards);

      expect(DataService.allCards.getValue()[DataService.CardType.Table].length === 0);
      // TEST
      component.dataService.setCards(DataService.CardType.Table, [], 0);
      expect(DataService.allCards.getValue()[DataService.CardType.Table].length === 0);
    });

    it('Adding one array with unique values should be just fine', function() {

      // Prepare the empty cards holder
      const existentCards = DataService.allCards.getValue();
      existentCards[DataService.CardType.Table] = [];
      DataService.allCards.next(existentCards);

      expect(DataService.allCards.getValue()[DataService.CardType.Table].length === 0);
      // TEST
      component.dataService.setCards(DataService.CardType.Table, [{'Val1': 1}, {'Val2': 2}], 0);
      expect(DataService.allCards.getValue()[DataService.CardType.Table].length === 2);
    });

    it('Adding two arrays with some common elements should result in a union', function() {

      // Prepare the empty cards holder
      const existentCards = DataService.allCards.getValue();
      existentCards[DataService.CardType.Table] = [];
      DataService.allCards.next(existentCards);

      expect(DataService.allCards.getValue()[DataService.CardType.Table].length === 0);
      // TEST
      component.dataService.setCards(DataService.CardType.Table, [{'Val1': 1}, {'Val2': 2}], 0);
      expect(DataService.allCards.getValue()[DataService.CardType.Table].length === 2);

      component.dataService.setCards(DataService.CardType.Table, [{'Val1': 3}, {'Val2': 2}], 0);
      expect(DataService.allCards.getValue()[DataService.CardType.Table].length === 4);
    });
  });
});
