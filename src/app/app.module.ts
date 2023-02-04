import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AlertComponent } from './components/alert/alert.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CollapseComponent } from './components/collapse/collapse.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { ModalsComponent } from './components/modals/modals.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { PopovberComponent } from './components/popovber/popovber.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    AlertComponent,
    ButtonsComponent,
    CarouselComponent,
    CollapseComponent,
    DatepickerComponent,
    DropdownComponent,
    ModalsComponent,
    PaginationComponent,
    PopovberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
    AlertModule,
    ButtonsModule,
    FormsModule,
    CarouselModule,
    CollapseModule,
    BsDatepickerModule,
    BsDropdownModule,
    ModalModule,
    PaginationModule,
    PopoverModule
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
