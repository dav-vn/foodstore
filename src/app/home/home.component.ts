import { Component } from '@angular/core';
import {FoodService} from "../services/food/food.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private foodService: FoodService) {
  }
  ngOnInit(): void {

  }
}
