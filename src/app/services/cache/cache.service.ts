import { Injectable } from '@angular/core';

// Service to cache the get request and also check for the cahced data

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  private cache: Map<string, any> = new Map();

  constructor() { }

  put(url: string, response: any) {
    this.cache.set(url, response);
  }

  get(url: string): any {
    return this.cache.get(url);
  }

  clear() {
    this.cache.clear()
  }
}
