import { Component } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { ControlFlowStatementsComponent } from './control-flow-statements/control-flow-statements.component';
import { SingalComponent } from './singal/singal.component';
import { LinkedSignalComponent } from './linked-signal/linked-signal.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    AdminComponent, 
    UserComponent, 
    DataBindingComponent, 
    NgIfComponent,
    NgForComponent,
    NgClassComponent,
    NgStyleComponent,
    ControlFlowStatementsComponent,
    SingalComponent,
    LinkedSignalComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular19Tutorial';

  constructor(private router: Router)
  {
      
  }

  
}
