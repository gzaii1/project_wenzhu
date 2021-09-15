import { makeAutoObservable, } from 'mobx'

class HomeModel {
    name: string = ''
    constructor() {
        makeAutoObservable(this);
    }

    setName(name: string) {
        this.name = name;
    }
}

export default HomeModel