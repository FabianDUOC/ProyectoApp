import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  /*{
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },*/
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./pages/cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'mis-autos',
    loadChildren: () => import('./pages/mis-autos/mis-autos.module').then( m => m.MisAutosPageModule)
  },
  {
    path: 'menu-conductor',
    loadChildren: () => import('./pages/menu-conductor/menu-conductor.module').then( m => m.MenuConductorPageModule)
  },
  {
    path: 'menu-pasajero',
    loadChildren: () => import('./pages/menu-pasajero/menu-pasajero.module').then( m => m.MenuPasajeroPageModule)
  },
  {
    path: 'recuperar-clave',
    loadChildren: () => import('./pages/recuperar-clave/recuperar-clave.module').then( m => m.RecuperarClavePageModule)
  },
  {
    path: 'editar-cuenta',
    loadChildren: () => import('./pages/editar-cuenta/editar-cuenta.module').then( m => m.EditarCuentaPageModule)
  },
  {
    path: 'cambiar-clave',
    loadChildren: () => import('./pages/cambiar-clave/cambiar-clave.module').then( m => m.CambiarClavePageModule)
  },
  {
    path: 'nuevo-viaje',
    loadChildren: () => import('./pages/nuevo-viaje/nuevo-viaje.module').then( m => m.NuevoViajePageModule)
  },
  {
    path: 'ver-viaje',
    loadChildren: () => import('./pages/ver-viaje/ver-viaje.module').then( m => m.VerViajePageModule)
  },
  {
    path: 'viaje-conductor',
    loadChildren: () => import('./pages/viaje-conductor/viaje-conductor.module').then( m => m.ViajeConductorPageModule)
  },
  {
    path: 'viaje-pasajero',
    loadChildren: () => import('./pages/viaje-pasajero/viaje-pasajero.module').then( m => m.ViajePasajeroPageModule)
  },
  {
    path: 'editar-auto',
    loadChildren: () => import('./pages/editar-auto/editar-auto.module').then( m => m.EditarAutoPageModule)
  },
  {
    path: 'buscar-viaje',
    loadChildren: () => import('./pages/buscar-viaje/buscar-viaje.module').then( m => m.BuscarViajePageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
