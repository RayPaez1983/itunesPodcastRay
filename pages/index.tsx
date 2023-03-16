/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Headers from '../components/headers'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import { setCategoriesMapAction } from '../store/itunesRedux/category.action'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { connect, useSelector, useDispatch } from 'react-redux'
import { store } from '../store/store'
import { itunesPodcastSelector } from '../store/itunesRedux/category.selector'
import { useRouter } from 'next/router'


const Home = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const itunesMap = useSelector(itunesPodcastSelector);
  useEffect(() => {
    axios
      .get("https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json")
      .then((response) => {
        dispatch(setCategoriesMapAction(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const artistName = itunesMap.feed?.entry && itunesMap.feed?.entry["im:artist"];

  return (
    <>
      <Headers />
      <ul className={styles.main}>
        <h2>Podcaster</h2>
        <h3>{itunesMap.feed?.entry.length}</h3>
        {itunesMap.feed?.entry.map((item: any, idx: number) => {
          const picture = item["im:image"][2].label;
          return (
            <>
              <div onClick={() => router.push({
                pathname: `/podcast/${idx}`,
                query: { name: item.title.label, comment: item.summary.label },
              })
              }>

                <p>{item.title.label}</p>
                <p>Ramon que esto{item["im:artist"]?.attributes?.href}</p>
                <img
                  src={picture}
                  alt="itunespic"
                />
                <audio controls>
                  <source src={item["im:artist"]?.attributes?.href} type="audio/ogg" />
                  <source src={item["im:artist"]?.attributes?.href} />
                  Your browser does not support the audio element.
                </audio>
                <p>{item.summary.label}</p>
              </div>
            </>)
        }
          // console.log(item.category, 'my items aqui')
        )}
      </ul>
    </>

  )
}

export default Home 