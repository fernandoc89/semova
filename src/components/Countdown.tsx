import { useState, useEffect, useContext } from 'react';
import { start } from 'repl';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';



export function Countdown () {
  const { minutes, 
          seconds, 
          hasFinished, 
          isActive, 
          startCountdown, 
          resetCountdown
        } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');    // transformando minutos em String - padStart verifica se há dois caracteres, ele preenche a esquerda com 0 - split é responsável por dividir a string
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');    // transformando segundos em String

  
  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      { hasFinished ? (
        <button 
          disabled
          className={styles.countdownButton}
          >   
          Ciclo encerrado     
         </button>
      ) : (
        <>
          { isActive ? (
          <button 
            type="button" 
            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
            onClick={resetCountdown}
        >   
            Abandonar ciclo     
          </button>
      ) : (
          <button 
            type="button" 
            className={styles.countdownButton}
            onClick={startCountdown}
          >
            Iniciar um ciclo
          </button>
      ) }        
        </> 
      )}

      
    </div>
  );
}