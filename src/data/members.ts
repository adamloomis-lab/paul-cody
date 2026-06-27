// The Erie Riders — players and contributors on the New Beginning album.
// Transcribed from the band's current roster copy (2026-06). Portraits come
// from the Duda site's member photos (mountain-sunset background set).

export type MemberLink = { label: string; url: string };
export type Member = {
  name: string;
  photo?: string;
  role: string;
  bio: string;
  links?: MemberLink[];
};

export const players: Member[] = [
  {
    name: "Tom Prebish",
    photo: "/images/member-tom-prebish.webp",
    role: "Bass",
    bio: "Considered a bass stalwart of the Northeast Ohio music scene, with over 35 years of live and studio experience since the age of 15. He is the bassist and a co-writer on Country Honk band's latest album.",
    links: [{ label: "Country Honk", url: "http://www.countryhonkmusic.com" }],
  },
  {
    name: "Freddy Perez",
    photo: "/images/member-freddy-perez.webp",
    role: "Drums",
    bio: "Freddy is a staple of the Northeast Ohio music scene, with over 35 years of live and studio experience, starting at the age of 15. He serves as the drummer and co-writer on Country Honk's latest album.",
    links: [{ label: "Country Honk", url: "https://countryhonkmusic.com" }],
  },
  {
    name: "Trevor Matthews",
    photo: "/images/member-trevor-matthews.webp",
    role: "Lead Guitar",
    bio: "Trevor has played lead guitar live, in studio, and performed in off-Broadway theater for over two decades, and has been touring regularly throughout the Midwest and South in Blue Hour.",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/trevor_matthews_guitar" },
      { label: "Blue Hour", url: "https://www.bluehour.band" },
    ],
  },
  {
    name: "Sherena Wynn",
    photo: "/images/member-sherena-wynn.webp",
    role: "Vocals",
    bio: "Sherena has performed with acclaimed celebrity artists like the late Gerald Levert, Patti LaBelle, and Angie Stone, at major venues throughout the world including the Apollo Theater in New York City, Constitution Hall in DC, and Universal Studios Amphitheater in Hollywood. She has appeared on the David Letterman Show, the Tonight Show with Jay Leno, the Arsenio Hall Show, and the Lou Rawls Parade of Stars. An accomplished arranger, writer, vocal coach, and producer as well as a vocalist, Sherena has collaborated on songs originated for Whitney Houston, The O'Jays, Deborah Cox, Tyrese, Joe, Next, D'Angelo, Angie Stone, and many others. Her music is a reflection of her, a mixture of inspirational, jazz, and hip-hop. She added her silky-smooth voice to “A Song for Jesus (He Lifts Me Up).”",
    links: [
      { label: "Bio", url: "https://nfrontmusic.com/bios/sherena-wynn" },
      { label: "Facebook", url: "https://www.facebook.com/Songbird0214" },
      { label: "Facebook (personal)", url: "https://www.facebook.com/sherena.wynn" },
    ],
  },
  {
    name: "Dennis Veverka",
    photo: "/images/member-dennis-veverka.webp",
    role: "Harmonica & Percussion",
    bio: "Dennis has played harmonica and percussion in countless live bands from bluegrass to blues throughout Northeast Ohio for more than 40 years, as well as contributing to studio recordings. A member of the Cleveland Blues Society, he currently performs in the duo Front Porch Jammin at fairs, festivals, wineries, breweries, and private events.",
    links: [{ label: "Front Porch Jammin", url: "https://www.facebook.com/groups/523759039397403/" }],
  },
  {
    name: "Cheryl",
    photo: "/images/member-cheryl.webp",
    role: "Vocals",
    bio: "Cheryl graduated from the Berklee College of Music and spent seven years as a singer-songwriter in Nashville. She sings and creates her songs on guitar and piano, and added her beautiful voice, both alto and soprano parts, to the song “I Believe.”",
  },
  {
    name: "Josee McGee",
    photo: "/images/member-josee-mcgee.webp",
    role: "Vocals",
    bio: "Josee McGee is a singer-songwriter and performer in the Northeast Ohio region who recently released the album Weeper, available on all streaming sites. She was raised in a musical family. Everyone sang, and her step-grandpa was a musical director, composer, and band leader. Most nights of the week you can hear her singing her own material as well as artists like Fleetwood Mac, Carole King, Alicia Keys, and The Beatles. Her original music is a unique blend of soul, jazz, and pop. She sang on the duet “Already Are” as well as all of its alto and soprano harmonies.",
    links: [{ label: "joseemcgee.com", url: "https://www.joseemcgee.com" }],
  },
  {
    name: "Leanne Carrie Trost",
    photo: "/images/member-leanne-trost.webp",
    role: "Violin & Vocals",
    bio: "Teaching violin, playing live, and recording for over 30 years, Leanne not only adds her strings but her vocals to this release, and is currently playing with several Ohio bands including Lela Blue and the Black River Band. You can hear her violin on “It Comes and Goes” and “For a Little While,” and her voice on “Angel in Las Vegas” and “It Comes and Goes.”",
    links: [
      { label: "Lela Blue", url: "https://lelablue.com" },
      { label: "Black River Band", url: "https://www.facebook.com/BlackRiverOhio" },
    ],
  },
  {
    name: "Bob Gerhard",
    photo: "/images/member-bob-gerhard.webp",
    role: "Keyboards",
    bio: "Bob has been one of Northeast Ohio's premier keyboardists for over 30 years in both original and cover projects, including the renowned Wish You Were Here Pink Floyd tribute band and Into the Blue, a Grateful Dead cover band. He played keyboards on Paul's Paul and the Wish album 25 years ago as well! For this album he added organ parts, an orchestral string section and cello parts, as well as steel drum sounds.",
    links: [
      { label: "Floyd Tribute", url: "https://www.floydtribute.com" },
      { label: "Into the Blue", url: "https://www.facebook.com/ITBGDR" },
    ],
  },
  {
    name: "Moss",
    photo: "/images/member-moss.webp",
    role: "Piano / Keyboards",
    bio: "Moss is one of the Midwest's premier piano and keyboard players and hails from London, England. He discovered his talents as a child, able to play whatever he heard without music or formal training, and made the USA his home at age 19, arriving with just a few articles of clothing, his incredible ear for music, and his magical fingers. In the early 1980s he formed one of Cleveland's top society bands, Nitebridge, which he still leads. He has also been a musical director for Broadway musicals and has performed with superstars such as Martha Reeves, Spyro Gyra, Chuck Berry, Blood Sweat & Tears, and Robert Lockwood Jr.",
    links: [{ label: "Nitebridge", url: "https://nitebridgeband.com/schedule" }],
  },
  {
    name: "Tommy Amato",
    photo: "/images/member-tommy-amato.webp",
    role: "Drums",
    bio: "Legendary drummer Tommy Amato grew up playing drums in the clubs and studios of Cleveland before moving to Los Angeles in 1984 to further his career in the studio as well as touring. While in Los Angeles he worked with KISS, Doro Pesch, Silent Rage, Warrant, Lita Ford, Neil Giraldo, Billy Steinberg, Gene Simmons (RCA / Simmons Records), Vicky Peterson (The Bangles), Jennifer Rush, and many others, and is featured in numerous videos, television shows, and films as an actor. He plays live several nights a week with various trios and full bands like Freedom Highway. Surviving bouts with cancer in 2001 and 2003, Tommy founded the annual benefit concert The Cleveland Agora Tommy Amato Rock Relief in 2004 to fund one local musician in need, with concerts ever since.",
    links: [{ label: "Freedom Highway", url: "https://freedomhighway.net" }],
  },
  {
    name: "Chris Keffer",
    photo: "/images/member-chris-keffer.webp",
    role: "Producer / Engineer",
    bio: "Chris is the owner and Wizard of Magnetic North Studio in Beachwood, Ohio, celebrating his 40th year in business serving the Northeast Ohio media market. He wears many hats (audio engineer, music producer, mastering engineer, video producer) with over 900 album credits to date covering every genre of music, plus live albums, concerts, and TV/movie music filming. He has worked with internationally known artists and record labels as well as independent and self-financed artists, and his devotion to each artist is the same. He is also a father of two super cool sons and a self-proclaimed nerd. This album would not have been possible without his artistry as well as the players he brought that made this release so special.",
  },
];
