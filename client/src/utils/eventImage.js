import clubNight from "../assets/club-night.webp";
import roofTop from "../assets/roof-top.webp";
import allWhite from "../assets/all-white.webp";
import afterParty from "../assets/after-party.webp";

export default function setImage (event) {
    let image = event.imageUrl;

    if (!image) {
      switch (event.category){
          case "After Party":
            image = afterParty
          break;
          case "Club Night":
            image = clubNight
          break;
          case "All White Party":
            image = allWhite
          break;
          case "Rooftop":
            image = roofTop
          break;
        }
    }
 
    return image;

}