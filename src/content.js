// src/content.js
const content = {
  music: "/path-to-your-music.mp3", 
  
  menu: {
    title: "pick a gift",
    subtitle: "choose one to open ↓",
    items: [
      { id: "memories", icon: "📸", label: "Captured Memories" },
      { id: "video", icon: "🎬", label: "Our Video" },
      { id: "song", icon: "🎵", label: "our song" },
      { id: "letter", icon: "💌", label: "Love Letter" }
    ]
  },

  song: {
    audioSrc: "/music/music.mp3",
    remindsText: "this song always makes me think of you",
    songTitle: "our song",
    artist: "for you 🎵",
    highlight: "every lyric feels like us 💕",
    title: "our song",
    returnButton: "RETURN"
  },

  // استخدام علامات ` بدل "" يسمح لك بالنزول بالـ Enter مباشرة بدون \n
  letter: {
    title: "a letter",
    message: `كل سنه وانتي طيبه يا أجمل بنوته شوفتها و عقبال الميه سنه 🎈💝
بشوفك بتكبري سنه ورا سنه قدام عيني و كل مره بتحلي اكتر من الاول يا روحيييييي
اول مره شوفتك مكذبش وقعت في حبك ع طول…قلت هي دي الي هكمل معها ع طول و الكلام ده من سنتين او اكتر كمان 
ولحاد دلوقتي وانا واقع في حبك و كل يوم بيزيد عن الاول 🫂🩷
بحبك وربنا يخليكي ليا يا روحي و أشوفك مبسوطه ديما و أشوف ضحكت الحلوه على وشك ديما وانشاءالله نبقا احلى اتنين داكتره في جامعه باديا و نعيظ الناس كلها🤭 
بحبك اوي اوي 💞
`,

    signoff: "حبيبك",
    signature: "حمودي ♡",
    returnButton: "RETURN"
  },

  memories: {
    title: "our memories",
    images: [
      { src: "/images/placeholder-3.jpg", label: "" },
      { src: "/images/placeholder-4.jpg", label: "" },
      { src: "/images/placeholder-5.jpg", label: "" },
      { src: "/images/placeholder-6.jpg", label: "" }
    ],
    returnButton: "RETURN"
  },

  video: {
    title: "for you",
    videoSrc: "/videos/video.mp4", 
    caption: "a little something I put together",
    returnButton: "RETURN"
  }
};

export default content;