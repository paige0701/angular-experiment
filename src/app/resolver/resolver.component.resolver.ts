import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/internal/Observable';
import {forkJoin} from 'rxjs/internal/observable/forkJoin';
import {ResolverService} from './resolver.service';
import {Injectable} from '@angular/core';
import {catchError, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class ResolverComponentResolver implements Resolve<Observable<Object>> {

  constructor(private resolverService: ResolverService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Observable<Object>> | Promise<Observable<Object>> | Observable<Object> {

    // return forkJoin({
    //   list : this.resolverService.getList(),
    //   detail : this.resolverService.getDetail('id')
    //   }
    // )
    return this.resolverService.getList().pipe(catchError(error   => {
        return 'Error'
      }), mergeMap(something => {
        if (something) {
          return of('Resolver works !')
        } else {
          return 'Error';
        }
      })
    )
  }

}
