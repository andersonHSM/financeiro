import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsColorSampleComponent } from './accounts-color-sample.component';

describe('AccountsColorSampleComponent', () => {
  let component: AccountsColorSampleComponent;
  let fixture: ComponentFixture<AccountsColorSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsColorSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsColorSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
