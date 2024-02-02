import Article from "@/components/cardArticle/CardArticle";
import Card, { CardInfo } from "@/components/card/Card";
import Section from "@/components/section/Section";
import CardArticle, {
  ArticleProps,
} from "@/components/cardArticle/CardArticle";

const data: Array<CardInfo> = [
  {
    name: "London",
    date: "Apr 5-8",
    transfer: "Direct flight",
    time: "3h 15 min",
    company: "company_1",
    price: 35,
  },
  {
    name: "Madrid",
    date: "Oct 5-8",
    transfer: "Direct flight",
    time: "3h 15 min",
    company: "company_2",
    price: 45,
  },
  {
    name: "Paris",
    date: "Apr 5-8",
    transfer: "Direct flight",
    time: "3h 15 min",
    company: "company_3",
    price: 25,
  },
  {
    name: "Rome",
    date: "Oct 5-8",
    transfer: "Direct flight",
    time: "3h 15 min",
    company: "company_4",
    price: 55,
  },
];

const preArticle: Array<ArticleProps> = [
  {
    image: "apps",
    title: "Install our mobile app",
    text: "Our mobile app provides real-time information when you are at the airport",
  },
];

export default function Home() {
  return (
    <>
      <div className="grow">
        <div className="container_inner">
          <Section
            className={{
              heading: "text-gray-900 font-medium",
              subHeading: "text-gray-700 flex justify-between mb-3",
              content: "grid grid-cols-2 gap-x-3 gap-y-4 mb-11",
              button: "text-blue-800 text-sm",
            }}
            title="Traveling from your location"
            subtitle="round trip - one passenger"
            button="Explore more destinations"
          >
            {data.map((el, i) => (
              <Card key={i} data={el} />
            ))}
          </Section>
          <Section
            className={{
              heading: "text-gray-900 font-medium",
              subHeading: "text-gray-700 flex justify-between mb-3",
              content: "grid grid-cols-2 gap-x-3 gap-y-4 mb-16",
              button: "text-blue-800 text-sm",
            }}
            title="Cheap flights selected for you"
            subtitle="4 routes in your area"
          >
            {data.map((el, i) => (
              <Card key={i} data={el} />
            ))}
          </Section>
        </div>
      </div>
      ;
    </>
  );
}
