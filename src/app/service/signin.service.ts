import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  user : EventEmitter<any> = new EventEmitter<any>();
}
