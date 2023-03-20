import Card from '../components/card'
import { render, screen } from '@testing-library/react';

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))
const dataMocked = {
  name: "50 Years of Hip-Hop - KEXP",
  comment: "A party in the Bronx on August 11th, 1973 is widely considered to be the birthplace of hip-hop. The art form has since touched every corner of our world and evolved into one of the most significant cultural forces today. 50 Years of Hip-Hop, hosted by KEXP’s Larry Mizell Jr, celebrates the anniversary by highlighting a different year of its history each week. Jumping around the timeline from 1973 to today, expect personal reflections, iconic tracks and albums, and conversations around the genesis of the culture. Episodes drop weekly starting February 1, 2023.",
  image: "https://is5-ssl.mzstatic.com/image/thumb/Podcasts123/v4/f8/e2/63/f8e263a6-e723-64d8-6891-b40f7424a852/mza_4487244322136666269.jpg/170x170bb.png",
  picture: "https://is4-ssl.mzstatic.com/image/thumb/Podcasts123/v4/f8/e2/63/f8e263a6-e723-64d8-6891-b40f7424a852/mza_4487244322136666269.jpg/60x60bb.png",
  artist: "50 Years of Hip-Hop",
  author: "KEXP",
  idx: 99,
  link: "https://podcasts.apple.com/us/podcast/50-years-of-hip-hop/id1667648172?uo=2"
}
test('test the ButtonTestting render', () => {
  const { name, comment, image, picture, artist, author, idx, link } = dataMocked;
  render(
    <Card name={name}
      comment={comment}
      image={image}
      link={link}
      picture={picture}
      idx={idx}
      artist={artist}
      author={author} />

  );
  const podcast = screen.getByText("50 YEARS OF HIP-HO");
  expect(podcast).toBeInTheDocument();
  const Artist = screen.getByText("Author: KEXP");
  expect(Artist).toBeInTheDocument();
  const testImage = document.querySelector("img") as HTMLImageElement;
  expect(testImage.alt).toContain("itunespic");
});
