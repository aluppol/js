import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  public user = {
    name: 'Joe',
    isAutorized: true
  }
}