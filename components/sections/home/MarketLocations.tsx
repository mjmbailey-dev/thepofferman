import { MarketCard } from "./MarketCards";

const markets = [
  {
    name: "Prahran Market",
    days: "Tues, Thurs-Sun",
    time: "7am – 3pm",
    suburb: "Prahran",
    mapLink: "https://maps.google.com/?q=Prahran+Market",
  },
  {
    name: "The Corner Market",
    days: "21st September",
    time: "10am – 2:45pm",
    suburb: "Knox",
    mapLink: "https://maps.google.com/?q=The+Corner+Market+knox+ozone",
  },
];

export default function MarketLocations(){
    return(
        <section className="w-full bg-background-3 h-auto flex justify-center py-10 md:py-15 text-on-dark">
            <div className="max-w-7xl mx-10 mt-10 w-full">
                <h2 className="text-center">Find Us?</h2>
                <div className="flex flex-col w-full gap-5 mt-10">
                    {markets.map((m) => (
                        <MarketCard
                        key={m.name}
                        {...m}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}