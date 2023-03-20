import { useRouter } from 'next/router'
import styles from '@/styles/Home.module.css'
import BigCard from '@/components/bigCard'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Podcast = () => {
  const router = useRouter()
  const { idx, link } = router.query
  const [podcast, setPodcast] = useState(null);

  useEffect(() => {
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2')}`)
    .then(response => {
      if (response.ok) return response.json()
      throw new Error('Network response was not ok.')
    })
    .then(data => setPodcast(data.contents));
  }, []);
  console.log(router.query, 'nose que hacer', podcast, link)
  return <div >
    <div className={styles.main_header}>
      <h2>Podcaster</h2>
    </div>
    <div className={styles.content_postCard}>
    
  <BigCard/>
  <div className={styles.content_postCard_title}>Episode: {idx}</div>
  </div>
  </div>
}

export default Podcast