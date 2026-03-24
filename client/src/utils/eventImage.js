import { EVENT_CATEGORIES } from "../config/env";

export default function setImage (event) {
    let image = event.imageUrl;

    if (!image) {
      switch (event.category){
          case EVENT_CATEGORIES.AFTER_PARTY:
            image = "https://res.cloudinary.com/dslzm3lo6/image/upload/v1774130862/events/ggaypoytofpntzeeuddr.jpg"
          break;
          case EVENT_CATEGORIES.CLUB_NIGHT:
            image ="https://res.cloudinary.com/dslzm3lo6/image/upload/v1774345298/club-night_rwixhp.jpg"
          break;
          case EVENT_CATEGORIES.ALL_WHITE_PARTY:
            image = "https://res.cloudinary.com/dslzm3lo6/image/upload/v1774127793/all-white_ptptvl.jpg"
          break;
          case EVENT_CATEGORIES.ROOFTOP:
            image = "https://res.cloudinary.com/dslzm3lo6/image/upload/v1774345361/rooftop_whjpqh.webp"
          break;
        }
    }
 
    return image;

}