import React from 'react';
import styles from "@/styles/mainHeader.module.css";
import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa';

interface MainHeaderProps {
  itunesLength?: number;
  serachBar?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MainHeader = ({ itunesLength, serachBar, onChange }: MainHeaderProps) => {
  const router = useRouter();
  return (
    <div className={styles.main_header}>
      {router.pathname !== '/' && (
        <>
          {' '}
          <FaArrowLeft
            onClick={() =>
              router.push({
                pathname: `/`,
              })
            }
          />
        </>
      )}
      <h2>Podcaster</h2>

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