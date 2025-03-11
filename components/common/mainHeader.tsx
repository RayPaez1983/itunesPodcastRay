import React from 'react';
import styles from "@/styles/mainHeader.module.css";
import { useRouter } from 'next/router';

interface MainHeaderProps {
  itunesLength?: number;
  serachBar?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MainHeader = ({ itunesLength, serachBar, onChange }: MainHeaderProps) => {
  const router = useRouter();
  return (
    <div className={styles.main_header}>
      <div>
        {' '}
        {router.pathname !== '/' && (
          <button
            onClick={() =>
              router.push({
                pathname: `/`,
              })
            }>
            back
          </button>
        )}
        <h2>Podcaster</h2>
      </div>

      {serachBar ? (
        <div className={styles.main_header_search}>
          <h3>{itunesLength}</h3>
          <input type="text" onChange={onChange} />
        </div>
      ) : null}
    </div>
  );
};

export default MainHeader;