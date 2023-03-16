import Image from 'next/image'
import Headers from '../components/headers'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import { setCategoriesMapAction } from '../store/itunesRedux/category.action'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { connect, useSelector, useDispatch } from 'react-redux'
import { store } from '../store/store'
import { itunesPodcastSelector } from '../store/itunesRedux/category.selector'


const Home = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const itunesMap = useSelector(itunesPodcastSelector);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        dispatch(setCategoriesMapAction(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(itunesMap, 'que es esto')
  return (
    <>
      <Headers />
      <ul className={styles.main}>
       
        {itunesMap.map((item: any)=>
        // eslint-disable-next-line react/jsx-key
        <div onClick={()=>   router.push({
          pathname: `/podcast/${item.id}`,
          query: { name: item.name, comment: item.body },
        })
      }>
          {
            item.name
          }
          {item.body}
           <li>
          <Link href={`/podcast/${item.id}`}>Go to podcats number{item.id}</Link>
        </li>
        </div>)}
      </ul>
    </>
  )
}

export default Home 