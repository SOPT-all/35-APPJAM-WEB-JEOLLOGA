import React from 'react';

import * as styles from './scheduleCard.css';

interface ScheduleCardProps {
  day: string;
  programs: { [time: string]: string };
}

const ScheduleCard = ({ day, programs }: ScheduleCardProps) => {
  return (
    <article className={styles.cardContainer}>
      <h3 className={styles.dayStyle}>{day}</h3>
      <ul>
        {Object.entries(programs).map(([time, description], index) => (
          <li key={index} className={styles.programItem}>
            <span className={styles.timeStyle}>{time}</span>
            <span className={styles.description}>{description}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ScheduleCard;
