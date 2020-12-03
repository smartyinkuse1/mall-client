import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  api = environment.api + 'products/'
  constructor(private http: HttpClient, private router: Router,) { }
  getProductsByCat(category) {
    return this.http.get(`${this.api}?category=${category}`)
  }
  getProductBySlug(slug) {
    return this.http.get(`${this.api}${slug}`)
  }
  getProductsByCatLimit(category, limit) {
    return this.http.get(`${this.api}?category=${category}&limit=${limit}`)
  }
  getProducts() {
    return this.http.get(`${this.api}?limit=100`)
  }
  getProductsByPage(page, limit) {
    return this.http.get(`${this.api}?page=${page}&limit=${limit}`)
  }
}
