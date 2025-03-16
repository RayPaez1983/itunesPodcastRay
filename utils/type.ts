export interface podcastType {
    resultCount?: number;
    results?: 
        {
        wrapperType?:string, 
        kind?: string, 
        collectionId?: number, 
        trackId?: number, 
        artistName?: string, 
        collectionName?: string, 
        trackName?: string, 
        collectionCensoredName?: string, 
        trackCensoredName?: string, 
        collectionViewUrl?: string,
        feedUrl?: string, 
        trackViewUrl?:string, 
        artworkUrl30?:string, 
        artworkUrl60?:string, 
        artworkUrl100?:string, 
        collectionPrice?: number, 
        trackPrice?: number, 
        collectionHdPrice?:number, 
        releaseDate?: string, 
        collectionExplicitness?: string, 
        trackExplicitness?:string, 
        trackCount?:number, 
        trackTimeMillis?:number, 
        country?:string, 
        currency?:string, 
        primaryGenreName?:string, 
        genreIds?: string[], 
        artistIds?:string[], 
        shortDescription?: string, 
        episodeUrl?:string, 
        artworkUrl600?:string, 
        artworkUrl160?:string, 
        previewUrl?:string, 
        episodeContentType?:string,  
        genres?:string, 
        description?:string, 
        episodeGuid?:string
    }[],
    episode: episodeType 
    
  }

  export interface episodeType {
    episodeUrl?: string,
    trackName?: string,
    trackTimeMillis: number,
    releaseDate: string,
    trackId:number,
}
  

interface Image {
  label: string;
  attributes: {
    height: string;
  };
}

interface Price {
  label: string;
  attributes: {
    amount: string;
    currency: string;
  };
}

interface ContentType {
  attributes: {
    term: string;
    label: string;
  };
}

interface Link {
  attributes: {
    rel: string;
    type: string;
    href: string;
  };
}

interface Id {
  label: string;
  attributes: {
    'im:id': string;
  };
}

interface Category {
  attributes: {
    'im:id': string;
    term: string;
    scheme: string;
    label: string;
  };
}

interface ReleaseDate {
  label: string;
  attributes: {
    label: string;
  };
}

export interface Podcast {
  'im:name': {
    label: string;
  };
  'im:image': Image[];
  summary: {
    label: string;
  };
  'im:price': Price;
  'im:contentType': ContentType;
  rights: {
    label: string;
  };
  title: {
    label: string;
  };
  link: Link;
  id: Id;
  'im:artist': {
    label: string;
  };
  category: Category;
  'im:releaseDate': ReleaseDate;
}

export interface Podcasts {
  itunesPodcast: {
    feed: {
      entry: Podcast[];
    };
  };
}

export interface CardProps {
  item: object;
  name: string;
  image: string;
  artist: string;
  author: string;
  picture: string;
  idx: number;
  podCastId: string;
}

export interface ItunesPodcastState {
  itunesPodcast: Podcast[];
  searchQuery: string;
  filteredData: Podcast[];
  selectedPodcast: Podcast;
  selectedSinglePodcast: Podcast;
  podcastCard: Podcast | null;
  podcastData: Podcast | null;
}
   
export interface Genre {
  name: string;
  id: string;
}

export interface PodcastEpisode {
  previewUrl: string;
  artworkUrl600: string;
  artistIds: number[];
  episodeUrl: string;
  genres: Genre[];
  episodeGuid: string;
  trackId: number;
  feedUrl: string;
  releaseDate: string;
  shortDescription: string;
  closedCaptioning: string;
  collectionId: number;
  collectionName: string;
  kind: string;
  wrapperType: string;
  description: string;
  country: string;
  artworkUrl160: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  artworkUrl60: string;
  contentAdvisoryRating: string;
  episodeFileExtension: string;
  episodeContentType: string;
  trackViewUrl: string;
  trackTimeMillis: number;
  trackName: string;
}

export interface PodcastToPlay {
  episode: PodcastEpisode;
  expirationTime: number;
}