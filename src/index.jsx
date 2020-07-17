import React from 'react';
import ReactDOM from 'react-dom';

import 'typeface-roboto';
import './index.scss';

import App from './app';

console.log('__DEVMODE__', __DEVMODE__);

const OdooDev = {
  new: (lang, selector, odooWidget) => {
    // const { _t } = odooWidget.core;
    return {
      render: () => {
        ReactDOM.render(<App lang={lang} odooWidget={odooWidget} />, document.querySelector(selector));
      },

      unmount() {
        ReactDOM.unmountComponentAtNode(document.querySelector(selector));
      },
    };
  },
};

if (__DEVMODE__ !== 'odoo') {
  ReactDOM.render(<App />, document.querySelector('#app'));
}

try {
  module.hot.accept();
} catch {
  console.log('production');
}

export default OdooDev;
