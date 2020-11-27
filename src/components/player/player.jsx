import React from 'react';
import {withPlayer} from '../../hocs/with-player/with-player.jsx';
import {formatDurationLeft} from '../../util/common.js';
import PropTypes from 'prop-types';
import {propsForFilms, propsForRouterProps} from '../../util/props-validation.js';

const Player = (props) => {
  const {children, movie, playerStatusChangeHandler, closeButtonClickHandler, durationProgress, durationLeft, fullscreenClickHandler, isPlaying} = props;
  return (
    <div className="player">

      {children}

      <button type="button" className="player__exit" onClick={closeButtonClickHandler}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={durationProgress} max="100"></progress>
            <div className="player__toggler" style={ {left: `${durationProgress}%`} }>Toggler</div>
          </div>
          <div className="player__time-value">{formatDurationLeft(durationLeft)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={playerStatusChangeHandler}>
            {isPlaying && (
              <>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </>
            )}
            {!isPlaying && (
              <>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>
              </>
            )}
            <span>Play</span>
          </button>
          <div className="player__name">{movie.title}</div>

          <button type="button" className="player__full-screen" onClick={fullscreenClickHandler}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  children: PropTypes.node.isRequired,
  movie: propsForFilms,
  routerProps: propsForRouterProps,
  playerStatusChangeHandler: PropTypes.func.isRequired,
  closeButtonClickHandler: PropTypes.func.isRequired,
  fullscreenClickHandler: PropTypes.func.isRequired,
  durationProgress: PropTypes.number.isRequired,
  durationLeft: PropTypes.number.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default withPlayer(Player);
