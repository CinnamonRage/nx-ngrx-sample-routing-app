import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Route} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import * as fromClient from './+state/client.reducer';
import * as fromRouter from '@ngrx/router-store';
import {ClientEffects} from './+state/client.effects';
import {ClientFacade} from './+state/client.facade';
import {CustomSerializer} from "./serializer/custom.serializer";

export const navigationShellRoutes: Route[] = [
  {
    path: 'client/:clientId',
    component: LayoutComponent,
    loadChildren: () =>
      import('@navigation/product').then(
        (m) => m.NavigationFeatureProductModule
      ),
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(navigationShellRoutes),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer,
    }),
    StoreModule.forFeature(
      fromClient.CLIENT_FEATURE_KEY,
      fromClient.clientReducer
    ),
    StoreModule.forFeature(
      'my-router',
      fromRouter.routerReducer
    ),
    EffectsModule.forFeature([ClientEffects]),
  ],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
  providers: [ClientFacade],
})
export class NavigationShellModule {
}
