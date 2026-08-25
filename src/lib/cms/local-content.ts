import type { CmsContent } from "./types";

/**
 * Synthetic foundation content only. These values are intentionally obvious
 * placeholders so they cannot be mistaken for church-approved facts.
 */
export const localContent: CmsContent = {
  source: "local",
  settings: {
    name: "First Baptist Church of Laramie",
    shortName: "First Baptist",
    region: "Laramie, Wyoming",
    description: "First Baptist Church is a local Christian church in Laramie, Wyoming. Our mission is to share the good news of Christ’s love — in both word and deed.",
    footerDescription: "[SYNTHETIC FIXTURE — VERIFY BEFORE LAUNCH] Church description will be supplied by church leadership.",
    address: {
      street: "1517 Canby Street",
      locality: "Laramie",
      region: "WY",
      postalCode: "[ZIP TO BE CONFIRMED]",
      country: "US",
    },
    phoneDisplay: "[PHONE TO BE CONFIRMED]",
    phoneHref: "",
    email: "placeholder@example.invalid",
    services: [
      {
        label: "Sunday School",
        day: "Sunday",
        time: "[TIME TO BE CONFIRMED]",
        notes: "[VERIFY WHETHER THIS SERVICE IS CURRENT]",
      },
      {
        label: "Worship",
        day: "Sunday",
        time: "[TIME TO BE CONFIRMED]",
        notes: "[VERIFY WHETHER THIS SERVICE IS CURRENT]",
      },
    ],
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Laramie%2C%20Wyoming",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Laramie%2C%20Wyoming",
    socialLinks: [],
  },
  homepage: {
    title: "First Baptist Church of Laramie",
    description: "First Baptist Church is a local Christian church in Laramie, Wyoming, sharing the good news of Christ’s love — in both word and deed.",
  },
  visitPage: {
    title: "Plan Your Visit",
    description: "[SYNTHETIC FIXTURE — VERIFY BEFORE LAUNCH] Visit information will be confirmed by church leadership.",
  },
  aboutPage: {
    title: "About First Baptist Church",
    description: "Learn the story, beliefs, and values of First Baptist Church of Laramie.",
    mission: "Our mission is to share the good news of Christ’s love — in both word and deed.",
    history: [
      {
        heading: "1870: Founding on the Frontier",
        paragraphs: [
          "First Baptist Church of Laramie was established during the city’s earliest days, arriving alongside the Union Pacific Railroad in 1868. As Laramie grew from an open prairie into a bustling railroad hub, the early settlers sought a foundation of faith to steady their lives amidst the uncertainty of frontier life.",
          "In January 1870, a visiting Baptist superintendent organized local believers for worship, officially founding the church. By May, construction began on the congregation’s first building at Fourth Street and Grand Avenue on land granted by the Union Pacific Railroad. The sanctuary was dedicated in the fall of 1870 under the leadership of Rev. D. J. Pierce. Together with his wife, Marietta, Rev. Pierce also established the Wyoming Institute, marking the beginning of higher education in Laramie.",
        ],
      },
      {
        heading: "Resilience and Relocation",
        paragraphs: [
          "The original building served the community for over three decades until it was lost to a fire in 1904. Undeterred, the congregation rebuilt, and a new brick structure was completed in 1908 to continue the church’s downtown presence.",
          "As Laramie expanded throughout the 20th century, the congregation eventually transitioned to its current location at 1517 Canby Street, with the present facility being completed in the 1960s.",
        ],
      },
      {
        heading: "Continuing the Mission",
        paragraphs: [
          "For over 155 years, First Baptist Church has remained a constant presence in Laramie. Through relocations, fires, and generations of social change, we have remained committed to the simple mission of sharing Christ’s love in both word and deed.",
          "Today, under the leadership of Pastor Lummi Kaping, we continue to honor this heritage by prioritizing deep congregational fellowship and meaningful community connection. Our story is inseparable from the history of Laramie, and we remain dedicated to serving our city with the same faith and hope that shaped our very first days on the frontier.",
        ],
      },
    ],
    beliefs: [
      {
        heading: "The Bible",
        paragraphs: [
          "We believe the Scriptures of the Old and New Testaments are inspired by God and given to reveal His heart, His character, and His mission. Through the Holy Spirit, God spoke through human authors so that His Word would guide, correct, and shape His people. The Bible stands as our final authority in all matters of faith and life, and through it God equips us for every good work. (2 Timothy 3:16–17; 2 Peter 1:21)",
        ],
      },
      {
        heading: "The Trinity",
        paragraphs: [
          "We believe in one God who has eternally existed as Father, Son, and Holy Spirit. These three persons share the same divine nature and glory, and each carries out distinct yet perfectly unified work in creation, redemption, and the life of the Church. (Matthew 28:19)",
        ],
      },
      {
        heading: "God the Father",
        paragraphs: [
          "We believe God the Father is eternal, holy, and personal. He created all things and sustains every breath of life. His character is perfect in wisdom, justice, power, goodness, and love. He cares deeply for humanity, hears the prayers of His people, and calls us into faithful obedience. Through the saving work of Jesus Christ, the Father rescues us from sin and death and welcomes us into His family. (Acts 17:24–28)",
        ],
      },
      {
        heading: "Jesus",
        paragraphs: [
          "We confess that Jesus Christ is fully God and fully human, sharing the same divine nature as the Father and the Holy Spirit. Conceived by the Holy Spirit and born of the virgin Mary, He entered our world to reveal God’s heart and accomplish our redemption. Through His sinless life, His sacrificial death on the cross, and His bodily resurrection, He opened the way for all people to be saved from sin and restored to God. This salvation becomes ours as we place our faith in Jesus as Lord and enter the family of God. We believe Jesus is alive today — ascended into Heaven, seated at the right hand of the Father, interceding as our High Priest — and that He will return in glory to judge the living and the dead. (John 1:1–3; Colossians 1:15–20)",
        ],
      },
      {
        heading: "Holy Spirit",
        paragraphs: [
          "We believe the Holy Spirit shares the same divine nature as the Father and the Son. The Spirit is present and active in the world today — our Helper, Advocate, Teacher, and Guide. The Spirit dwells within God’s people, giving new life, shaping us into holiness, and empowering us to live out God’s mission. Through the Spirit’s presence and gifts, believers are strengthened to proclaim the Gospel of Jesus and to serve in the work God has entrusted to the Church. (John 14:16–17, 26; 1 Corinthians 2:10–11)",
        ],
      },
      {
        heading: "Salvation",
        paragraphs: [
          "We believe God’s mission centers on rescuing humanity from the power and consequences of sin. Scripture teaches that sin brings spiritual death and brokenness, and that apart from God’s intervention, we cannot free ourselves or heal the world. In His grace, God has acted through Jesus Christ to reconcile us to Himself. Through faith in Jesus as Lord, we are forgiven, restored to relationship with God, and made new. United with Christ, believers receive power over sin, are transformed into a new creation, and are promised eternal life. We trust that God will one day renew all things, bringing His people into a restored and perfect kingdom where sin and death are no more. (Ephesians 2:1–10; Colossians 1:21–23; 2 Corinthians 5:17–21; Revelation 21:1–4)",
        ],
      },
      {
        heading: "The Church",
        paragraphs: [
          "We believe the Church is the body of Christ, made up of all who confess Jesus as Lord. Christ Himself is the head of the Church, and His authority guides and shapes our life together. Local congregations gather as communities of faith to worship, proclaim the Gospel, grow in discipleship, and serve the world in His name. As part of our shared witness, we practice two ordinances given by Jesus: baptism of believers by immersion and the Lord’s Supper, which reminds us of His saving work and unites us in hope. (1 Corinthians 12:12–13)",
        ],
      },
      {
        heading: "Christian Conduct",
        paragraphs: [
          "We believe God calls all people to live in obedience to Him. Our actions cannot free us from sin, but through Jesus Christ we have been freed from sin’s power and invited into a new way of life. By confessing Jesus as Lord, we acknowledge that His ways are better than our own, and we seek to follow Him with faithfulness. Though we fall short daily, we trust the Holy Spirit to transform us and shape our character.",
          "As followers of Jesus, we strive to be wise and generous stewards of the money, resources, and possessions entrusted to us. We seek the flourishing of life, stand against all forms of abuse, and pursue holiness in our relationships and sexual expression. In all things, we aim to love our neighbors as we love God — living with compassion, integrity, and self-giving generosity. Such a life bears witness to the hope of the Gospel. (1 John 1:5–2:2)",
        ],
      },
      {
        heading: "The Second Coming",
        paragraphs: [
          "We believe Jesus Christ will return, and His coming is certain. When He appears, the dead will be raised bodily, and every person will stand before Him in judgment. In His grace, Jesus will welcome into His eternal kingdom all who have been made righteous through faith in His lordship. Those who reject Him will face separation from God in accordance with His perfect justice. The return of Christ will bring the fullness of God’s reign and the restoration of all things. (1 Corinthians 15:21–28)",
        ],
      },
    ],
    values: [
      { heading: "Only Worship Jesus", paragraphs: ["We direct our worship and allegiance to Jesus Christ alone, honoring the Triune God above all else."] },
      { heading: "Biblical Truth", paragraphs: ["Scripture shapes what we believe and guides how we live. We seek to align our lives with the truth God has revealed."] },
      { heading: "Prayer", paragraphs: ["We depend on God in all things, engaging Him through prayer as an essential part of our life together."] },
      { heading: "Integrity", paragraphs: ["We strive to do what is right, even when it is difficult, choosing honesty, faithfulness, and moral courage."] },
      { heading: "Generosity", paragraphs: ["We practice generosity in every area of life — extending grace, love, time, and resources for the good of others."] },
      { heading: "Love Our Neighbors", paragraphs: ["We love the people around us — those beside us, across the street, and throughout our community — because every person bears God’s image."] },
      { heading: "Simple but Meaningful", paragraphs: ["We value simplicity that leads to depth, choosing realistic expectations and practices that help us focus on what truly matters."] },
    ],
  },
  givingPage: {
    title: "Give",
    description: "[SYNTHETIC FIXTURE — VERIFY BEFORE LAUNCH] Giving instructions will be confirmed before launch.",
  },
};
