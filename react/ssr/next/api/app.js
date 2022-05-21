import express from "express";
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.static('public'));

const url = "http://localhost:3005";

const videos = [
  {
    id: "1",
    title:
      "It's an Event-Sized Episode of 'Marvel Presents: The World's Greatest Book Club with Paul Scheer' in Celebration of 'Empyre'",
    sub:
      "Paul Scheer and Steve Wacker are joined by Anthony Carboni of 'The Star Wars Show'!",
    author: "JAMIE FREVELE",
    publish: "2050-05-26",
    content:
      "<p>Time for a new episode of Marvel Presents: The World's Greatest Book Club with Paul Scheer -- and this one, Marvelites, is super-sized! Why? Because there's a new Marvel comic event in our midst, and EMPYRE deserves no less than a big celebration with hosts Paul Scheer and Steve Wacker! Paul and Steve are joined by guest Anthony Carboni (The Star Wars Show) for a calamitous conversation about other notable Marvel events.</p><video controls src='"+url+"/api/videos/1.mp4'></video><p>But first -- EMPYRE! Steve provided an inside look at the creation of the intergalactic conflict and what Marvel fans can expect:</p><p>“What [writers Al Ewing and Dan Slott] definitely wanted to get away from was making it a [Fantastic Four] versus the Avengers, yet another story where friends fight each other and try to kill each other. Much like this show.”</p><p>He went on to predict the lasting effects of EMPYRE on the Marvel Universe:</p><p>“There are some big changes coming, and I think when we’re in our sweet spot is when we at Marvel are a little nervous about how the fans are going to react. It’s our job to put them through the ringer, to put them through hell. I think EMPYRE is not the story at the beginning that you think it is.”</p>"
  },
  {
    id: "2",
    title: "Time Travel Tips from 'Marvel's Agents of S.H.I.E.L.D.'",
    sub:
      "Traveling back in time is never easy? Let us help by consulting the pros!",
    author: "CHRISTINE DINH",
    publish: "2050-03-13",
    content:
      "<img src='"+url+"/api/images/detail_2.jpg'/><p>Look, we all know hopping through the decades ain't easy. In fact, who can keep up with all the different rules of time travel.</p><video controls src='"+url+"/api/videos/2.mp4'></video><p>Luckily, we know a bunch of experts. During the production of Marvel's Agents of S.H.I.E.L.D. Season 7, Marvel.com had the opportunity to consult the cast and showrunners how to remain composure while navigating time travel. Watch what they have to say, learn the Do's and Don't's, and word of advice, it's probably best to avoid the shenanigans of Deke Shaw. We haven't forgotten the events of Season 6, Deke 👀.</p>"
  },
  {
    id: "3",
    title:
      "The Next Shocking Chapter in Donny Cates and Ryan Stegman's Venom Saga Revealed",
    sub: "'King in Black' conquers the Marvel Universe this December!",
    author: "MARVEL",
    publish: "2060-08-30",
    content:
      "<p>This December, the entire Marvel Universe braces itself for KING IN BLACK, the latest installment in writer Donny Cates and artist Ryan Stegman’s revolutionary take on the Venom mythos. Knull is coming, and when he arrives, everyone from the Avengers to the X-Men will learn just how unprepared they are to face off against the God of the Symbiotes. Everything in Cates and Stegman’s landmark run on VENOM has led up to this monumental story, and readers will finally witness Eddie Brock’s climatic standoff with one of Marvel’s most terrifying villains.</p><video controls src='"+url+"/api/videos/3.mp4'></video><img src='"+url+"/api/images/detail_3.jpg'/><p>With each mind-bending twist and turn, the stakes will be raised like never before as KING IN BLACK flips everything you thought you knew about Venom and the world of the symbiotes upside down and inside out. Learn more in the special video announcement from the mastermind creative team, and stay tuned for more news about what to expect when KING IN BLACK lands later this year!</p>"
  },
  {
    id: "4",
    title:
      "Livestream: Let's Play LIVE: Fortnite Featuring the Captain America Outfit",
    sub: "Follow along LIVE TODAY at 1pm PT / 4pm ET!",
    author: "MARVEL",
    publish: "2050-09-05",
    content:
      "<p>Tune in to Marvel's Official Twitch Channel at 4:00 PM ET (1:00 PM PT) today to join Marvel host Josh Saleh as he channels the First Avenger – Captain America – who made his debut on Fortnite last week!</p><p>Follow along with Josh, and be sure to grab the Captain America Outfit in the Item Shop. Armed with his indestructible shield and iron will, Super-Soldier Steve Rogers won’t give up until the mission is finished.</p><video controls src='"+url+"/api/videos/4.mp4'></video><p>Want to stay on top of everything in the Marvel Universe? Follow Marvel on social media—Twitter, Facebook, and Instagram—and keep watching Marvel.com for more news!</p>"
  },
  {
    id: "5",
    title: "Celebrate Ultraman Day with a Sneak Peek at 'Rise of Ultraman #1'",
    sub: "Happy Ultraman Day!",
    author: "MARVEL",
    publish: "2080-09-28",
    content:
      "<p>Ultraman has been a pop culture icon for over 50 years and this September, Marvel Comics will proudly contribute to the franchise’s incredible legacy with RISE OF ULTRAMAN #1!</p><p>Writers Kyle Higgins (Mighty Morphin Power Rangers, Winter Soldier) and Mat Groom (Self/Made) will join superstar artists Francesco Manna (Avengers, Fantastic Four) Michael Cho (Captain America) and Gurihiru (The Unstoppable Wasp) to reimagine the thrilling beginnings of the Ultraman phenomenon.</p><p>In honor of Ultraman Day, the celebration of Ultraman’s first public television appearance in 1966, check out a first look at the highly anticipated premiere issue including exclusive preview pages, a variant cover gallery, and more below!</p><img src='"+url+"/api/images/detail_5.jpg'/><p>Stay tuned for more news about Marvel’s exciting collaboration with Tsuburaya Productions and don’t miss THE RISE OF ULTRAMAN #1 when it hits stands September 9th!</p>"
  },
  {
    id: "6",
    title: "Marvel Mission Recap: Captain Marvel’s Star of Hala",
    sub: "The results are out of this world!",
    author: "RACHEL PAIGE",
    publish: "2046-05-23",
    content:
      "<p>Congrats agents — it appears that many of you successfully completed the latest Marvel Mission!</p><img src='"+url+"/api/images/detail_6.jpg'/><p>Tasked to bring Captain Marvel’s Star of Hala to life using only safe household products and materials, the results we saw were outstanding and would make Carol Danvers and the Carol Corps proud!</p><p>While it was tough to narrow down all the submissions we received, we’ve rounded up some of our favorites that we saw across social media. Take a look at the post below, and though this Marvel Mission might be closed, there’s always time to make a star for yourself! </p>"
  },
  {
    id: "7",
    title: "Make Your Video Calls Worthy With These Backgrounds",
    sub: "Video call backgrounds, assemble!",
    author: "RACHEL PAIGE",
    publish: "2028-12-25",
    content:
      "<p>Hey Marvel Insiders – did you know reading this article could earn you 250 points? All you need to do is sign in or join now before you keep reading!</p><p>Taking a video call in your living space with your regular home background is typical, mundane, and not at all dangerous. </p><p>But taking a video call with an Avengers approved background is exciting, heroic, and will definitely make your co-workers think you’re working from Asgard.</p><p>As more and more communication for work, fun, and play happens over our computer screens, we’ve assembled some video call backgrounds that you can use. Taking some of the Marvel Cinematic Universe's most iconic locations, have fun swapping out the backdrop of your kitchen for a sweeping landscape of Wakanda.  Check out the backgrounds you can download below! </p><img src='"+url+"/api/images/detail_7_1.jpg'/><img src='"+url+"/api/images/detail_7_2.jpg'/><p>To download the images: Right-click on the selected background of your choice and select SAVE IMAGE AS. The image will download to your desktop and you can insert it into the video conferencing program of your choice. Enjoy! </p><p>By downloading the images you agree to be bound by the terms located here.</p><p>Want to stay on top of everything in the Marvel Universe? Follow Marvel on social media—Twitter, Facebook, and Instagram—and keep watching Marvel.com for more news!</p>"
  },
  {
    id: "8",
    title:
      "Everything We Saw During the First 'Marvel’s Avengers' WAR TABLE Livestream",
    sub: "Get ready to Embrace Your Powers on September 4!",
    author: "CHRISTINE DINH",
    publish: "2048-05-10",
    content:
      "<p>Marvel Games, Square Enix, and Crystal Dynamics launched the very first Marvel’s Avengers WAR TABLE stream today. The Marvel’s Avengers WAR TABLE, which will be a monthly offering, gives players an in-depth look at many different aspects of the highly-anticipated game before it launches on September 4.</p><p>Opening up the Marvel’s Avengers WAR TABLE was the release of the brand-new story trailer narrated by the game’s central villain, Dr. George Tarleton. Tarleton joins the previously announced Taskmaster as another antagonist in the Avengers’ story.</p><p>Opening up the Marvel’s Avengers WAR TABLE was the release of the brand-new story trailer narrated by the game’s central villain, Dr. George Tarleton. Tarleton joins the previously announced Taskmaster as another antagonist in the Avengers’ story.</p><p>Marvel fans will recognize that Tarleton is none other than MODOK (Mental Organism Designed Only for Killing) – the artificially-mutated, super intelligent founder of AIM (Advanced Idea Mechanics). The story behind how Tarleton becomes MODOK is central to the game and one we’re eager to hear more about along with who voiced the deadly villain!</p><p>MODOK believes in AIM’s mission – fixing the damage the Avengers did, all those years ago on A-Day, by instilling order, ruling by science, and creating boundaries on what he reveals as the true threat to this world – the Inhumans disease. Taking his mission to the extreme, MODOK aims to rid the Earth of superpowers seeing it as a force that cannot be controlled or contained!</p><p>The Hero Missions allow Marvel’s Avengers to reveal more of each hero’s story, showcasing a variety of their narrative and backstory. Each hero has 3 iconic heroic moves: Assault, Ultimate, and Support. Learn more about these heroic moves and attacks for the Avengers by rewatching the Marvel’s Avengers WAR TABLE at the top of the article.</p>"
  },
  {
    id: "9",
    title:
      "Marvel At Home: Here’s How to Stay Connected With Your Favorite Super Heroes",
    sub: "Here's everything that's happening at the House of Ideas for fans!",
    author: "RACHEL PAIGE",
    publish: "2082-06-25",
    content:
      "<p>We’re constantly dreaming up new ways to connect with readers, viewers, and fans at the House of Ideas and now, with everyone spending more time at home than ever, there are even more ways to bring Marvel into your home — wherever your home might be! </p><img src='"+url+"/api/images/detail_9.jpg'/><p>Over the past month, we’ve worked to bring fans a chance to escape within the Marvel Universe, and if you haven’t already, there are so many ways to experience #MarvelAtHome. Whether you’re spending the day working, entertaining family members, or catching up on reading (or watching), here are some of the ways we’re keeping you connected to your favorite Super Heroes.</p><p>Wondering what it takes to bring Marvel characters to life on the page? Well, first you have to start with pencils and paper and the pros will show you what to do next! Follow along as we learn how to draw iconic characters like Spider-Man, Groot, and Wolverine and stay tuned to see who’s next!</p>"
  }
];

