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
  console.log(itunesMap.feed?.entry, 'que es esto')
  return (
    <>
      <Headers />
      <ul className={styles.main}>
        {itunesMap.feed?.entry.map((item: any, idx: number) =>
          <>
            <div onClick={() => router.push({
              pathname: `/podcast/${idx}`,
              query: { name: item.title.label, comment: item.summary.label },
            })
            }>

              <p>{item.title.label}</p>
              <audio controls muted>
                <source src={item.id.label} type="audio/ogg" />
                <source src={item.id.label} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <p>{item.summary.label}</p>
            </div>
          </>
          // console.log(item.category, 'my items aqui')
        )}
      </ul>
    </>

  )
}

export default Home 