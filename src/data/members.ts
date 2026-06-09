// The Erie Riders — players and contributors on the New Beginning album, plus
// the production team. Transcribed from the original /bio page. No per-member
// photos existed on the source, so cards are text + links only.

export type MemberLink = { label: string; url: string };
export type Member = {
  name: string;
  role: string;
  bio: string;
  links?: MemberLink[];
};

export const players: Member[] = [
  {
    name: "Tom Prebish",
    role: "Bass",
    bio: "Considered a bass stalwart of the Northeast Ohio music scene, with over 35 years of live and studio experience since the age of 15. He is the bassist and a co-writer on Country Honk band's latest album.",
    links: [{ label: "Country Honk", url: "http://www.countryhonkmusic.com" }],
  },
  {
    name: "Freddy Perez",
    role: "Drums",
    bio: "Freddy is a staple of the Northeast Ohio music scene, with over 35 years of live and studio experience, starting at the age of 15. He serves as the drummer and co-writer on Country Honk's latest album.",
    links: [{ label: "Country Honk", url: "https://countryhonkmusic.com" }],
  },
  {
    name: "Trevor Matthews",
    role: "Lead Guitar",
    bio: "Trevor has played lead guitar live, in studio, and performed in off-Broadway theater for over two decades, and tours regularly throughout the Midwest and South with Blue Hour.",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/trevor_matthews_guitar" },
      { label: "Blue Hour", url: "https://www.bluehour.band" },
    ],
  },
  {
    name: "Sherena Wynn",
    role: "Vocals",
    bio: "Sherena has performed with acclaimed artists like the late Gerald Levert, Patti LaBelle, and Angie Stone, at major venues worldwide including the Apollo Theater, Constitution Hall, and Universal Studios Amphitheater. She has appeared on the David Letterman Show, the Tonight Show with Jay Leno, the Arsenio Hall Show, and the Lou Rawls Parade of Stars. An accomplished arranger, writer, vocal coach, and producer, she added her silky-smooth voice to “A Song for Jesus (He Lifts Me Up).”",
    links: [
      { label: "Bio", url: "https://nfrontmusic.com/bios/sherena-wynn" },
      { label: "Facebook", url: "https://www.facebook.com/Songbird0214" },
    ],
  },
  {
    name: "Dennis Veverka",
    role: "Harmonica & Percussion",
    bio: "Dennis has played harmonica and percussion in countless live bands from bluegrass to blues throughout Northeast Ohio for more than 40 years, as well as on studio recordings. A member of the Cleveland Blues Society, he currently performs in the duo Front Porch Jammin at fairs, festivals, wineries, breweries, and private events.",
  },
  {
    name: "Cheryl",
    role: "Vocals",
    bio: "Cheryl graduated from the Berklee College of Music and spent seven years as a singer-songwriter in Nashville. She sings and writes on guitar and piano, and added her beautiful voice — both alto and soprano parts — to the song “I Believe.”",
  },
  {
    name: "Josee McGee",
    role: "Vocals",
    bio: "Josee McGee is a singer-songwriter and performer in Northeast Ohio who recently released the album Weeper, available on all streaming sites. Raised in a musical family, her talent was evident from an early age. Her original music is a unique blend of soul, jazz, and pop. She sang on the duet “Already Are” and all of its alto and soprano harmonies.",
    links: [{ label: "joseemcgee.com", url: "https://www.joseemcgee.com" }],
  },
  {
    name: "Leanne Carrie Trost",
    role: "Violin & Vocals",
    bio: "Teaching violin, playing live, and recording for over 30 years, Leanne adds both strings and vocals to this release, and currently plays with several Ohio bands including Lela Blue and Black River Band. You can hear her violin on “It Comes and Goes” and “For a Little While,” and her voice on “Angel in Las Vegas” and “It Comes and Goes.”",
    links: [
      { label: "Lela Blue", url: "https://lelablue.com" },
      { label: "Black River Band", url: "https://www.facebook.com/BlackRiverOhio" },
    ],
  },
  {
    name: "Bob Gerhard",
    role: "Keyboards",
    bio: "Bob has been one of Northeast Ohio's premier keyboardists for over 30 years in both original and cover projects, including the renowned Wish You Were Here Pink Floyd tribute band and Into the Blue, a Grateful Dead cover band. For this album he added organ, an orchestral string section, cello, and steel drum sounds.",
    links: [
      { label: "Floyd Tribute", url: "http://www.floydtribute.com" },
      { label: "Into the Blue", url: "https://www.facebook.com/ITBGDR" },
    ],
  },
  {
    name: "Moss",
    role: "Piano / Keyboards",
    bio: "Moss is one of the Midwest's premier piano and keyboard players, hailing from London, England. He discovered as a child that he could play whatever he heard without formal training. In the early 1980s he formed one of Cleveland's top society bands, Nitebridge, which he still leads. He has performed with Martha Reeves, Spyro Gyra, Chuck Berry, Blood Sweat & Tears, and Robert Lockwood Jr.",
    links: [{ label: "Nitebridge", url: "https://nitebridgeband.com/schedule/" }],
  },
  {
    name: "Tommy Amato",
    role: "Drums",
    bio: "Legendary drummer Tommy Amato grew up playing in the clubs and studios of Cleveland before moving to Los Angeles in 1984. There he worked with KISS, Doro Pesch, Warrant, Lita Ford, Neil Giraldo, Gene Simmons, Vicky Peterson (The Bangles), Jennifer Rush, and many others. A two-time cancer survivor, he founded the annual benefit concert The Cleveland Agora Tommy Amato Rock Relief in 2004. He performs regularly with Freedom Highway.",
    links: [{ label: "Freedom Highway", url: "https://freedomhighway.net" }],
  },
  {
    name: "Aimee Lennox",
    role: "Vocals",
    bio: "Aimee is a multi-year Northern Ohio Female Vocalist awardee and was chosen as Scene Magazine's 2024 Female Vocalist of the Year in Cleveland. She leads several live acts, performs as a soloist, and has appeared on numerous recordings over the last 30 years. Her current bands are Flashback CLE and Big Sky.",
    links: [{ label: "Flashback CLE", url: "https://www.facebook.com/search/top?q=flashback%20cle" }],
  },
];

export const production: Member[] = [
  {
    name: "Tony Nicholas",
    role: "Producer / Keyboards",
    bio: "Tony is a Grammy-nominated producer, songwriter, singer, and keyboardist. His work has helped artists like Gerald LeVert, Patti LaBelle, the Backstreet Boys, and Joe achieve Gold and multi-Platinum sales. He currently tours with the legendary O'Jays and is a highly sought-after keyboard player for live and studio work.",
  },
  {
    name: "Chris Keffer",
    role: "Producer / Engineer",
    bio: "Chris is the owner and wizard of Magnetic North Studio in Beachwood, Ohio, celebrating its 40th year in business. An audio engineer, music producer, mastering engineer, and video producer with over 900 album credits across every genre, his devotion to each artist is the same. This album would not have been possible without his artistry and the players he brought to the sessions.",
  },
];
