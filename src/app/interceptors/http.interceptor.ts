import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CacheService } from "../services/cache/cache.service";
import { Observable, of, tap } from "rxjs";

@Injectable()
export class CachingInterceptor implements HttpInterceptor {
    constructor(private cacheService: CacheService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // check if the request is cacheable
        if(req.method !== 'GET') {
            return next.handle(req);
        }

        // check if we have a cache for this url / request, if yes , then return that
        const cachedResponse = this.cacheService.get(req.url);
        if(cachedResponse) {
            return of(cachedResponse)
        }


        return next.handle(req).pipe(
            tap((event: HttpEvent<any>) => {
                if(event.type === HttpEventType.Response) {
                    this.cacheService.put(req.url, event)
                }
            })
        )
    }
}