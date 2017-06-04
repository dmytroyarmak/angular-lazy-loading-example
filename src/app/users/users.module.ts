import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular/main';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users/users.component';
import { DateComponent } from './components/date/date.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderGroupComponent } from './components/header-group/header-group.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AgGridModule.withComponents([
      DateComponent,
      HeaderComponent,
      HeaderGroupComponent
    ]),
    UsersRoutingModule
  ],
  declarations: [
    UsersComponent,
    DateComponent,
    HeaderComponent,
    HeaderGroupComponent
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
