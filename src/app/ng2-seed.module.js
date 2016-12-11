import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NG2SeedComponent }  from './ng2-seed.component';
/*
 { AppComponent }  from './app.component';
 */

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ NG2SeedComponent ],
  bootstrap:    [ NG2SeedComponent ]
})
export class NG2SeedModule { }