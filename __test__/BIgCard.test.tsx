import Card from "../components/card";
import { render, screen } from "@testing-library/react";
import BigCard from "@/components/common/bigCard";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

const dataMocked = {
    image: "https://is2-ssl.mzstatic.com/image/thumb/Podcasts112/v4/cd/82/0c/cd820cfe-fce5-56aa-ef2c-da67576fd4b3/mza_3363134633883714623.jpeg/170x170bb.png",
    artist: "Back on Figg",
    author: "T-Rell B.O",
    comment: "Back on Figg Youtube Live Stream. Hosted by T-Rell and Smacc"
}
test("test the BigCard render", () => {
    const {
      image,
      artist,
      author,
      comment,
    } = dataMocked;
    render(
        <BigCard
        image={image}
        artist={artist}
        author={author}
        comment={
          comment
        }
      />
    );
    const Artist = screen.getByText("Back on Figg");
    expect(Artist).toBeInTheDocument();
    const comments = screen.getByText("Back on Figg Youtube Live Stream. Hosted by T-Rell and Smacc...");
    expect(comments).toBeInTheDocument();
    const testImage = document.querySelector("img") as HTMLImageElement;
    expect(testImage.alt).toContain("https://is2-ssl.mzstatic.com/image/thumb/Podcasts112/v4/cd/82/0c/cd820cfe-fce5-56aa-ef2c-da67576fd4b3/mza_3363134633883714623.jpeg/170x170bb.pn");
  });