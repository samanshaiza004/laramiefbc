import type { CmsContent } from "./types";

/**
 * Local development content. Supplied church facts are included here for
 * preview and migration work, while remaining synthetic content is labeled
 * explicitly so this source cannot be mistaken for production content.
 */
export const localContent: CmsContent = {
  source: "local",
  settings: {
    name: "First Baptist Church of Laramie",
    shortName: "First Baptist",
    region: "Laramie, Wyoming",
    description: "First Baptist Church is a local Christian church in Laramie, Wyoming. Our mission is to share the good news of Christ’s love — in both word and deed.",
    footerDescription: "A local church in Laramie, Wyoming, sharing Christ’s love in both word and deed.",
    address: {
      street: "1517 E. Canby St.",
      locality: "Laramie",
      region: "WY",
      postalCode: "82072",
      country: "US",
    },
    phoneDisplay: "307-745-4106",
    phoneHref: "+13077454106",
    email: "Laramiefirstbaptist@gmail.com",
    services: [
      {
        label: "Bible Study",
        day: "Sunday",
        time: "9:30–10:30 a.m.",
        notes: "Sunday morning · led by Jane Langdon.",
        schemaDay: "Sunday",
        schemaOpens: "09:30",
        schemaCloses: "10:30",
      },
      {
        label: "Worship",
        day: "Sunday",
        time: "11:00 a.m.–12:00 p.m.",
        notes: "Communion on the first Sunday of the month.",
        schemaDay: "Sunday",
        schemaOpens: "11:00",
        schemaCloses: "12:00",
      },
    ],
    fellowship: {
      label: "Fellowship",
      day: "Sunday",
      time: "12:00–12:30 p.m.",
      notes: "Light refreshments, conversation, and connection. Visitors welcome!",
    },
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=1517%20E.%20Canby%20St.%2C%20Laramie%2C%20WY%2082072",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=1517%20E.%20Canby%20St.%2C%20Laramie%2C%20WY%2082072",
    socialLinks: [{ label: "Facebook", url: "https://www.facebook.com/LaramieFirstBaptist/" }],
  },
  homepage: {
    title: "First Baptist Church of Laramie",
    description: "First Baptist Church is a local Christian church in Laramie, Wyoming, sharing the good news of Christ’s love — in both word and deed.",
  },
  visitPage: {
    title: "Plan Your Visit",
    description: "Find Sunday worship, Bible study, and the practical details for visiting First Baptist Church of Laramie.",
    recurringGatherings: [
      {
        title: "Women’s Bible Study",
        day: "Weekly",
        time: "10:00 a.m.",
        location: "Mary Burman’s residence",
        leader: "Jane Langdon",
      },
      {
        title: "Men’s Group",
        day: "Thursday",
        time: "10:00 a.m.",
        location: "Ivinson Hospital",
      },
    ],
    communionNote: "Communion is observed on the first Sunday of each month.",
  },
  aboutPage: {
    title: "About First Baptist Church",
    description: "Learn the story, beliefs, and values of First Baptist Church of Laramie.",
    mission: "Our mission is to share the good news of Christ’s love — in both word and deed.",
    history: [
      {
        heading: "1870: Founding on the Frontier",
        paragraphs: [
          "Laramie sprang up alongside the Union Pacific Railroad in 1868. In January 1870, a visiting Baptist superintendent organized local believers for worship, officially founding First Baptist Church.",
          "By May, construction began on the congregation’s first building at Fourth Street and Grand Avenue on land granted by the Union Pacific Railroad. The sanctuary was dedicated in the fall of 1870 under the leadership of Rev. D. J. Pierce. Together with his wife, Marietta, Rev. Pierce also established the Wyoming Institute, marking the beginning of higher education in Laramie.",
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
          "We believe the Scriptures of the Old and New Testaments are inspired by God and given to reveal His heart, His character, and His mission (2 Tim. 3:16–17; 2 Pet. 1:21). Through the Holy Spirit, God spoke through human authors so that His Word would guide, correct, and shape His people. The Bible stands as our final authority in all matters of faith and life, and through it God equips us for every good work (Ps. 119:105; John 17:17; Heb. 4:12).",
        ],
      },
      {
        heading: "The Trinity",
        paragraphs: [
          "We believe in one God who has eternally existed as Father, Son, and Holy Spirit (Deut. 6:4; Matt. 28:19). These three persons share the same divine nature and glory, and each carries out distinct yet perfectly unified work in creation, redemption, and the life of the Church (John 1:1–3; Acts 5:3–4; 2 Cor. 13:14).",
        ],
      },
      {
        heading: "God the Father",
        paragraphs: [
          "We believe God the Father is eternal, holy, and personal (Matt. 6:9). He created all things and sustains every breath of life (Acts 17:24–28). His character is perfect in wisdom, justice, power, goodness, and love (Ps. 103:13; James 1:17). He cares deeply for humanity, hears the prayers of His people, and calls us into faithful obedience. Through the saving work of Jesus Christ, the Father rescues us from sin and death and welcomes us into His family (John 3:16).",
        ],
      },
      {
        heading: "Jesus",
        paragraphs: [
          "We confess that Jesus Christ is fully God and fully human, sharing the same divine nature as the Father and the Holy Spirit (John 1:1–3; Col. 1:15–20). Conceived by the Holy Spirit and born of the virgin Mary, He entered our world to reveal God’s heart and accomplish our redemption (Phil. 2:5–11; Heb. 4:15). Through His sinless life, His sacrificial death on the cross, and His bodily resurrection, He opened the way for all people to be saved from sin and restored to God. This salvation becomes ours as we place our faith in Jesus as Lord and enter the family of God (Rom. 3:24–25; 1 Cor. 15:3–4). We believe Jesus is alive today — ascended into Heaven, seated at the right hand of the Father, interceding as our High Priest — and that He will return in glory to judge the living and the dead (Acts 1:9–11).",
        ],
      },
      {
        heading: "Holy Spirit",
        paragraphs: [
          "We believe the Holy Spirit shares the same divine nature as the Father and the Son (1 Cor. 2:10–11). The Spirit is present and active in the world today — our Helper, Advocate, Teacher, and Guide (John 14:16–17, 26). The Spirit dwells within God’s people, giving new life, shaping us into holiness (Rom. 8:9–11; Gal. 5:22–23), and empowering us to live out God’s mission (Acts 1:8). Through the Spirit’s presence and gifts, believers are strengthened to proclaim the Gospel of Jesus and to serve in the work God has entrusted to the Church (1 Cor. 12:4–11).",
        ],
      },
      {
        heading: "Salvation",
        paragraphs: [
          "We believe God’s mission centers on rescuing humanity from the power and consequences of sin. Scripture teaches that sin brings spiritual death and brokenness, and that apart from God’s intervention, we cannot free ourselves or heal the world. In His grace, God has acted through Jesus Christ to reconcile us to Himself (Rom. 5:8; 2 Cor. 5:17–21; Col. 1:21–23). Through Jesus’ death and resurrection, and by faith in Jesus as Lord, we are forgiven, restored to relationship with God, and made new. United with Christ, believers receive power over sin, are transformed into a new creation, and are promised eternal life (John 3:16–18; Rom. 8:1–4). We trust that God will one day renew all things, bringing His people into a restored and perfect kingdom where sin and death are no more (Rev. 21:1–4).",
        ],
      },
      {
        heading: "The Church",
        paragraphs: [
          "We believe the Church is the body of Christ, made up of all who confess Jesus as Lord (1 Cor. 12:12–13). Christ Himself is the head of the Church, and His authority guides and shapes our life together (Eph. 1:22–23; Col. 1:18). Local congregations gather as communities of faith to worship, proclaim the Gospel, grow in discipleship, and serve the world in His name. This pattern reflects the life of the early church. It devoted itself to the apostles’ teaching, fellowship, prayer, and joyful witness (Acts 2:42–47; Heb. 10:24–25; Matt. 28:19–20). As part of our shared witness, we practice two ordinances given by Jesus: baptism of believers by immersion and the Lord’s Supper, which reminds us of His saving work and unites us in hope (Matt. 28:19; Acts 8:36–38; Luke 22:19–20; 1 Cor. 11:23–26).",
        ],
      },
      {
        heading: "Christian Conduct",
        paragraphs: [
          "We believe God calls all people to live in obedience to Him, empowered by the Holy Spirit (Gal. 5:16–26; Rom. 12:1–2). Our actions cannot free us from sin, but through Jesus Christ we have been freed from sin’s power and invited into a new way of life. By confessing Jesus as Lord, we acknowledge that His ways are better than our own, and we seek to follow Him with faithfulness. Though we fall short daily, we trust the Holy Spirit to transform us and shape our character (1 Pet. 1:15–16; Mic. 6:8).",
          "As followers of Jesus, we strive to be wise and generous stewards of the money, resources, and possessions entrusted to us. We seek the flourishing of life, stand against all forms of abuse, and pursue holiness in our relationships and sexual expression. In all things, we aim to love our neighbors as we love God — living with compassion, integrity, and self-giving generosity. Such a life bears witness to the hope of the Gospel (Matt. 22:37–40; 1 John 1:5–2:2).",
        ],
      },
      {
        heading: "The Second Coming",
        paragraphs: [
          "We believe Jesus Christ will return, and His coming is certain (Acts 1:11; Rev. 22:12). When He appears, the dead will be raised bodily, and every person will stand before Him in judgment (Matt. 24:30–31; 1 Thess. 4:13–18). In His grace, Jesus will welcome into His eternal kingdom all who have been made righteous through faith in His lordship. Those who reject Him will face separation from God in accordance with His perfect justice (2 Thess. 1:7–10). The return of Christ will bring the fullness of God’s reign and the restoration of all things (1 Cor. 15:21–28).",
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
    denominationalAffiliation: {
      heading: "Our denominational affiliation",
      churchMembership: "First Baptist Church is a member of American Baptist Churches USA, Rocky Mountain Region.",
      introduction: "Here are 10 essential facts about our American Baptist heritage.",
      sourceUrl: "https://www.abc-usa.org/10facts",
      traditionParagraphs: [
        "The 1.3-million members and approximately 5,000 congregations of American Baptist Churches USA share with more than 42 million Baptists around the world a common tradition begun in the early 17th century. That tradition has emphasized the Lordship and atoning sacrifice of Jesus Christ, believers’ baptism, the competency of all believers to be in direct relationship with God and to interpret Scripture, the importance of the local church, the assurance of freedom in worship and opinion, and the need to be Christ’s witnesses within society.",
      ],
      factsIntroduction: "The following facts are representative of the tradition and practice of American Baptists.",
      facts: [
        {
          heading: "Jesus Christ is Lord and Scripture is our authority",
          statement: "American Baptists believe that Jesus Christ is Lord and Savior, and that the Bible is the divinely inspired word of God that serves as the final written authority for living out the Christian faith.",
          explanation: "American Baptists celebrate the fact that belief in Jesus Christ assures salvation and eternal fellowship with a loving God. The events of the first Easter week are the cornerstones of our faith: the death of Christ, in which He took upon Himself the sin of the world, and the Resurrection, which gave proof of His triumph over sin and death. Holy Scripture always has been for American Baptists the authoritative and trustworthy guide for knowing and serving the God who is revealed as Creator, Savior and Advocate.",
        },
        {
          heading: "The local church is central to mission",
          statement: "For American Baptists the local church is the fundamental unit of mission in denominational life.",
          explanation: "Baptist roots date back four centuries to a people seeking the opportunity to worship God as individual members of freely organized and freely functioning local churches. Baptists always have maintained the need for autonomous congregations, responsible for articulating their own doctrine, style of worship and mission.",
        },
        {
          heading: "Believers’ baptism and the Lord’s Supper",
          statement: "American Baptists partake of two ordinances: believer’s baptism and the Lord’s Supper.",
          explanation: "Baptism, an act of full immersion following Christ’s example, is undertaken by those spiritually mature enough to understand its profound, symbolic significance: resurrection to new life in Christ. Through the Lord’s Supper, or Holy Communion, the bread and cup that symbolize the broken body and shed blood offered by Christ recall God’s great love for us — just as they did for the disciples on the eve of Christ’s crucifixion.",
        },
        {
          heading: "Direct relationship with God and shared ministry",
          statement: "American Baptists believe that the committed individual Christian can and should approach God directly, and that individual gifts of ministry should be shared.",
          explanation: "American Baptists hold that all who truly seek God are both competent and called to develop in that relationship. They have rejected creeds or other statements that might compromise each believer’s obligation to interpret Scripture under the guidance of the Holy Spirit and within the community of faith. American Baptists also celebrate the special gifts of all believers, testifying that God can use each of us in ministry.",
        },
        {
          heading: "Evangelism and mission",
          statement: "American Baptists take seriously the call to evangelism and missionary work.",
          explanation: "American Baptist worldwide mission work is a response to Christ’s call to “make disciples of all nations.” Through the efforts of our missionaries in partnership with others, ministries of evangelism, healing, education and development have made Christ’s love known in the U.S. and around the world.",
        },
        {
          heading: "Religious freedom and respect for others",
          statement: "American Baptists support religious freedom and respect the expressions of faith of others.",
          explanation: "As a people whose forbears came together in response to intolerance, American Baptists have cherished freedom and pursued it for millions around the world. Manifestations of that ideal include supporting separation of church and state, advocating for people everywhere to be guaranteed the right to worship free from discrimination, and lifting up respectful dialogue as a healthy means to understanding.",
        },
        {
          heading: "Cooperative ministry",
          statement: "American Baptists acknowledge that God’s family extends beyond our local churches, and that God calls us to cooperative ministries.",
          explanation: "Early Baptists saw that the effectiveness of their ministries would be greater through cooperation with other believers. Today within our American Baptist regions, churches work with each other and with denominational staff and in local and regional ecumenical arenas to increase the vitality and scope of their ministries. That outreach extends worldwide through our relationships with the Baptist World Alliance, the National Council of the Churches of Christ, the World Council of Churches and other groups.",
        },
        {
          heading: "Justice and wholeness in society",
          statement: "American Baptists have been called to be Christ’s witnesses for justice and wholeness within a broken society.",
          explanation: "American Baptists have been led by the Gospel mandates to promote holistic change within society, as witnessed by their advocacy of freed African Americans following the Civil War, the Civil Rights Movement, women in church and societal leadership, ecological responsibility, and many other issues. While not all of one mind as to how to deal with challenges, American Baptists do affirm the need to follow Christ’s example by being actively involved in changing society.",
        },
        {
          heading: "Racial, cultural, and theological diversity",
          statement: "American Baptist Churches USA celebrates the racial, cultural and theological diversity witnessed within its membership.",
          explanation: "American Baptist Churches USA today is the most racially inclusive Protestant body. Represented in our churches are equally diverse worship styles, cultural mores and approaches to Scriptural interpretation. The resulting challenges and opportunities have made us stronger — through fellowship, respect, mutual support and dialogue, all based on a belief that unity in Christ involves growth and understanding.",
        },
        {
          heading: "Renewal and a vital witness",
          statement: "American Baptists heed the biblical call to renewal and the need for a vital witness in a new millennium.",
          explanation: "As people of faith, American Baptists seek renewal and revitalization. Informed by their history and tradition, motivated by contemporary needs and challenges, and strengthened by God’s leading and the example and sacrifice of their Savior, American Baptists seek to bring a transforming witness to an uncharted future.",
        },
      ],
    },
  },
  missionsPage: {
    title: "Missions and Ministries",
    description: "Learn how First Baptist Church of Laramie serves neighbors, supports Camp Wyoba, participates in Baptist mission offerings, and celebrates women in ministry.",
    heroHeading: "Loving our Neighbors through Mission and Ministries",
    introduction: "We share Christ’s love in both word and deed — in Laramie, across the region, and around the world. To learn more or find out how you might help, contact the church.",
    communitySections: [
      {
        heading: "Monthly service projects",
        paragraphs: ["Every month, First Baptist Laramie collects donations and provides acts of service for Laramie community programs, including:"],
        listItems: ["The Soup Kitchen", "Local food pantries", "The Clothing Cottage", "Laramie Interfaith", "Heart to Heart Pregnancy Resource Center", "The Back2School Giveaway"],
      },
      {
        heading: "A lasting endowment",
        paragraphs: ["One church family created the Burman Fund, a lasting endowment that continues this church spirit of generosity for the benefit of the Laramie community. Distributions are made throughout the year."],
      },
      {
        heading: "Community partnerships and holidays",
        paragraphs: ["Pastor Lummi Kaping is an active member of the Laramie Ministerial Council and community holiday groups, attending monthly meetings and supporting local events. The church provides meeting space, hosts the community’s annual gift distribution, and sponsors gifts for individuals and families."],
      },
      {
        heading: "Sharing our facility",
        paragraphs: ["First Baptist opens its doors for community gatherings and services, including food distribution, community dinners, blood drives, suicide prevention seminars, the National Day of Prayer, music recitals, and veterans’ events.", "The church currently rents space to the following groups:"],
        listItems: ["Laramie Christian Academy, a private Christian school", "Cornerstone Music Studios", "The Ghanaian Church of the Pentecost"],
      },
    ],
    campWyobaSections: [
      {
        heading: "Summer camps, retreats, and work weekends",
        paragraphs: ["Camp Wyoba offers faith-based programs for youth, families, and adults at its facilities in the pine forest atop Casper Mountain. Programs include:"],
        listItems: ["Family Camp", "Grade School Camp", "Jr. High Camp", "Sr. High Camp", "An annual Women’s Retreat", "Work weekends to care for the camp property"],
      },
      {
        heading: "Leadership and service",
        paragraphs: ["First Baptist Laramie has a long history of voluntary service and leadership at Camp Wyoba. Church members have served as camp director, camp pastor, counselors, nurse, cook, and work weekend crew."],
      },
      {
        heading: "Camp scholarships",
        paragraphs: ["The First Baptist Laramie Endowment Fund can provide a limited number of camp scholarships. Camp Wyoba also lowers fees and awards additional scholarships based on financial need to help make camp accessible."],
      },
      {
        heading: "2026–2027 annual project",
        paragraphs: ["Churches and grateful individuals contribute each year toward Camp Wyoba’s capital maintenance. The 2026–2027 goal is to raise $25,000 to replace the foundation of the Jeff Fox Cabin."],
      },
    ],
    offeringsIntroduction: "American Baptist Churches USA (ABCUSA) promotes four main special offerings each year. First Baptist Laramie supports all four and has often ranked among the top five giving churches in the region, which includes roughly 70 churches.",
    specialOfferings: [
      { name: "America for Christ Offering", season: "February–March", purpose: "Leadership development, community healing, justice initiatives, and discipleship." },
      { name: "One Great Hour of Sharing", season: "May–June", purpose: "Disaster relief, ministries to displaced persons, and development projects." },
      { name: "World Mission Offering", season: "September–October", purpose: "Global missions, health, economic development, and other mission priorities." },
      { name: "Retired Ministers and Missionaries Offering", season: "November–December", purpose: "Support for ministers, missionaries, and their widowed spouses." },
    ],
    womenInMinistryIntroduction: "American Baptist churches have affirmed women’s ordination for more than a century, recognizing women as called and gifted by God for ministry. Women have shaped the life and leadership of First Baptist Laramie across generations.",
    womenInMinistrySections: [
      {
        heading: "Jane and Morley Langdon",
        paragraphs: ["In 1974, First Baptist Laramie ordained the Rev. Jane Langdon and her spouse, the Rev. Morley Langdon. Together they served regional churches and a Native American mission, then continued as volunteer missionaries in Thailand after retirement."],
      },
      {
        heading: "Margaret Prine",
        paragraphs: ["In 1984–1985, the late Margaret Prine — a University of Wyoming professor and active member of First Baptist Laramie — served as the first female National President of American Baptist Churches USA."],
      },
      {
        heading: "Women pastors",
        paragraphs: ["Two women have served as pastors of the congregation: the Rev. Mary Beth Mankin from 2005 to 2012, and the Rev. Karen Sundland from 2021 to 2023."],
      },
      {
        heading: "Clergy in lay leadership",
        paragraphs: ["Two retired female clergy provide lay leadership in the church: the Rev. Jane Langdon and the Rev. Carol Carr, retired Chief Chaplain of the Cheyenne VA."],
      },
    ],
  },
  givingPage: {
    title: "Give",
    description: "[SYNTHETIC FIXTURE — VERIFY BEFORE LAUNCH] Giving instructions will be confirmed before launch.",
  },
  sermons: [
    {
      id: "local-sermon-preview",
      title: "[SYNTHETIC FIXTURE] Sermon preview",
      slug: "synthetic-sermon-preview",
      speaker: { name: "[SPEAKER TO BE CONFIRMED]" },
      date: "2026-01-18",
      series: { title: "[SERIES TO BE CONFIRMED]", slug: "series-to-be-confirmed" },
      description: "[SYNTHETIC FIXTURE — VERIFY BEFORE LAUNCH] Sermon title, speaker, date, description, and recording will be supplied by church leadership.",
      featured: true,
    },
  ],
  sermonSeries: [],
  events: [
    {
      id: "local-event-preview",
      title: "[SYNTHETIC FIXTURE] Upcoming event preview",
      slug: "synthetic-event-preview",
      start: "2026-12-31T18:00:00-07:00",
      location: "[LOCATION TO BE CONFIRMED]",
      description: "[SYNTHETIC FIXTURE — VERIFY BEFORE LAUNCH] Event details, date, time, and registration information will be supplied by church leadership.",
    },
  ],
  ministries: [],
  people: [
    {
      id: "local-lummi-kaping",
      name: "Lummi Kaping",
      role: "Senior Pastor",
      committeeMemberships: ["Ministry Council", "Strategic Planning Committee"],
    },
    {
      id: "local-morley-langdon",
      name: "Morley Langdon",
      role: "Moderator",
      committeeMemberships: ["Ministry Council", "Strategic Planning Committee"],
      photoKey: "morleyAndJane",
      bio: "Morley serves as Moderator. He and Jane Langdon are part of the church’s shared life in Laramie.",
    },
    {
      id: "local-jackie-carter",
      name: "Jackie Carter",
      role: "Church Life and Real Property Chairperson",
      committeeMemberships: ["Ministry Council"],
      photoKey: "jackieCarter",
    },
    {
      id: "local-phyllis-dunbar",
      name: "Phyllis Dunbar",
      role: "Receiving Treasurer",
      committeeMemberships: ["Ministry Council", "Strategic Planning Committee"],
      photoKey: "phyllisDunbar",
    },
    {
      id: "local-maggie-harrop",
      name: "Maggie Harrop",
      role: "Church Clerk / Secretary for Ministry Council",
      committeeMemberships: ["Ministry Council"],
    },
    {
      id: "local-dough-carr",
      name: "Dough Carr",
      role: "Book Keeper",
      committeeMemberships: ["Ministry Council"],
    },
    {
      id: "local-yeseun",
      name: "Yeseun",
      role: "Music / Pianist",
      committeeMemberships: [],
    },
    {
      id: "local-jane-langdon",
      name: "Jane Langdon",
      role: "Bible Study Leader",
      committeeMemberships: [],
      bio: "Jane leads the Sunday morning Bible Study and the weekly Women’s Bible Study.",
    },
    {
      id: "local-lori-gonzalez",
      name: "Lori Gonzalez",
      role: "Ministry Council Member",
      committeeMemberships: ["Ministry Council"],
    },
    {
      id: "local-carol-carr",
      name: "Carol Carr",
      role: "Strategic Planning Committee Member",
      committeeMemberships: ["Strategic Planning Committee"],
    },
    {
      id: "local-john-stoll",
      name: "John Stoll",
      role: "Strategic Planning Committee Member",
      committeeMemberships: ["Strategic Planning Committee"],
    },
  ],
  announcements: [],
};
