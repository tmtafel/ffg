import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DraftRoutingModule } from './draft-routing.module';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    DraftRoutingModule
  ]
})
export class DraftModule { }