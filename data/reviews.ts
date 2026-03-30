export type Review = {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
  avatarInitial: string;
};

/** Fifteen curated 5-star reviews — static data, no external API. */
export const reviews: Review[] = [
  {
    id: 1,
    name: "Mark",
    rating: 5,
    text: "Best biker place in Dubrovnik. Incredible atmosphere, amazing bikes, and the perfect stop after a coastal ride.",
    date: "2 weeks ago",
    avatarInitial: "M",
  },
  {
    id: 2,
    name: "Sandra V.",
    rating: 5,
    text: "Felt like a premium garage with soul. Espresso hits hard, staff treats riders like family. We’ll be back on every tour.",
    date: "1 month ago",
    avatarInitial: "S",
  },
  {
    id: 3,
    name: "Tomislav",
    rating: 5,
    text: "Local rider here — finally a spot that gets the culture. Great terrace, cold beer, and serious respect for the machines.",
    date: "3 weeks ago",
    avatarInitial: "T",
  },
  {
    id: 4,
    name: "Elaine & Rob",
    rating: 5,
    text: "Rented bikes nearby and stumbled in. The vibe is cinematic: dark leather energy, orange glow, and the Adriatic just minutes away.",
    date: "5 days ago",
    avatarInitial: "E",
  },
  {
    id: 5,
    name: "Giulia",
    rating: 5,
    text: "Drove down from Italy. This is the postcard biker cafe—chrome, stories, and sunset light over Old Town.",
    date: "2 months ago",
    avatarInitial: "G",
  },
  {
    id: 6,
    name: "Henrik",
    rating: 5,
    text: "Harley owner from Sweden. Flawless stop: secure feeling, clean space, and they know their coffee. Five stars without doubt.",
    date: "1 week ago",
    avatarInitial: "H",
  },
  {
    id: 7,
    name: "Marija K.",
    rating: 5,
    text: "Not just for bikers—my friends loved the aesthetic—but for us riders it’s home. See you every weekend.",
    date: "4 days ago",
    avatarInitial: "M",
  },
  {
    id: 8,
    name: "James P.",
    rating: 5,
    text: "Touring the Balkans; this was our highlight stop in Croatia. Directions easy, crowd welcoming, music on point.",
    date: "3 months ago",
    avatarInitial: "J",
  },
  {
    id: 9,
    name: "Ana",
    rating: 5,
    text: "The kind of place you photograph and still don’t capture the feel. Mechanical, moody, memorable.",
    date: "6 weeks ago",
    avatarInitial: "A",
  },
  {
    id: 10,
    name: "Lukas",
    rating: 5,
    text: "Sportbike, cruiser, doesn’t matter—everyone rolls out smiling. Staff remembers your name. Rare find.",
    date: "2 weeks ago",
    avatarInitial: "L",
  },
  {
    id: 11,
    name: "Charlotte",
    rating: 5,
    text: "Found via friends on Instagram. Delivered on hype: premium atmosphere without attitude. Dubrovnik needs this energy.",
    date: "5 months ago",
    avatarInitial: "C",
  },
  {
    id: 12,
    name: "Damir",
    rating: 5,
    text: "Old Town view, new-school hospitality. Cold drinks after a run along the coast—exactly what the road ordered.",
    date: "Yesterday",
    avatarInitial: "D",
  },
  {
    id: 13,
    name: "The Vienna Crew",
    rating: 5,
    text: "Eight of us on a road trip. They handled the chaos like pros. Legendary evening, already planning a return.",
    date: "1 month ago",
    avatarInitial: "V",
  },
  {
    id: 14,
    name: "Isabella",
    rating: 5,
    text: "I don’t ride yet—I came for the vibe. Left with goosebumps and a list of routes to try. Inspiring space.",
    date: "2 weeks ago",
    avatarInitial: "I",
  },
  {
    id: 15,
    name: "Nikola",
    rating: 5,
    text: "Pure class. Orange accents, matte black finishes, and the hum of conversations about roads I want to ride.",
    date: "3 days ago",
    avatarInitial: "N",
  },
];
