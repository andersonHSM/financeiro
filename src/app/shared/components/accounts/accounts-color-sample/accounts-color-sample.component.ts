import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-accounts-color-sample',
  templateUrl: './accounts-color-sample.component.html',
  styleUrls: ['./accounts-color-sample.component.scss'],
})
export class AccountsColorSampleComponent implements OnInit, AfterViewInit {
  // TODO - alterar para a interface correta
  @Input() accountColors: { backgroundColor: string; color: string };

  @ViewChild('colorBox', { static: false }) private colorBox: ElementRef<
    HTMLDivElement
  >;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    const { nativeElement: colorBoxDiv } = this.colorBox;

    colorBoxDiv.style.backgroundColor = this.accountColors.backgroundColor;
  }
}
