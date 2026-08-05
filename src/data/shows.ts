export type Show = {
  /** ISO date (YYYY-MM-DD). Drives sorting and the upcoming/past split. */
  on: string;
  /** Display date, e.g. "Sat, August 15". */
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
// NOTHING GETS DELETED. Paul wants every show to stay on the page as a track
// record for venue owners. The Live page splits this list by `on` against
// today's date, so a show moves from "Upcoming" to "Previously played" on its
// own — no edit needed. Only remove a row if Paul asks.
export const shows: Show[] = [
  {
    on: "2026-02-26",
    date: "Thu, February 26",
    time: "6:00 – 7:00 PM",
    venue: "Cuyahoga County Public Library Artist Spotlight",
    city: "Parma Snow Auditorium, Parma, OH",
    address: "Parma Snow Branch Library, Parma, OH",
  },
  {
    on: "2026-03-26",
    date: "Thu, March 26",
    time: "7:30 – 8:00 PM",
    venue: "Slim & Chubby's",
    city: "Strongsville, OH",
    address: "Slim & Chubby's, Strongsville, OH",
  },
  {
    on: "2026-06-27",
    date: "Sat, June 27",
    time: "6:00 – 9:00 PM",
    venue: "Red Wagon Farm and Brewing Company",
    city: "Columbia Station, OH",
    address: "Red Wagon Farm, Columbia Station, OH",
  },
  {
    on: "2026-08-01",
    date: "Sat, August 1",
    time: "8:00 – 11:00 PM",
    venue: "Grindstone Tap House",
    city: "Berea, OH",
    address: "Grindstone Tap House, Berea, OH",
  },
  {
    on: "2026-08-04",
    date: "Tue, August 4",
    venue: "Private Event",
  },
  {
    on: "2026-08-15",
    date: "Sat, August 15",
    time: "8:00 PM – Midnight",
    venue: "Solid Gold Lounge",
    city: "Brookpark, OH",
    address: "Solid Gold Lounge, Brookpark, OH",
  },
  {
    on: "2026-10-16",
    date: "Fri, October 16",
    time: "8:00 – 11:00 PM",
    venue: "Grindstone Tap House",
    city: "Berea, OH",
    address: "Grindstone Tap House, Berea, OH",
  },
];

/** Local YYYY-MM-DD for "today" (avoids UTC shifting the date in US zones). */
function todayISO(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

/** Today's shows still count as upcoming until the day is over. */
export function splitShows(list: Show[] = shows) {
  const today = todayISO();
  const upcoming = list.filter((s) => s.on >= today).sort((a, b) => a.on.localeCompare(b.on));
  const past = list.filter((s) => s.on < today).sort((a, b) => b.on.localeCompare(a.on));
  return { upcoming, past };
}
