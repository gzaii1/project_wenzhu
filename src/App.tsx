import * as React from 'react'
import store, { storeContext }  from './store'
import Layout from './layout'

const App: React.FC = () => {
  return <storeContext.Provider value={store}>
    <Layout></Layout>
  </storeContext.Provider>
}

export default App
