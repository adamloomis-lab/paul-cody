// Real press/media features (URLs verified from the original site). Items
// without a stable public link (Apple News, Power Ace Radio podcast) are
// intentionally omitted rather than linked to a dead/unknown URL.
export type PressItem = { outlet: string; title: string; url: string };

export const press: PressItem[] = [
  {
    outlet: "iHeartRadio",
    title: "Interview with Paul Cody — The Culture News",
    url: "https://www.iheart.com/podcast/966-the-culture-news-28269772/episode/interview-with-paul-cody-the-315222076/",
  },
  {
    outlet: "Cleveland.com",
    title: "Strongsville singer-songwriter finds 'New Beginning' at local library",
    url: "https://www.cleveland.com/community/2026/01/strongsville-singersongwriter-finds-new-beginning-at-local-library-talk-of-the-towns.html",
  },
  {
    outlet: "Cuyahoga County Public Library",
    title: "Paul's Story and Making Music at the Library",
    url: "https://cuyahogalibrary.org/blog/pauls-story-and-making-music-at-the-library",
  },
  {
    outlet: "NOW Entertainment",
    title: "Paul Cody Raises a Toast to Life, Music, and Shared Moments on 'Raise a Glass'",
    url: "https://nowentertainment.net/paul-cody-raises-a-toast-to-life-music-and-shared-moments-on-raise-a-glass/",
  },
];
