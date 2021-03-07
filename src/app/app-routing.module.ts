import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
 anchorScrolling: 'enabled',
  //scrollOffset: [10, 4],
};
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
