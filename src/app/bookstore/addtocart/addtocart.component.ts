import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public receivedData: any) {}
  ngOnInit(): void {}
}

