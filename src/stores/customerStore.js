import { action, observable, makeObservable } from "mobx";
import {getUser} from '../server_req/users'

export default class CustomerStore {
  @observable shoppingList = [];
  @observable wishList = [];

  constructor() {
    makeObservable(this);
  }

  @action initUserData(data){

  }

  @action addToShoppingList(product) {
    this.shoppingList.push(product)
  }
  @action addToWishList(product) {
    this.wishList.push(product)
  }
}
