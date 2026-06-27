export type Show = {
  date: string;
  time?: string;
  venue: string;
  city: string;
  address: string;
};

// Live dates as listed on the original site. Only venue/city/date/time exist —
// no ticket links in the source, so don't invent them. The address powers a
// Google Maps directions link.
//
// NOTE FOR ADAM: the original site also listed two past 2026 dates (Slim &
// Chubby's, Mar 26 and the Cuyahoga County Library showcase, Feb 26). Those are
// in the past, so they're omitted here. Add new confirmed dates as they come in.
export const upcomingShows: Show[] = [
  {
    date: "Sat, June 27",
    time: "6:00 - 9:00 PM",
    venue: "Red Wagon Farm",
    city: "Columbia Station, OH",
    address: "14554 W River Rd, Columbia Station, OH 44028",
  },
];
