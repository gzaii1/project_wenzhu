import IHomeModel from './Home.model/type'
import HomeModel from './Home.model'

interface IStore {
    HomeModel: IHomeModel,
}

const store: IStore = {
    HomeModel: new HomeModel(),
}

export default store