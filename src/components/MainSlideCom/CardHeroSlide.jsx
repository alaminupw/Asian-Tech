import headphone from "../../assets/images/headphone.png";
import watch from "../../assets/images/watch.png";

const CardHeroSlides = [
  {
    id: 1,
    badge: "🔥 Hot Deal In This Week",
    title:  (
      <div className="animated-title">
        <svg viewBox="13 0 500 120">
          <text x="0" y="30">
            <tspan x="0" dy="0">Smart Digital</tspan>
            <tspan x="0" dy="50" className="title-highlight">
              Watch
            </tspan>
          </text>
        </svg>
      </div>
    ),
    description: "Best smart watch for your daily lifestyle.",
    price: "$49.00",
    images: {
      big: watch,
      small: headphone, // same product small version (or another angle)
    },
  },
  {
    id: 2,
    badge: "🎧 New Arrival",
    title: (
      <div className="animated-title">
        <svg viewBox="13 0 500 120">
          <text x="0" y="30">
            <tspan x="0" dy="0">Roco Wireless</tspan>
            <tspan x="0" dy="50" className="title-highlight">
              Headphone
            </tspan>
          </text>
        </svg>
      </div>
     ),
    description: "Crystal clear sound & long battery life.",
    price: "$29.00",
    images: {
      big: headphone,
      small: watch,
    },
  },
];

export default CardHeroSlides;
