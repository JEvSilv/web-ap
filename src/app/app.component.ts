import { Component } from '@angular/core';
import { SimulatorService } from './simulator.service'
import { Simulator } from './ap';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

export class TableBasicExample {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}

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
  operands:any;
  //control:object = { next0:false, next1:false};
  control:any;
  trace:Array<object> = [];
  //trace_i:object = {key:null, mask:null};
  trace_i:any;
  index_compare:number = 1; 
  pass:number = 0;
  constructor(sim_service: SimulatorService) { 
      for(let i:number = 0; i < 32; i++) 
          this.qtd_bits.push((i+1).toString());
      this.control = {};
      this.trace_i = {};
      this.control["next0"] = false;
      this.control["next1"] = false;
      this.trace_i["key"] = null;
      this.trace_i["mask"] = null;
      this.operands = {};
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

  calc_pass() {
       this.pass = (this.index_compare-1) %4;
  }

   start() {
    this.trace = [];
    this.index_compare = 1;
    this.control["next1"]  = false;
    this.calc_pass();
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
            this.calc_pass();           
            this.trace_i = this.trace[this.index_compare-1]
        }
    }
  }

    back_compare() {
     console.log(this.trace.length, this.index_compare);
     if(this.trace.length > 0) {
         if(this.index_compare > 1) {
            this.index_compare--;
            this.calc_pass();
            this.trace_i = this.trace[this.index_compare-1]
        }
    }  
  }
}
