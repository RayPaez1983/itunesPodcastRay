import { useRouter } from 'next/router'
import styles from '@/styles/Home.module.css'

const Podcast = () => {
  const router = useRouter()
  const { podcast, name, comment } = router.query
  return<> <p className={styles.main}>Podcast: {podcast} name: {name} comments: {comment}</p>
  

  </>
}

export default Podcast