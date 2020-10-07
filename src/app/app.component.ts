import { Component } from '@angular/core';
import { SimulatorService } from './simulator.service'
import { Simulator } from './ap';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewDetailed } from './dialog-detailed';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  ops: Array<string> = ['Add'];
  qtd_bits: Array<string> = [];
  op:string = undefined;
  bits:string = undefined;
  qtd_ops: number  = undefined;
  operands = {};
  control:object = { "next0": false, "next1": false };
  trace:Array<object> = [];
  trace_i:object = {};
  index_compare:number = 1; 

  constructor(sim_service: SimulatorService, public dialog: MatDialog) { 
      for(let i:number = 0; i < 32; i++) 
          this.qtd_bits.push((i+1).toString());
  }

  openDialog() {
    this.dialog.open(DialogOverviewDetailed)
  }


  gen_ops() {
    if(this.check_entries()) {
      this.operands = {};
      this.control["next0"] = true;
      for(let i:number = 0; i < this.qtd_ops; i++) {
        this.operands['A'+i] = 0;
        this.operands['B'+i] = 0;
      }
      console.log(this.operands, this.qtd_ops);
    } else {
      this.control["next0"] = false;
    }
  }

  check_entries() {
    if(this.op != undefined && this.bits != undefined && this.qtd_ops > 0) {
      return true;
    }
    return false;
  }
  
   start() {
    this.trace = [];
    this.index_compare = 1;
    this.control["next1"]  = false;
    let sim = new Simulator(this.operands, +this.bits, +this.qtd_ops);
    
    switch(this.op){
        case "Add":
            sim.add();
            this.trace = sim.trace;
            this.trace_i = this.trace[0];
            this.control["next1"] = true;
            break;
        default:
            break;
    }

   }
    
    next_compare() {
     console.log(this.trace.length, this.index_compare);
    if(this.trace.length > 0) {
        if(this.trace.length > this.index_compare) {
            this.index_compare++;
            this.trace_i = this.trace[this.index_compare-1]
        }
    }
  }

    back_compare() {
     console.log(this.trace.length, this.index_compare);
     if(this.trace.length > 0) {
         if(this.index_compare > 1) {
            this.index_compare--;
            this.trace_i = this.trace[this.index_compare-1]
        }
    }  
  }
}


