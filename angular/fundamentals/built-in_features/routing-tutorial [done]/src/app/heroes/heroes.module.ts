import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import {FormsModule} from "@angular/forms";
import {HeroListComponent} from "./hero-list/hero-list.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";


@NgModule({
  declarations: [
    HeroListComponent,
    HeroDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule
  ],
})
export class HeroesModule { }
