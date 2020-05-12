import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

interface ColorObject {
  backgroundColor: string;
  color: string;
}

@Component({
  selector: 'app-accounts-color-sample',
  templateUrl: './accounts-color-sample.component.html',
  styleUrls: ['./accounts-color-sample.component.scss'],
})
export class AccountsColorSampleComponent implements OnInit, AfterViewInit {
  public defaultColors: ColorObject[] = [
    // { backgroundColor: '#ffffff', color: 'black' },
    { backgroundColor: '#000105', color: 'white' },
    { backgroundColor: '#3e6158', color: 'white' },
    { backgroundColor: '#3f7a89', color: 'white' },
    { backgroundColor: '#96c582', color: 'black' },
    { backgroundColor: '#b7d5c4', color: 'black' },
    { backgroundColor: '#bcd6e7', color: 'black' },
    { backgroundColor: '#4b4fce', color: 'white' },
    { backgroundColor: '#4e0a77', color: 'white' },
    { backgroundColor: '#f46600', color: 'white' },
    { backgroundColor: '#cf0500', color: 'white' },
    { backgroundColor: '#8e0622', color: 'white' },
    { backgroundColor: '#62382f', color: 'white' },
  ];

  selectedColor: ColorObject;

  @ViewChild('colorBox', { static: false }) private colorBox: ElementRef<
    HTMLDivElement
  >;
  constructor() {}

  ngOnInit(): void {
    this.selectedColor = this.defaultColors[0];
  }

  ngAfterViewInit() {}

  selectColor(color: ColorObject): void {
    this.selectedColor = color;
  }
}
