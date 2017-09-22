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


    beforeEach(inject([DataService], function(_DataService_, $httpBackend) {
      dataService = _DataService_;
      httpBackend = $httpBackend;
    }));

    beforeEach(function() {
      this.dataService = new DataService(null);
    });

    // 
    it('UNIT TEST FOR FUNCTION: (method) DataService.setCards(cardType: number, data: any, source: number): void', function() {
      // Identifier exists
      expect(this.dataService.setCards).toBeDefined();
      // It is a function
      expect(this.dataService.setCards).toEqual(jasmine.any(Function));
    });

    it('Adding empty arrays should be just fine', function() {
      // Prepare the empty cards holder
      const existentCards = DataService.allCards.getValue();
      // It has at least as much entries as we need
      expect(existentCards.length > DataService.CardType.Table +9);
      // Make sure the container is empty
      existentCards[DataService.CardType.Table] = [];
      // Assign the empty container
      DataService.allCards.next(existentCards);
      // Check all is as expected
      expect(DataService.allCards.getValue()[DataService.CardType.Table].length).toEqual(0);
    });

    it('Adding one array with unique values should be just fine', function() {

      // Prepare the empty cards holder
      const existentCards = DataService.allCards.getValue();
      existentCards[DataService.CardType.Table] = [];
      DataService.allCards.next(existentCards);

      expect(DataService.allCards.getValue()[DataService.CardType.Table].length).toEqual(0);
      // TEST
      const Data = [{'Val1': 1}, {'Val2': 2}];
      component.dataService.setCards(DataService.CardType.Table, Data, 0);
      expect(DataService.allCards.getValue()[DataService.CardType.Table].length).toEqual(Data.length);
    });

    it('Adding two arrays with some common elements should result in a union', function() {

      // Prepare the empty cards holder
      const existentCards = DataService.allCards.getValue();
      existentCards[DataService.CardType.Table] = [];
      DataService.allCards.next(existentCards);

      expect(DataService.allCards.getValue()[DataService.CardType.Table].length).toEqual(0);
      // TEST
      const DataA = [{'Val1': 1}, {'Val2': 2}];
      const DataB = [{'Val1': 3}, {'Val2': 2}];
      component.dataService.setCards(DataService.CardType.Table, DataA, 0);
      expect(DataService.allCards.getValue()[DataService.CardType.Table].length).toEqual(DataA.length);

      component.dataService.setCards(DataService.CardType.Table, DataB, 0);
      expect(DataService.allCards.getValue()[DataService.CardType.Table].length).toEqual(DataA.length + DataB.length - 1);
    });
  });
});
