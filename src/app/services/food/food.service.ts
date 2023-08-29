import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():string[]{
    return[
      'assets/images/foods/food- 1.jpg',
      'assets/images/foods/2.jpg',
      'assets/images/foods/3.png',
      'assets/images/foods/4.jpeg',
      'assets/images/foods/5.webp',
      'assets/images/foods/6.jpg',
      'assets/images/foods/7.jpg',
      'assets/images/foods/8.jpg',
    ]
  }
}
