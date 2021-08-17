import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.module.less'

const App = () => {
    return <div className={styles.app}>
        hello 文竹
    </div>
}

ReactDOM.render( <App />, document.getElementById('root'));

