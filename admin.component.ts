import { Component } from '@angular/core';
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FabModule } from '@syncfusion/ej2-angular-buttons'
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [
    FabModule
  ],
  standalone: true,
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
  template:`<h1>hi</h1>`
})
export class AdminComponent {

}
