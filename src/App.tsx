import store, { storeContext }  from './store'
import Layout from './layout'

const App = () => {
  return <storeContext.Provider value={store}>
    <Layout></Layout>
  </storeContext.Provider>
}

export default App
