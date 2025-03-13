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
  console.log(router.pathname);
  const goBackIcon =
    router.pathname.includes('/podcast/') ||
    router.pathname.includes('mediaPlayer');
  console.log(goBackIcon);
  return (
    <div className={styles.main_header}>
      {router.pathname !== '/' && (
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 100 100"
            onClick={() => router.back()}>
            <path
              d="M60,20 L30,50 L60,80"
              stroke="black"
              strokeWidth="5"
              fill="none"
            />
          </svg>
        </button>
      )}
      <button
        onClick={() =>
          router.push({
            pathname: '/',
          })
        }>
        <h2>Podcaster</h2>
      </button>

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