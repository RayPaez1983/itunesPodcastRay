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
}
  


   
   