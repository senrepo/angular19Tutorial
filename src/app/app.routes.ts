import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { SingalComponent } from './singal/singal.component';
import { LinkedSignalComponent } from './linked-signal/linked-signal.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { GetApiComponent } from './get-api/get-api.component';

export const routes: Routes = [
    { path: 'admin', component: AdminComponent },  
    { path: 'user', component: UserComponent },
    { path: 'databinding', component: DataBindingComponent },
    { path: 'ngclass', component: NgClassComponent },
    { path: 'ngfor', component: NgForComponent },
    { path: 'ngif', component: NgIfComponent },
    { path: 'ngstyle', component: NgStyleComponent },
    { path: 'ngif', component: NgIfComponent },
    { path: 'signal', component: SingalComponent },
    { path: 'linkedsignal', component: LinkedSignalComponent },
    { path: 'about', component: AboutComponent },
    { path: 'templateform', component: TemplateFormComponent },
    { path: 'reactiveform', component: ReactiveFormComponent },
    { path: 'getapi', component: GetApiComponent },
    { path: '', redirectTo: 'databinding',  pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
