// nesse componente deve ficar tudo que será fixo na aplicação (todas as páginas), por exemplo uma side bar ou menu lateral 
import '../styles/global.css';

import { ChallengesProvider } from  '../contexts/ChallengesContext'
import { CountdownProvider } from '../contexts/CountdownContext';

function MyApp({ Component, pageProps }) {
  return (  
  
      
        <Component {...pageProps} />
      
    
  
  
    )
}

export default MyApp
