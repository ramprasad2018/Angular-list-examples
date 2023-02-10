import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material.module';
import { MatNativeDateModule } from '@angular/material';
import { AppComponent } from './app.component';
import { BasicListComponent } from './basic-list/basic-list.component';
import { NavListComponent } from './nav-list/nav-list.component';
import { SelectionListComponent } from './selection-list/selection-list.component';
import { ListWithIconsComponent } from './list-with-icons/list-with-icons.component';
import { ListWithAvatarsComponent } from './list-with-avatars/list-with-avatars.component';
import { DenseListsComponent } from './dense-lists/dense-lists.component';
import { ListWithSectionsComponent } from './list-with-sections/list-with-sections.component';
import { MultiLineListComponent } from './multi-line-list/multi-line-list.component';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  entryComponents: [AppComponent],
  declarations: [
    AppComponent,
    BasicListComponent,
    NavListComponent,
    SelectionListComponent,
    MultiLineListComponent,
    ListWithIconsComponent,
    ListWithAvatarsComponent,
    DenseListsComponent,
    ListWithSectionsComponent

  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }