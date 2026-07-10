export type Show = {
  date: string;
  time?: string;
  venue: string;
  city?: string;
  /** Google Maps destination for the Directions button. Omit for private events. */
  address?: string;
};

// Live dates as provided by Paul. Only what he gives us — no invented ticket
// links. `address` powers a Google Maps directions link; a venue+city query is
// fine (Maps resolves it), don't invent street addresses.
//
// Keep this list current: drop dates once they've passed.
export const upcomingShows: Show[] = [
  {
    date: "Sat, August 1",
    time: "8:00 – 11:00 PM",
    venue: "Grindstone Tap House",
    city: "Berea, OH",
    address: "Grindstone Tap House, Berea, OH",
  },
  {
    date: "Tue, August 4",
    venue: "Private Event",
  },
];
