import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {propsForFilms} from '../../util/props-validation.js';
import {CARD_SIZE, HOVER_TIMEOUT} from '../../util/const.js';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._film = props.film;
    this.playerStatus = props.playerStatus;

    this.videoRef = React.createRef();
  }

  componentWillUnmount() {
    this.playerStatus = false;
    clearTimeout(this._setCardVideo);
  }

  componentDidUpdate() {
    this.playerStatus = this.props.playerStatus;

    this._setCardVideo();

    if (!this.playerStatus) {
      this.videoRef.current.load();
    }
  }

  _setCardVideo() {
    setTimeout(() => {
      if (this.playerStatus) {
        this.videoRef.current.play();
      }
    }, HOVER_TIMEOUT);
  }

  render() {
    return <video
      ref={this.videoRef}
      src={this._film.video}
      poster={`img/images/${this._film.image}`}
      width={CARD_SIZE.width}
      height={CARD_SIZE.height}
      preload="true"
      loop
      muted
    >{this._film.title}</video>;
  }
}

VideoPlayer.propTypes = {
  film: propsForFilms,
  playerStatus: PropTypes.bool.isRequired,
};

export default VideoPlayer;
