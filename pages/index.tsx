import Headers from "@/components/headers";
import styles from "@/styles/Home.module.css";
import {
  setPodcastMapAction,
  setSearchQuery,
  setFilteredData,
} from "@/store/itunesRedux/category.action";
import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { itunesPodcastSelector } from "@/store/itunesRedux/category.selector";
import Card from "@/components/card";
import LoadingSpinner from "@/components/loadingSpinner";
import MainHeader from "@/components/common/mainHeader";
import { Podcast } from '@/utils/type';

const Home = () => {
  const filteredData = useSelector(setFilteredData);
  const dispatch = useDispatch();
  const itunesPodcast = useSelector(itunesPodcastSelector);

  useEffect(() => {
    const iTunesUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/us/rss/toppodcasts/limit=100/genre=1310/json`;
    axios
      .get(iTunesUrl)
      .then((response) => {
        dispatch(setPodcastMapAction(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);
  console.log(itunesPodcast);
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;

    dispatch(setSearchQuery(query));
    const filtered = itunesPodcast.feed?.entry.filter((item: Podcast) =>
      item['im:name'].label.toLowerCase().includes(query.toLowerCase())
    );

    dispatch(setFilteredData(filtered));
  };
  const dataFiltered = filteredData.payload.itunesPodcast.filteredData;
  const dataValidation =
    dataFiltered < 1 ? itunesPodcast.feed?.entry : dataFiltered;
  if (!dataValidation) return <LoadingSpinner />;

  return (
    <>
      <Headers />
      <div className={styles.main}>
        <MainHeader
          itunesLength={itunesPodcast.feed?.entry.length}
          serachBar
          onChange={handleSearch}
        />
        <div className={styles.main_content}>
          {dataValidation?.map((item: Podcast, idx: number) => {
            console.log(item);
            const picture = item['im:image'][1].label;
            const image = item['im:image'][2].label;
            const artist = item['im:name'].label;
            const author = item['im:artist'].label
              .replace('Podcast', '')
              .substring(0, 10);
            const name = item.title.label;
            const podCastId = item.id.attributes['im:id'];
            return (
              <div key={idx}>
                <Card
                  name={name}
                  image={image}
                  podCastId={podCastId}
                  picture={picture}
                  idx={idx}
                  artist={artist}
                  author={author}
                  item={item}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
