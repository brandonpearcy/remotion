import { random } from "remotion";

export type ShowcaseLink = "tutorial" | "source_code" | "website" | "video";

export type ShowcaseVideo = {
  title: string;
  description: string;
  height: number;
  width: number;
  links: {
    url: string;
    type: ShowcaseLink;
  }[];
  submittedOn: Date;
  type: "mux_video";
  muxId: string;
  author: {
    name: string;
    url: string;
  };
};

export const showcaseVideos: ShowcaseVideo[] = [
  {
    title: "Spotify Wrapped",
    type: "mux_video",
    muxId: "V5Dpfui9NmUSons5P5VQRbyX5m5011LsRA01f0129CLbHo",
    description:
      "A recreation of Spotify Wrapped where you can override all text and images programmatically.",
    height: 1280,
    width: 720,
    submittedOn: new Date("25-03-2021"),
    links: [
      {
        type: "source_code",
        url: "https://github.com/jonnyburger/remotion-wrapped",
      },
      {
        type: "video",
        url: "https://www.youtube.com/watch?v=I-y_5H9-3gk",
      },
    ],
    author: {
      name: "Jonny Burger",
      url: "https://twitter.com/JNYBGR",
    },
  },
  {
    title: "AnySticker In App Assets",
    type: "mux_video",
    muxId: "HL4G1x01aX8lizSXFGuQG8do6LLKcI1mup6WjIz6OEFE",
    description:
      "This video will welcome users in the newest version of AnySticker.",
    height: 1920,
    width: 1080,
    submittedOn: new Date("25-03-2021"),
    links: [
      {
        type: "source_code",
        url: "https://github.com/JonnyBurger/anysticker-tutorials",
      },
    ],
    author: {
      name: "Jonny Burger",
      url: "https://twitter.com/JNYBGR",
    },
  },
  {
    title: "Remotion Trailer",
    type: "mux_video",
    muxId: "nJ2JnX2a02JiDvirVoNrz02lJ01q8DuvIZoKKq8q1uPdKA",
    description: "The original trailer which announced Remotion.",
    width: 1920,
    height: 1080,
    submittedOn: new Date("25-03-2021"),
    links: [
      {
        type: "source_code",
        url: "https://github.com/JonnyBurger/remotion-trailer",
      },
      {
        type: "video",
        url: "https://www.youtube.com/watch?v=gwlDorikqgY",
      },
    ],
    author: {
      name: "Jonny Burger",
      url: "https://twitter.com/JNYBGR",
    },
  },
  {
    title: "VFB Crowdfunding Campaign",
    type: "mux_video",
    muxId: "L7DYDk9o701zxfWUhcFb1Z1mGGzYoIuxddwNVI3tcemQ",
    description:
      "An animation celebrating a successful fundraising campaign. It fetches the amount raised programmatically and generates an animation suitable for posting on Instagram.",
    width: 1080,
    height: 1920,
    submittedOn: new Date("25-03-2021"),
    links: [
      {
        type: "source_code",
        url: "https://github.com/florentpergoud/vfb-crowdfunding-campain",
      },
      {
        type: "video",
        url:
          "https://twitter.com/FlorentPergoud/status/1371874105281159178?s=20",
      },
    ],
    author: {
      name: "Florent Pergoud",
      url: "https://twitter.com/FlorentPergoud",
    },
  },
  {
    title: "Love, Death & React",
    type: "mux_video",
    muxId: "pEo7cREHlak5FxdpNOKB8BYlUCa19Klkfn1XtXxjfxc",
    description: "A recreation of Netflix's 'Love, Death & React' intro.",
    width: 1280,
    height: 720,
    submittedOn: new Date("29-05-2021"),
    links: [
      {
        type: "source_code",
        url: "https://github.com/wcandillon/love-death-react",
      },
      {
        type: "video",
        url: "https://www.youtube.com/watch?v=YtcINOj2w5g",
      },
      {
        type: "tutorial",
        url: "https://www.youtube.com/watch?v=YtcINOj2w5g",
      },
    ],
    author: {
      name: "Willian Candillon",
      url: "https://twitter.com/wcandillon",
    },
  },
  {
    title: "Music Player",
    type: "mux_video",
    muxId: "7NZ41UEioG00jZygP02NXji01wr7HE02R8m3puh19V8IlZw",
    description:
      "A music player visualization for teasing tracks on Instagram.",
    width: 720,
    height: 720,
    submittedOn: new Date("29-05-2021"),
    links: [
      {
        type: "website",
        url: "https://www.instagram.com/tripmusic.online/",
      },
      {
        type: "video",
        url: "https://twitter.com/kanzitelli/status/1398296728059666432",
      },
    ],
    author: {
      name: "Batyr",
      url: "https://twitter.com/kanzitelli",
    },
  },
  {
    title: "Crypto Prices",
    type: "mux_video",
    muxId: "fAhMmqHE5fQg9V7H2CwNj4buFC6JhLDfgaMI9OBpYhw",
    description:
      "Fully automated Twitter bot summarizing movements in the crypto market.",
    width: 720,
    height: 720,
    submittedOn: new Date("29-05-2021"),
    links: [
      {
        type: "website",
        url: "https://twitter.com/tokenviz",
      },
      {
        type: "video",
        url: "https://twitter.com/tokenviz/status/1391798812180508674",
      },
    ],
    author: {
      name: "Tokenviz",
      url: "https://twitter.com/tokenviz",
    },
  },
  {
    title: "Piano Teacher",
    type: "mux_video",
    muxId: "uuhPSi5C01DIIxBm3HcxJGs9d8hYmDnNjkmgwTMWJQPg",
    description:
      "A MIDI-to-Remotion converter visualizing how to play a song on the piano.",
    width: 1280,
    height: 720,
    submittedOn: new Date("29-05-2021"),
    links: [
      {
        type: "video",
        url: "https://twitter.com/FlorentPergoud/status/1388430389715292161",
      },
    ],
    author: {
      name: "Florent Pergoud",
      url: "https://twitter.com/FlorentPergoud",
    },
  },
  {
    title: "Vlog editor",
    type: "mux_video",
    muxId: "pSEhcZX5HBJy9SFK4j7vGs00NhPFCedqwL9X01ykNsIlo",
    description:
      "This daily vlog is automatically cut together using Remotion. Clips are recorded and uploaded to an FTP server, YouTube clips downloaded automatically.",
    width: 1280,
    height: 720,
    submittedOn: new Date("29-05-2021"),
    links: [
      {
        type: "video",
        url: "https://www.youtube.com/watch?v=CcrCz8iRpHY",
      },
      {
        type: "website",
        url: "https://www.youtube.com/channel/UCRylGayptCYAnrZfWTwuV7A",
      },
    ],
    author: {
      name: "Pierre Miniggio",
      url: "https://www.youtube.com/c/PierreMiniggio",
    },
  },
  {
    title: "Flow Fields",
    type: "mux_video",
    muxId: "st5ifZHHqs8k9m19FNqYyRdh01CM8pX302ikEzAvnikTA",
    description: "A generative SVG animation using noise.",
    width: 720,
    height: 720,
    submittedOn: new Date("29-05-2021"),
    links: [
      {
        type: "video",
        url: "https://twitter.com/noWukkas_/status/1386174689660203011",
      },
      {
        type: "source_code",
        url: "https://codesandbox.io/s/flow-fields-evqg3",
      },
    ],
    author: {
      name: "No Wukkas",
      url: "https://twitter.com/noWukkas_",
    },
  },
];

const dateString = (date: Date) =>
  date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();

const todayHash = dateString(new Date());

export const shuffledShowcaseVideos = showcaseVideos.sort((a, b) => {
  return random(a.muxId + todayHash) - random(b.muxId + todayHash);
});
