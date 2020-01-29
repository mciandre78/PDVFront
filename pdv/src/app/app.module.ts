import { HttpClient, HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DataBindingComponent } from "./data-binding/data-binding.component";
import { SegundoComponenteComponent } from "./segundo-componente/segundo-componente.component";
import { NgIfNgForComponent } from "./ng-if-ng-for/ng-if-ng-for.component";
import { CrudComponent } from "./Componentes/crud/crud.component";

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    SegundoComponenteComponent,
    NgIfNgForComponent,
    CrudComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {}
