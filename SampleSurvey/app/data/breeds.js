var breeds = [
  { // 1
    name: "Airedale Terrier",
    photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13001924/Airedale-Terrier-On-White-03.jpg",
    scores: [
      "2", // mid-size dog, mid-size house
      "2", // mid-weight, can play in small yard
      "3", // great with kids, can provide moderate protection for a family
      "3",
      true
    ],
    about: "His size, strength, and unflagging spirit have earned the Airedale Terrier the nickname “The King of Terriers.” The Airedale stands among the world’s most versatile dog breeds and has distinguished himself as hunter, athlete, and companion.",
    temperment: "Friendly, Clever, Courageous"
  },
  { // 2
    name: "Akita",
    photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13001904/Akita-On-White-01.jpg",
    scores: [
      "2",
      "3", // heavy-weight, should have a big yard
      "1", // great with children, protector of families
      "3",
      false
    ],
    about: "Akita is muscular, double-coated dogs of ancient Japanese lineage famous for her dignity, courage, and loyalty. In her native land, she's venerated as family protectors and symbols of good health, happiness, and long life.",
    temperment: "Courageous, Dignified, Profoundly Loyal"
  },
  { // 3
    name: "American Staffordshire Terrier",
    photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/07172037/AmStaff.06.jpg",
    scores: [
      "2",
      "3", // muscular and high energy
      "3", // loyal and protective, but best with older family members
      "2",
      false
    ],
    about: "The American Staffordshire Terrier, known to their fans as AmStaffs, are smart, confident, good-natured companions. Their courage is proverbial. A responsibly bred, well-socialized AmStaff is a loyal, trustworthy friend to the end.",
    temperment: "Confident, Smart, Good-Natured"
  },
  { // 4
    name: "Basset Hound",
    photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13001044/Basset-Hound-On-White-03.jpg",
    scores: [
      "1",
      "2",
      "3",
      "1",
      true
    ],
    about: "Among the most appealing of the AKC breeds, the endearing and instantly recognizable Basset Hound is a perennial favorite of dog lovers all over the world. This low-slung and low-key hound can be sometimes stubborn, but is always charming.",
    temperment: "Charming, Patient, Low-Key"
  },
  { // 5
    name: "Beagle",
    photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13000937/Beagle-On-White-07.jpg",
    scores: [
      "1",
      "1",
      "3",
      "2",
      true
    ],
    about: "Not only is the Beagle an excellent hunting dog and loyal companion, it is also happy-go-lucky, funny, and—thanks to its pleading expression—cute. They were bred to hunt in packs, so they enjoy company and are generally easygoing.",
    temperment: "Friendly, Curious, Merry"
  },
  { // 6
    name: "Bichon Frise",
    photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13000402/Bichon-Frise-On-White-03.jpg",
    scores: [
      "1",
      "1",
      "3",
      "3",
      true
    ],
    about: "The small but sturdy and resilient Bichon Frise stands among the world’s great “personality dogs.” Since antiquity, these irresistible canine comedians have relied on charm, beauty, and intelligence to weather history’s ups and downs.",
    temperment: "Playful, Curious, Peppy"
  },
  { // 7
    name: "Bloodhound",
    photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13000208/Bloodhound-On-White-01.jpg",
    scores: [
      "3",
      "2",
      "3",
      "3",
      true
    ],
    about: "The world famous “Sleuth Hound” does one thing better than any creature on earth: find people who are lost or hiding. An off-duty Bloodhound is among the canine kingdom’s most docile citizens, but he’s relentless and stubborn on scent. ",
    temperment: "Friendly, Independent, Inquisitive"
  },
  { // 8
    name: "Border Collie",
    photo: "",
    scores: [
      "2",
      "3",
      "3",
      "2",
      true
    ],
    about: "A remarkably bright workaholic, the Border Collie is an amazing dog—maybe a bit too amazing for owners without the time, energy, or means to keep it occupied. These energetic dogs will settle down for cuddle time when the workday is done.",
    temperment: "Affectionate, Smart, Energetic"
  },
  { // 9
    name: "Boston Terrier",
    photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12235803/Boston-Terrier-On-White-03.jpg",
    scores: [
      "1",
      "1",
      "3",
      "3",
      true
    ],
    about: "The Boston Terrier is a lively little companion recognized by his tight tuxedo jacket, sporty but compact body, and the friendly glow in his big, round eyes. His impeccable manners have earned him the nickname “The American Gentleman.”",
    temperment: "Friendly, Bright, Amusing"
  },
  { // 10
    name: "Boxer",
    photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12235639/Boxer-On-White-03.jpg",
    scores: [
      "2",
      "3",
      "3",
      "1",
      false
    ],
    about: "Loyalty, affection, intelligence, work ethic, and good looks: Boxers are the whole doggy package. Bright and alert, sometimes silly, but always courageous, the Boxer has been among America’s most popular dog breeds for a very long time.",
    temperment: "Bright, Fun-Loving, Active"
  },
  { // 11
    name: "Bulldog",
    photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/06014426/three-bulldogs.jpg",
    scores: [
      "1",
      "1",
      "1",
      "3",
      true
    ],
    about: "Kind but courageous, friendly but dignified, the Bulldog is a thick-set, low-slung, well-muscled bruiser whose “sourmug” face is the universal symbol of courage and tenacity. These docile, loyal companions adapt well to town or country.",
    temperment: "Friendly, Courageous, Calm"
  },
  { // 12
    name: "Cairn Terrier",
    photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12212231/Cairn-Terriers-on-White-01.jpg",
    scores: [
      "1",
      "1",
      "3",
      "1",
      true
    ],
    about: "Cairn Terriers are happy, busy little earthdogs originally bred to fearlessly root out foxes and other small, furred prey in the rocky Scottish countryside. Curious and alert, Cairns like having a place where they can explore and dig.",
    temperment: "Alert, Cheerful, Busy"
  },
  { // 13
    name: "Chihuahua",
    photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12213613/Chihuahua-onWhite-13.jpg",
    scores: [
      "1",
      "1",
      "1",
      "1",
      false
    ],
    about: "The Chihuahua is a tiny dog with a huge personality. A national symbol of Mexico, these alert and amusing 'purse dogs' stand among the oldest breeds of the Americas, with a lineage going back to the ancient kingdoms of pre-Columbian times.",
    temperment: "Charming, Graceful, Sassy"
  },
  { // 14
    name: "Chow Chow",
    photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12234523/Chow-Chow-On-White-01.jpg",
    scores: [
      "2",
      "1",
      "3",
      "2",
      true
    ],
    about: "The Chow Chow, an all-purpose dog of ancient China, presents the picture of a muscular, deep-chested aristocrat with an air of inscrutable timelessness. Dignified, serious-minded, and aloof, the Chow Chow is a breed of unique delights.",
    temperment: "Dignified, Bright, Serious-Minded"
  },
  { // 15
    name: "Cocker Spaniel",
    photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12213216/Cocker-Spaniel-on-White-13.jpg",
    scores: [
      "1",
      "1",
      "3",
      "3",
      true
    ],
    about: "The merry and frolicsome Cocker Spaniel, with his big, dreamy eyes and impish personality, is one of the world’s best-loved breeds. They were developed as hunting dogs, but Cockers gained their wide popularity as all-around companions.",
    temperment: "Gentle, Smart, Happy"
  }
  // { // 16
  //   name: "Collie",
  //   photo: "",
  //   scores: [

  //   ],
  //   about: "",
  //   temperment: ""
  // },
  // { // 17
  //   name: "Dachshund",
  //   photo: "",
  //   scores: [

  //   ],
  //   about: "",
  //   temperment: ""
  // },
  // { // 18
  //   name: "Dalmatian",
  //   photo: "",
  //   scores: [

  //   ],
  //   about: "",
  //   temperment: ""
  // },
  // { // 19
  //   name: "Doberman Pinscher",
  //   photo: "",
  //   scores: [

  //   ],
  //   about: "",
  //   temperment: ""
  // },
  // { // 20
  //   name: "English Foxhound",
  //   photo: "",
  //   scores: [

  //   ],
  //   about: "",
  //   temperment: ""
  // },
  // { // 21
  //   name: "French Bulldog",
  //   photo: "",
  //   scores: [

  //   ],
  //   about: "",
  //   temperment: ""
  // }
]

module.exports = breeds;