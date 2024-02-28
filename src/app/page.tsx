import Booking from "@/components/booking/Booking";
import Card, { CardInfo } from "@/components/card/Card";
import { ArticleProps } from "@/components/cardArticle/CardArticle";
import SectionContent from "@/components/sectionCards/SectionContent";
import SectionHeader from "@/components/sectionCards/SectionHeader";
import Slider from "@/components/slider/Slider";

const data: Array<CardInfo> = [
  {
    name: "London",
    date: "Apr 5-8",
    transfer: "Direct flight",
    time: "3h 15 min",
    company: "Flybe",
    price: 35,
  },
  {
    name: "Madrid",
    date: "Oct 5-8",
    transfer: "Direct flight",
    time: "3h 15 min",
    company: "JetBlue",
    price: 45,
  },
  {
    name: "Paris",
    date: "Apr 5-8",
    transfer: "Direct flight",
    time: "3h 15 min",
    company: "Lufthansa",
    price: 25,
  },
  {
    name: "Rome",
    date: "Oct 5-8",
    transfer: "Direct flight",
    time: "3h 15 min",
    company: "AirFrance",
    price: 55,
  },
];

const preArticle: Array<ArticleProps> = [
  {
    image: "apps",
    title: "Latest travel restrictions",
    text: "We provide information on the entry requirements for all countries so you can plan your flight smoothly",
  },
  {
    image: "apps",
    title: "Install our mobile app",
    text: "Our mobile app provides real-time information when you are at the airport",
  },
  {
    image: "apps",
    title: "The most beautiful destinations",
    text: "Have you ever considered visiting Easter Island or Alaska? These are the most unique destinations in 2022",
  },
  {
    image: "apps",
    title: "The most beautiful destinations",
    text: "Have you ever considered visiting Easter Island or Alaska? These are the most unique destinations in 2022",
  },
  {
    image: "apps",
    title: "The most beautiful destinations",
    text: "Have you ever considered visiting Easter Island or Alaska? These are the most unique destinations in 2022",
  },
];

export default function Home() {
  return (
    <div className="container_inner">
      <Booking />
      <SectionHeader
        title="Traveling from your location"
        subtitle="round trip - one passenger"
        link="Explore more destinations"
      />
      <SectionContent>
        {data.map((el, i) => (
          <Card key={i} data={el} />
        ))}
      </SectionContent>

      <SectionHeader title="Discover" />
      <Slider value={preArticle} />

      <SectionHeader
        title="Cheap flights selected for you"
        subtitle="4 routes in your area"
      />
      <SectionContent>
        {data.map((el, i) => (
          <Card key={i} data={el} discounted />
        ))}
      </SectionContent>
    </div>
  );
}
