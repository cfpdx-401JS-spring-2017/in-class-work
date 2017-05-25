import React from 'react';
import ReactDOM from 'react-dom';
import DungeonApp from './DungeonApp';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<DungeonApp />, document.getElementById('root'));
registerServiceWorker();
