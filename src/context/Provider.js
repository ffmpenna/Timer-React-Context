import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { formatSeconds, setCircleDashArray } from '../utils/formatTimeLeft';
import MyContext from './MyContext';
import alarmSound from '../audio/alarmSound.mp3';

function Provider({ children }) {
  const defaultRemainingTime = {
    seconds: '00',
    minutes: '00'
  }

  const [timeLeft, setTimeLeft] = useState(defaultRemainingTime);
  const [isTimerRunning, toggleTimer] = useState(false);
  const [hasTimerEnded, stopTimer] = useState(false);
  const [musicUrl, setMusic] = useState('');

  const formatNumber = (value, type) => {
    if ((!value || value === 0) && type === "minutes") return "0"
    if (!value && type === "seconds") return "00"
    if ((value < 10 && value !== "00") && type === "seconds") return `0${value}`
    return value

  }

  const handleChange = useCallback(
    ({ target }) => {
      const roundValue = Math.round(target.value);
      const positiveValue = roundValue < 0 ? roundValue * -1 : roundValue;
      const twoDigitsValue = positiveValue.toString().length < 2 ?
        positiveValue :
        positiveValue.toString()[0] + positiveValue.toString()[1];

      const auxValues = { ...timeLeft };
      auxValues[target.name] = formatNumber(twoDigitsValue, target.name);
      setTimeLeft(auxValues);
    },
    [timeLeft],
  );

  const handleChangeMusic = useCallback(
    ({ target }) => {
      setMusic(target.value);
    },
    [],
  );

  const updateRemainingSeconds = useCallback((remainingSeconds) => {
    setTimeLeft({ ...timeLeft, seconds: formatSeconds(remainingSeconds - 1) })
    setCircleDashArray(remainingSeconds, "seconds")
  }, [timeLeft]);

  const updateRemainingMinutes = useCallback((remainingMinutes) => {
    setTimeLeft({ seconds: 59, minutes: remainingMinutes - 1 })
    setCircleDashArray(60)
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if ((timeLeft.minutes < 1 && timeLeft.seconds < 1) || !isTimerRunning) {
        clearInterval(intervalId);
      } else if (timeLeft.seconds < 1) {
        updateRemainingMinutes(timeLeft.minutes)
      }
      else
        updateRemainingSeconds(timeLeft.seconds);
    }, 1000)
    return () => clearInterval(intervalId)
  }, [timeLeft, isTimerRunning, updateRemainingSeconds, updateRemainingMinutes])

  useEffect(() => {
    if (timeLeft.minutes < 1 && timeLeft.seconds < 1 && !hasTimerEnded) {
      toggleTimer(false);
      stopTimer(true);
      setMusic('');
      const audio = new Audio(alarmSound);
      console.log(audio);
      audio.play();
    }

  }, [timeLeft, hasTimerEnded]);



  const contextValue = useMemo(() => ({
    timeLeft,
    isTimerRunning,
    hasTimerEnded,
    musicUrl,
    setMusic,
    stopTimer,
    setTimeLeft,
    handleChange,
    toggleTimer,
    handleChangeMusic
  }), [timeLeft, isTimerRunning, hasTimerEnded, musicUrl,
    setMusic, setTimeLeft, handleChange, handleChangeMusic])

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.shape({}),
}.isRequired;

export default Provider;
