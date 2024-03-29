import { Countdown } from '../components/Countdown';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { ChallengeBox } from '../components/ChallengeBox';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import styles from "../styles/pages/Home.module.css";
import { GetServerSideProps } from 'next';

import Head from 'next/head';
import React from 'react';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}


export default function Home(props: HomeProps) {
 
  console.log(props)

  return (
    <ChallengesProvider 
    level={props.level}
    currentExperience={props.currentExperience}
    challengesCompleted={props.challengesCompleted}>
      <div className={styles.container}>
        <Head>
          <title>Início | Se Mova</title>
        </Head>
        <ExperienceBar />
      <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  
  const { level, currentExperience, challengeCompleted } = ctx.req.cookies;
  

  return {
    props: {
      level: Number(level), 
      currentExperience: Number(currentExperience), 
      challengeCompleted: Number(challengeCompleted)
    }
  }
}

