import React from 'react';
import styles from "@/styles/mainHeader.module.css";

interface MainHeaderProps {
    itunesLength?: number
    serachBar?: boolean
    onChange?:(e: React.FormEvent<HTMLInputElement>)=>void
};

const MainHeader = ({itunesLength, serachBar, onChange}: MainHeaderProps) => {
    return (
        <div className={styles.main_header}>
          <h2>Podcaster</h2>
          {serachBar ?
          <div className={styles.main_header_search}>
            <h3>{itunesLength}</h3>
            <input type="text" onChange={onChange} />
          </div>: null}
        </div>
    );
}

export default MainHeader;