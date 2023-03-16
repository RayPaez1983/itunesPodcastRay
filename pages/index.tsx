/* eslint-disable @next/next/no-img-element */
import Headers from '@/components/headers'
import styles from '@/styles/Home.module.css'
import { setCategoriesMapAction } from '@/store/itunesRedux/category.action'
import { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { itunesPodcastSelector } from '@/store/itunesRedux/category.selector'
import { useRouter } from 'next/router'
import Card from '@/components/card'


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
        <div className={styles.main_content}>
        {itunesMap.feed?.entry.map((item: any, idx: number) => {
          const picture = item["im:image"][1].label;
          const author = item["im:artist"].label;
          return (
            <div key={idx} >
              <Card query={{
                name: item.title.label,
                comment: item.summary.label
              }}
                picture={picture}
                idx={idx}
                artist={author} />
            </div>
            )
        }
          // console.log(item.category, 'my items aqui')
        )}
        </div>
      </ul>
    </>

  )
}

export default Home 