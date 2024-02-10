import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { CacheService } from './cache/cache.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient,
    private cacheService: CacheService
  ) { }

  getUser(githubUsername: string) {
    const url = `https://api.github.com/users/${githubUsername}`
    const cachedData = this.cacheService.get(url)
    if (cachedData) {
      return of(cachedData)
    }

    return this.httpClient.get<User>(url).pipe(
      tap((data: any) => {
        this.cacheService.put(url, data)
      })
    )
  }

  getUserRepos(githubUsername: string, page: number, perPage: number): GithubRepo[] | any {

    const url = `https://api.github.com/users/${githubUsername}/repos?per_page=${perPage}&page=${page}`
    const cachedData = this.cacheService.get(url)
    if (cachedData) {
      return cachedData
    }


    const res = this.httpClient.get<GithubRepo[]>(`https://api.github.com/users/${githubUsername}/repos`, {
      params: {
        per_page: perPage,
        page: page
      }
    });
    const response: GithubRepo[] = []
    res.forEach((value) => {
      for (let items of value.values()) {
        const lang = this.getRepoLangauges(items.languages_url)

        let tags: Array<string> = []
        lang.forEach((element: any) => {
          for (let tag in element) {
            tags.push(tag)
          }
        })
        response.push({ ...items, tags })
      }
    })
    this.cacheService.put(url, response)
    return response
  }

  getRepoLangauges(url: string) {
    const cachedData = this.cacheService.get(url)
    if (cachedData) {
      return cachedData
    }

    return this.httpClient.get<object>(url).pipe(
      tap((data: any) => {
        this.cacheService.put(url, data)
      })
    );
  }
}
