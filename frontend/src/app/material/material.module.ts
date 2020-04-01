import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatInputModule
  ],
  exports: [
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatInputModule
  ]
})
export class MaterialModule { }
