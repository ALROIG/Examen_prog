import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    redirectTo: 'admin',
    pathMatch: 'full'
  },
  {
    path: 'login',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'mis-juegos',
    redirectTo: 'mis-juegos',
    pathMatch: 'full',
  },
  {
    path: 'juegos',
    redirectTo: 'juegos',
    pathMatch: 'full'
  },
  {
    path: 'usuarios',
    redirectTo: 'usuarios',
    pathMatch: 'full'
  },
  {
    path: 'agregar-usuario',
    redirectTo: 'agregar-usuario',
    pathMatch: 'full'
  },

  {
    path: 'e404',
    loadChildren: () => import('./pages/e404/e404.module').then(m => m.E404PageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'juegos',
    loadChildren: () => import('./pages/juegos/juegos.module').then(m => m.JuegosPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'mis-juegos',
    loadChildren: () => import('./pages/mis-juegos/mis-juegos.module').then(m => m.MisJuegosPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminPageModule)
  },
  {
    path: 'agregar-usuario',
    loadChildren: () => import('./pages/agregar-usuario/agregar-usuario.module').then(m => m.AgregarUsuarioPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./pages/usuarios/usuarios.module').then(m => m.UsuariosPageModule),

  },
  {
    path: 'editar-usuario/:id',
    loadChildren: () => import('./pages/editar-usuario/editar-usuario.module').then(m => m.EditarUsuarioPageModule),

  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then(m => m.PerfilPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'editar-perfil/:id',
    loadChildren: () => import('./pages/editar-perfil/editar-perfil.module').then(m => m.EditarPerfilPageModule),
    canActivate: [AuthGuard]
  },

  {
    path: '**',
    redirectTo: 'e404',
    pathMatch: 'full'
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
