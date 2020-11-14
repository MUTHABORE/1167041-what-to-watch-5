import React, {PureComponent} from 'react';
import {propsForFilms} from '../../util/props-validation.js';

import {TabsTypes} from '../../util/const.js';

export const withMovieTabs = (Component) => {
  class WithMovieTabs extends PureComponent {
    constructor(props) {
      super(props);
      this._movie = props.movie;

      this.state = {
        currentTab: TabsTypes.OVERVIEW
      };

      this._tabsChangeHandler = this._tabsChangeHandler.bind(this);
    }

    _tabsChangeHandler(evt, type) {
      evt.preventDefault();
      if (this.state.currentTab === type) {
        return;
      }

      this.setState({currentTab: type});
    }

    render() {
      this._movie = this.props.movie;
      return (
        <Component
          {...this.props}
          movie={this._movie}
          currentTab={this.state.currentTab}
          tabsChangeHandler={this._tabsChangeHandler}
        />
      );
    }
  }

  WithMovieTabs.propTypes = {
    movie: propsForFilms,
  };

  return WithMovieTabs;
};
