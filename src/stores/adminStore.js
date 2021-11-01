import {  observable,makeObservable } from "mobx";

export default class AdminStore {
  @observable productsList=[]
  @observable wishList=[]


  constructor() {
    makeObservable(this);
  }

}
