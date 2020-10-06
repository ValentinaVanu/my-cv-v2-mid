import React from 'react';
import IcoMoon from 'react-icomoon';

const iconSet = require('../../assets/font/selection.json');

const Icon = props => <IcoMoon { ...{...props, iconSet} } />

export { Icon }
