import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData {
      minutes: number;
      seconds: number;
      hasFinished: boolean;
      isActive: boolean;
      startCountdown: () => void;
      resetCountdown: () => void;
}

interface CountdownProviderProps {
  children: ReactNode;
}

let countdownTimeout: NodeJS.Timeout;

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider({ children }: CountdownProviderProps) {
  const { startNewChallenge }= useContext(ChallengesContext);
  
  const [time, setTime] = useState(25 * 60);     // useState coloca o estado no componente - começa em 25 minutos - 60 é a quantidde de segundos em cada minuto
  const [isActive, setIsActive] = useState(false);   // esse estado vai armazenar se o countdown está iniciado ou parado
  const [hasFinished, setHasFinished] = useState(false); // esse estado vai armazenar se o ciclo terminou

  const minutes = Math.floor(time / 60);         // calcula os minutos - math é usado para arredondar - floor arredonda pra baixo
  const seconds = time % 60;                     // calcula os segundos

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(25 * 60);
    setHasFinished(false);
  }


  // useEffect é um gerador de efeitos colaterais 
  // se active for true e o time não chegou a 0, depois de 1 segundos (1000), o countdown vai diminuir em 1 segundo
  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true);   // ciclo finalizado verdadeiro
      setIsActive(false);     // contador fica inativo
      startNewChallenge();
    }
  }, [isActive, time])
  
  return (
    <CountdownContext.Provider value={{
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountdown,
      resetCountdown,
    }}>
      {children}
    </CountdownContext.Provider>
  )

}