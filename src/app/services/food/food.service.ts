import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {
  getAllFoodsBySearchTerm(arg0: any): Food[] {
    throw new Error('Method not implemented.');
  }

  constructor() { }
  getAll():Food[]{
    return[
      {
        id:1,
        name:'burger',
        price:250,
        cookTime:'40-50',
        favorite:false,
        origins:['italy'],
        stars: 4.0,
        imageUrl: '/asserts/images/food/1.jpg',
        tags:['FastFood','Pizza','Lunch'],
      },
      {
        id:2,
        name:'burger',
        price:250,
        cookTime:'40-50',
        favorite:false,
        origins:['italy'],
        stars: 4.0,
        imageUrl: '/asserts/images/food/2.jpg',
        tags:['FastFood','Pizza','Lunch'],
      },
      {
        id:3,
        name:'burger',
        price:250,
        cookTime:'40-50',
        favorite:false,
        origins:['italy'],
        stars: 4.0,
        imageUrl: '/asserts/images/food/3.jpg',
        tags:['FastFood','Pizza','Lunch'],
      },
      
      {
        id:4,
        name:'burger',
        price:250,
        cookTime:'40-50',
        favorite:false,
        origins:['italy'],
        stars: 4.0,
        imageUrl: '/asserts/images/food/4.jpg',
        tags:['FastFood','Pizza','Lunch'],
      },
      {
        id:5,
        name:'burger',
        price:250,
        cookTime:'40-50',
        favorite:false,
        origins:['italy'],
        stars: 4.0,
        imageUrl: '/asserts/images/food/5.jpg',
        tags:['FastFood','Pizza','Lunch'],
      },
      {
        id:6,
        name:'burger',
        price:250,
        cookTime:'40-50',
        favorite:false,
        origins:['italy'],
        stars: 4.0,
        imageUrl: '/asserts/images/food/6.jpg',
        tags:['FastFood','Pizza','Lunch'],
      },
      {
        id:7,
        name:'burger',
        price:250,
        cookTime:'40-50',
        favorite:false,
        origins:['italy'],
        stars: 4.0,
        imageUrl: '/asserts/images/food/7.jpg',
        tags:['FastFood','Pizza','Lunch'],
      },
      {
        id:8,
        name:'burger',
        price:250,
        cookTime:'40-50',
        favorite:false,
        origins:['italy'],
        stars: 4.0,
        imageUrl: '/asserts/images/food/8.jpg',
        tags:['FastFood','Pizza','Lunch'],
      },
    ]
  }
}
