import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Category } from '../../models/category';

@Injectable({
    providedIn: 'root'
  })

export class DataService {

    allCategories: Category[]=[];

    constructor() {}

    setCategory(allCategories: Category[]): void {
      this.allCategories = allCategories;
    }

    getCategories(): Category[]{
      return this.allCategories;
    }

}