import { Component, OnInit } from '@angular/core';
import { SimulatorService } from '../simulator.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

    constructor(sim_service: SimulatorService) { //console.log(sim_service.ap) 
    }

  ngOnInit() {
  }

}
