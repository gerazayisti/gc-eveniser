import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { parseISO, format, isBefore, isAfter } from 'date-fns';
import { Talk } from '@lib/types';
import styles from './talk-card.module.css';

type Props = {
  key: string;
  talk: Talk;
  showTime: boolean;
};

const formatDate = (date: string | undefined) => {
  if (!date) return 'Invalid date';
  try {
    return format(parseISO(date), "h:mmaaaaa'm'");
  } catch (e) {
    return 'Invalid date';
  }
};

export default function TalkCard({ talk: { title, speaker, start, end }, showTime }: Props) {
  const [isTalkLive, setIsTalkLive] = useState(false);
  const [startAndEndTime, setStartAndEndTime] = useState('Time unavailable');

  useEffect(() => {
    if (start && end) {
      const now = Date.now();
      setIsTalkLive(isAfter(now, parseISO(start)) && isBefore(now, parseISO(end)));
      setStartAndEndTime(`${formatDate(start)} – ${formatDate(end)}`);
    } else {
      setIsTalkLive(false);
      setStartAndEndTime('Time unavailable');
    }
  }, [end, start]);

  // Vérification si le tableau `speaker` existe et contient des éléments.
  const firstSpeakerLink =
    speaker && speaker.length > 0 && speaker[0].slug
      ? `/speakers/${speaker[0].slug}`
      : '#'; // Lien par défaut inactif.

  return (
    <div key={title || 'untitled'} className={styles.talk}>
      {showTime && <p className={styles.time}>{startAndEndTime}</p>}
      {firstSpeakerLink !== '#' ? (
        <Link
          href={firstSpeakerLink}
          className={cn(styles.card, {
            [styles['is-live']]: isTalkLive
          })}
        >
          <div className={styles['card-body']}>
            <h4 title={title || 'Untitled Talk'} className={styles.title}>
              {title || 'Untitled Talk'}
            </h4>
            <div className={styles.speaker}>
              <div className={styles['avatar-group']}>
                {speaker && speaker.length > 0 ? (
                  speaker.map((s, index) => (
                    <div key={s.name || `speaker-${index}`} className={styles['avatar-wrapper']}>
                      <Image
                        loading="lazy"
                        alt={s.name || 'Unnamed Speaker'}
                        className={styles.avatar}
                        src={s.image?.url || '/placeholder-avatar.png'} // Image de fallback.
                        title={s.name || 'Unnamed Speaker'}
                        width={24}
                        height={24}
                      />
                    </div>
                  ))
                ) : (
                  <span className={styles['no-speaker']}>No speakers available</span>
                )}
              </div>
              <h5 className={styles.name}>
                {speaker && speaker.length > 0
                  ? speaker.length === 1
                    ? speaker[0].name
                    : `${speaker.length} speakers`
                  : 'No speakers'}
              </h5>
            </div>
          </div>
        </Link>
      ) : (
        <div className={styles.card}>
          <h4>Speaker information not available</h4>
        </div>
      )}
    </div>
  );
}
