import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow-statements',
  imports: [FormsModule],
  templateUrl: './control-flow-statements.component.html',
  styleUrl: './control-flow-statements.component.css'
})
export class ControlFlowStatementsComponent {
  divShowHideIndicator : boolean = false;
  diplayDivInd: boolean = false;

  employees: any = [
    { empId: 1, name: 'ravi', grade: 3},
    { empId: 2, name: 'ramesh', grade: 4},
    { empId: 3, name: 'kavin', grade: 5}
  ];



  showHide(val : boolean) {
    this.divShowHideIndicator = val;
  }

}
