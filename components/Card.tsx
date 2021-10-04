import { ReactNode } from 'react';

import styles from 'styles/components/Card.module.scss';

interface Props {
  children: ReactNode;
  mobileOnly?: boolean;
}

const Card = ({ children, mobileOnly }: Props) => {
  return (
    <div className={`${styles.Card} ${mobileOnly && styles.MobileCard}`}>
      {children}
    </div>
  );
};

export default Card;
