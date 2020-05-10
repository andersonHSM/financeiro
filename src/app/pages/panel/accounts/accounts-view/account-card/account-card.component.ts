import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ViewChild,
  AfterViewInit,
  AfterViewChecked,
  ElementRef,
} from '@angular/core';

import { AccountModel } from 'src/app/shared/models/account.model';

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountCardComponent implements OnInit, AfterViewInit {
  @ViewChild('cardTitleBox', { static: false })
  private cardTitleBox: ElementRef<HTMLDivElement>;

  @Input()
  account: AccountModel;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.applyCardColor();
  }

  applyCardColor() {
    const { nativeElement: cardTitleBoxDiv} = this.cardTitleBox;

    cardTitleBoxDiv.style.backgroundColor = this.account.backgroundColor;
    cardTitleBoxDiv.style.color = this.account.color;


  }
}
