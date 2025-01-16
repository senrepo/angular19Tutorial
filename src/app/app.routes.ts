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
import { PostApiComponent } from './post-api/post-api.component';
import { PutApiComponent } from './put-api/put-api.component';
import { DeleteApiComponent } from './delete-api/delete-api.component';
import { ResourceApiComponent } from './resource-api/resource-api.component';
import { LifecyleComponent } from './lifecyle/lifecyle.component';
import { PipeComponent } from './pipe/pipe.component';
import { AutoComponent } from './resuable/auto/auto.component';
import { GroceryComponent } from './resuable/grocery/grocery.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' }, //default route
    { path: 'login', component: LoginComponent }, //login route
    { path: 'layout', component: LayoutComponent,
        canActivate: [authGuard],//layout route
        children: [
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
            { path: 'postapi', component: PostApiComponent },
            { path: 'putapi', component: PutApiComponent },
            { path: 'deleteapi', component: DeleteApiComponent },
            { path: 'resourceapi', component: ResourceApiComponent },
            { path: 'lifecyle', component: LifecyleComponent },
            { path: 'pipe', component: PipeComponent },
            { path: 'auto', component: AutoComponent },
            { path: 'grocery', component: GroceryComponent },
        ]
    },

    { path: '**', component: PageNotFoundComponent }
];
