import React from 'react';
import {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {propsForFilms, propsForRouterProps} from '../../util/props-validation.js';

export const withPlayer = (Component) => {
  class WithPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: true,
        durationProgress: 0,
        durationLeft: 0,
      };

      this.videoRef = React.createRef();

      this.moviesList = props.moviesList;
      this.routerProps = props.routerProps;
      this.movie = this.moviesList.find((elem) => elem.id === +this.routerProps.match.params.id);

      this.playerStatusChangeHandler = this.playerStatusChangeHandler.bind(this);
      this.closeButtonClickHandler = this.closeButtonClickHandler.bind(this);
      this.durationUpdateHandler = this.durationUpdateHandler.bind(this);
      this.fullscreenClickHandler = this.fullscreenClickHandler.bind(this);
    }

    componentDidMount() {
      const video = this.videoRef.current;
      video.play();
    }

    componentDidUpdate() {
      const video = this.videoRef.current;
      if (this.state.isPlaying === true) {
        video.play();
      } else {
        video.pause();
      }
    }

    playerStatusChangeHandler() {
      this.setState({isPlaying: !this.state.isPlaying});
    }

    closeButtonClickHandler() {
      this.routerProps.history.goBack();
    }

    durationUpdateHandler() {
      const video = this.videoRef.current;

      this.setState({
        durationProgress: video.currentTime * 100 / video.duration,
        durationLeft: video.duration - video.currentTime,
      });
    }

    fullscreenClickHandler() {
      const video = this.videoRef.current;
      video.requestFullscreen();
    }

    render() {
      return (
        <Component
          {...this.props}
          movie={this.movie}
          playerStatusChangeHandler={this.playerStatusChangeHandler}
          closeButtonClickHandler={this.closeButtonClickHandler}
          durationProgress={this.state.durationProgress}
          durationLeft={this.state.durationLeft}
          fullscreenClickHandler={this.fullscreenClickHandler}
          isPlaying={this.state.isPlaying}
        >
          <video
            ref={this.videoRef}
            className="player__video"
            src={this.movie.video_link}
            poster={this.movie.preview_image}
            onTimeUpdate={this.durationUpdateHandler}
            loop
            muted
          >
          </video>
        </Component>
      );
    }
  }

  WithPlayer.propTypes = {
    moviesList: PropTypes.arrayOf(propsForFilms).isRequired,
    routerProps: propsForRouterProps,
  };

  const mapStateToProps = (state) => ({
    moviesList: state.DATA.moviesList,
  });

  return connect(mapStateToProps)(WithPlayer);
};
