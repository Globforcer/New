import React from 'react';
import PropTypes from 'prop-types';
import intl from 'react-intl-universal';
import { LANGUAGES } from 'constants/index.js';

const locales = {
  [LANGUAGES.EN_US]: require('locales/en-US.json')
};

class I18N extends React.Component {
  state = {
    initDone: false,
  };

  static childContextTypes = {
    i18n: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.i18n = {
      setLanguage: this.setLanguage,
    };
  }

  getChildContext() {
    return {
      i18n: this.i18n,
    };
  }

  componentDidMount() {
    this.setLanguage(LANGUAGES.EN_US);
  }

  //
  // modify this to make an axios call to a language set in the future
  // grab on demand locales
  //

  setLanguage = language => {
    intl
      .init({
        currentLocale: language, // TODO: determine locale here
        locales,
      })
      .then(() => {
        this.setState({ initDone: true });
      });
  };

  render() {
    return this.state.initDone && this.props.children;
  }
}

export default I18N;