// 轮播图
app.get("/api/swiper", (req, res) => {
  res.send([
    {
      id: 1,
      title: "Event-Sized Episode!",
      description:
        "Paul Scheer and Steve Wacker are joined by Anthony Carboni of 'The Star Wars Show' for an event sized episode!",
      url: `${url}/api/images/api_swiper_1.jpg`,
      vid: 1
    },
    {
      id: 2,
      title: "Time Travel Tips",
      description:
        "Traveling back in time is never easy? Let us help by consulting the pros!",
      url: `${url}/api/images/api_swiper_2.jpg`,
      vid: 2
    },
    {
      id: 3,
      title: "KING IN BLACK",
      description:
        "The next shocking chapter in Donny Cates and Ryan Stegman's Venom Saga is revealed!",
      url: `${url}/api/images/api_swiper_3.jpg`,
      vid: 3
    },
    {
      id: 4,
      title: "LET'S PLAY FORTNITE",
      description:
        "Watch as we stream the brand new Captain America outfit in Fortnite!",
      url: `${url}/api/images/api_swiper_4.jpg`,
      vid: 4
    },
    {
      id: 5,
      title: "HAPPY ULTRAMAN DAY!",
      description:
        "Celebrate by getting a sneak peek at 'Rise of Ultraman #1'!",
      url: `${url}/api/images/api_swiper_5.jpg`,
      vid: 5
    }
  ]);
});

// 电影列表
app.get("/api/movie", (req, res) => {
  res.send([
    {
      id: 1,
      vid: 6,
      url: `${url}/api/images/api_movie_1.jpg`,
      title: "Marvel Mission Recap: Captain Marvel’s Star of Hala"
    },
    {
      id: 2,
      vid: 7,
      url: `${url}/api/images/api_movie_2.jpg`,
      title: "Make Your Video Calls Worthy With These Backgrounds"
    },
    {
      id: 3,
      vid: 8,
      url: `${url}/api/images/api_movie_3.jpg`,
      title: "Make Your Video Calls Worthy With These Backgrounds"
    },
    {
      id: 4,
      vid: 9,
      url: `${url}/api/images/api_movie_4.jpg`,
      title:
        "Marvel At Home: Here’s How to Stay Connected With Your Favorite Super Heroes"
    }
  ]);
});

// 电影详情
app.get("/api/detail", (req, res) => {
  const id = req.query.id;
  const result = videos.find(video => video.id === id);
  res.send(result);
});

// 获取电影id集合
app.get('/api/videos', (req, res) => {
  res.send(videos.map(video => video.id));
});

app.listen(3005, () => console.log("app is running on port 3005"));
