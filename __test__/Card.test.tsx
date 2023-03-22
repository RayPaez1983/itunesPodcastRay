import Card from "../components/card";
import { render, screen } from "@testing-library/react";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));
const dataMocked = {
  name: "50 Years of Hip-Hop - KEXP",
  comment:
    "A party in the Bronx on August 11th, 1973 is widely considered to be the birthplace of hip-hop. The art form has since touched every corner of our world and evolved into one of the most significant cultural forces today. 50 Years of Hip-Hop, hosted by KEXP’s Larry Mizell Jr, celebrates the anniversary by highlighting a different year of its history each week. Jumping around the timeline from 1973 to today, expect personal reflections, iconic tracks and albums, and conversations around the genesis of the culture. Episodes drop weekly starting February 1, 2023.",
  image:
    "https://is5-ssl.mzstatic.com/image/thumb/Podcasts123/v4/f8/e2/63/f8e263a6-e723-64d8-6891-b40f7424a852/mza_4487244322136666269.jpg/170x170bb.png",
  picture:
    "https://is4-ssl.mzstatic.com/image/thumb/Podcasts123/v4/f8/e2/63/f8e263a6-e723-64d8-6891-b40f7424a852/mza_4487244322136666269.jpg/60x60bb.png",
  artist: "50 Years of Hip-Hop",
  author: "KEXP",
  idx: 99,
  podCastId: "1535809341",
};
const ItemMocked = {
  "im:name": {
      "label": "Calm Rain Sounds"
  },
  "im:image": [
      {
          "label": "https://is2-ssl.mzstatic.com/image/thumb/Podcasts123/v4/81/61/a6/8161a67d-3788-f542-9189-2bc9f3fa5af4/mza_13647480827358819102.jpg/55x55bb.png",
          "attributes": {
              "height": "55"
          }
      },
      {
          "label": "https://is4-ssl.mzstatic.com/image/thumb/Podcasts123/v4/81/61/a6/8161a67d-3788-f542-9189-2bc9f3fa5af4/mza_13647480827358819102.jpg/60x60bb.png",
          "attributes": {
              "height": "60"
          }
      },
      {
          "label": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts123/v4/81/61/a6/8161a67d-3788-f542-9189-2bc9f3fa5af4/mza_13647480827358819102.jpg/170x170bb.png",
          "attributes": {
              "height": "170"
          }
      }
  ],
  "summary": {
      "label": "1 hour of soothing rain sounds"
  },
  "im:price": {
      "label": "Get",
      "attributes": {
          "amount": "0",
          "currency": "USD"
      }
  },
  "im:contentType": {
      "attributes": {
          "term": "Podcast",
          "label": "Podcast"
      }
  },
  "rights": {
      "label": "© melvin urumath"
  },
  "title": {
      "label": "Calm Rain Sounds - melvin urumath"
  },
  "link": {
      "attributes": {
          "rel": "alternate",
          "type": "text/html",
          "href": "https://podcasts.apple.com/us/podcast/calm-rain-sounds/id1512740484?uo=2"
      }
  },
  "id": {
      "label": "https://podcasts.apple.com/us/podcast/calm-rain-sounds/id1512740484?uo=2",
      "attributes": {
          "im:id": "1512740484"
      }
  },
  "im:artist": {
      "label": "melvin urumath"
  },
  "category": {
      "attributes": {
          "im:id": "1310",
          "term": "Music",
          "scheme": "https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2",
          "label": "Music"
      }
  },
  "im:releaseDate": {
      "label": "2020-04-16T15:20:00-07:00",
      "attributes": {
          "label": "April 16, 2020"
      }
  }
}
test("test the Card render", () => {
  const {
    name,
    image,
    picture,
    artist,
    author,
    idx,
    podCastId,
  } = dataMocked;
  render(
    <Card
      name={name}
      image={image}
      podCastId={podCastId}
      picture={picture}
      idx={idx}
      artist={artist}
      author={author}
      item={ItemMocked}
    />
  );
  const podcast = screen.getByText("50 YEARS OF HIP-HO");
  expect(podcast).toBeInTheDocument();
  const Artist = screen.getByText("Author: KEXP");
  expect(Artist).toBeInTheDocument();
  const testImage = document.querySelector("img") as HTMLImageElement;
  expect(testImage.alt).toContain("itunespic");
});
