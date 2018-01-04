import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import style from './LoadProgress.css';


const LoadProgress = () => (
  <div className={style.wrapper}>
    <CircularProgress size={80} thickness={7} />
  </div>
);

export default LoadProgress;