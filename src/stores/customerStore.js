import {  observable,makeObservable } from "mobx";

export default class CustomerStore {
  @observable productsList=[]
  @observable wishList=[]


  constructor() {
    makeObservable(this);
  }

  
}
