/* eslint-disable @next/next/no-img-element */
import Headers from '@/components/headers'
import styles from '@/styles/Home.module.css'
import { setCategoriesMapAction, setSearchQuery, setFilteredData } from '@/store/itunesRedux/category.action'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { itunesPodcastSelector } from '@/store/itunesRedux/category.selector'
import { useRouter } from 'next/router'
import Card from '@/components/card'


const Home = () => {
  const searchQuery = useSelector(setSearchQuery);
  const filteredData = useSelector(setFilteredData);
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
  const handleSearch = (event: any) => {
    const query = event.target.value;
    dispatch(setSearchQuery(query));
    const filtered = itunesMap.feed?.entry.filter((item: any) =>
      item["im:artist"].label.toLowerCase().includes(query.toLowerCase())
    );
    dispatch(setFilteredData(filtered));
  };
  const dataFiltered = filteredData.payload.itunesPodcast.filteredData 
   const dataValidation = dataFiltered < 1 ?
                        itunesMap.feed?.entry :
                        dataFiltered;
  if(!dataValidation) return <div>...Loading</div>
  return (
    <>
      <Headers />
      <div className={styles.main}>
        <div className={styles.main_header}>
          <h2>Podcaster</h2>
          <div className={styles.main_header_search}>
            <h3>{itunesMap.feed?.entry.length}</h3>
            <input type="text" onChange={handleSearch} />
          </div>
        </div>
        <div className={styles.main_content}>
          {dataValidation?.map((item: any, idx: number) => {
            const picture = item["im:image"][1].label;
            const artist = item.title.label.substring(0, 18);
            const author = item["im:name"].label.replace('Podcast', '').substring(0, 10)
            return (
              <div key={idx} >
                <Card query={{
                  name: item.title.label,
                  comment: item.summary.label
                }}
                  picture={picture}
                  idx={idx}
                  artist={artist}
                  author={author}
                  />
              </div>
            )
          }
            // console.log(item.category, 'my items aqui')
          )}
        </div>
      </div>
    </>

  )
}

export default Home 