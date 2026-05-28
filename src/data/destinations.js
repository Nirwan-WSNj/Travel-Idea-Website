export const asset = (path) => (/^https?:\/\//.test(path) ? path : `${import.meta.env.BASE_URL}${path}`);

export const destinations = [
  {
    id: 'sri-lanka',
    country: 'Sri Lanka',
    continent: 'Asia',
    category: ['culture', 'history', 'nature'],
    budget: 'mid-range',
    bestSeason: 'December to April',
    signature: 'Ancient citadels, tea country, wildlife, and warm coastlines.',
    image: 'images/Sigiriya Rock.jpeg',
    gallery: ['images/Sigiriya Rock1.jpeg', 'images/Nuwara Eliya.jpg', 'images/Galle Fort.jpeg'],
    highlights: ['Sigiriya Rock Fortress', 'Anuradhapura', 'Nuwara Eliya', 'Ella', 'Galle Fort'],
    description:
      'A compact island route with ancient cities, misty highlands, rail journeys, beaches, and safari country.',
    recommendedDays: 7,
    dailyBudgetUsd: { budget: 35, midRange: 75, premium: 160 },
    itineraryIdeas: [
      'Colombo arrival and neighborhood walk',
      'Sigiriya and Dambulla culture day',
      'Kandy temple and lake',
      'Nuwara Eliya tea country',
      'Ella train and viewpoints',
      'Yala or Udawalawe safari',
      'Galle Fort and beach sunset',
    ],
    practicalTips: [
      'Keep cash for small shops and rural areas',
      'Reserve popular train routes early when possible',
      'Use sun protection in coastal areas',
    ],
    planningNote: 'Check current ETA or visa requirements, weather, and transport schedules before booking.',
  },
  {
    id: 'japan',
    country: 'Japan',
    continent: 'Asia',
    category: ['city', 'culture', 'nature'],
    budget: 'premium',
    bestSeason: 'March to May or October to November',
    signature: 'Efficient cities, quiet temples, seasonal landscapes, and food culture.',
    image: 'images/japan.jpeg',
    gallery: ['images/Mount Fuji (富士山).webp', 'images/Kyoto (京都).jpeg', 'images/Tokyo (東京).jpg'],
    highlights: ['Mount Fuji', 'Kyoto', 'Tokyo', 'Hiroshima Peace Memorial', 'Nara'],
    description:
      'A polished mix of modern neighborhoods, historic shrines, seasonal scenery, rail travel, and precise hospitality.',
    recommendedDays: 7,
    dailyBudgetUsd: { budget: 80, midRange: 160, premium: 320 },
    itineraryIdeas: [
      'Tokyo neighborhoods and food',
      'Asakusa and Shibuya day',
      'Mount Fuji day trip',
      'Kyoto temples',
      'Nara deer park and shrines',
      'Osaka food evening',
      'Hiroshima or Hakone extension',
    ],
    practicalTips: [
      'Use public transport cards or rail passes when useful',
      'Carry a small cash backup',
      'Respect quiet etiquette on trains',
    ],
    planningNote: 'Check rail pass prices, entry reservations, and seasonal crowd levels before final planning.',
  },
  {
    id: 'france',
    country: 'France',
    continent: 'Europe',
    category: ['city', 'culture', 'history'],
    budget: 'premium',
    bestSeason: 'April to June or September to October',
    signature: 'Art, architecture, food, fashion, countryside, and landmark day trips.',
    image: 'images/Palac-of-Versaillees-Hompage.jpg',
    gallery: [
      'images/wp9265491-palace-of-versailles-wallpapers.jpg',
      'images/mont-saint-michel-13465438.webp',
      'images/Trey_Ratcliff_photography_4K_France_top_view_building_Mont_Saint_Michel-2196933.jpg',
    ],
    highlights: ['Eiffel Tower', 'Mont Saint-Michel', 'Palace of Versailles', 'Louvre Museum'],
    description:
      'Classic European travel shaped by museums, river walks, grand palaces, coastal abbeys, and long cafe evenings.',
    recommendedDays: 5,
    dailyBudgetUsd: { budget: 85, midRange: 180, premium: 380 },
    itineraryIdeas: [
      'Paris landmarks and Seine walk',
      'Louvre and museum day',
      'Versailles day trip',
      'Montmartre and local food',
      'Mont Saint-Michel or Loire Valley extension',
    ],
    practicalTips: [
      'Pre-book major museums and attractions',
      'Validate public transport tickets where required',
      'Keep valuables secure in crowded tourist zones',
    ],
    planningNote: 'Check transport strikes, museum closures, and current entry rules before travel.',
  },
  {
    id: 'greece',
    country: 'Greece',
    continent: 'Europe',
    category: ['beach', 'history', 'culture'],
    budget: 'mid-range',
    bestSeason: 'April to June or September to October',
    signature: 'Ancient ruins, blue-water islands, warm evenings, and coastal villages.',
    image: 'images/Santorini-Sunset.jpg.optimal.jpg',
    gallery: ['images/Night-view-Parthenon-Athens.webp', 'images/delphi-1920.webp', 'images/Best-Things-to-do-in-Mykonos-Greece.jpg'],
    highlights: ['Acropolis of Athens', 'Delphi', 'Santorini', 'Meteora'],
    description:
      'Mediterranean island time and archaeological depth, with easy pairings between Athens, ruins, beaches, and sunsets.',
    recommendedDays: 6,
    dailyBudgetUsd: { budget: 60, midRange: 130, premium: 280 },
    itineraryIdeas: [
      'Athens ancient sites',
      'Acropolis Museum and Plaka',
      'Delphi day trip',
      'Santorini villages',
      'Beach and sunset day',
      'Meteora or island extension',
    ],
    practicalTips: [
      'Book ferries and island stays early in high season',
      'Carry water during summer sightseeing',
      'Check ferry schedules before island hopping',
    ],
    planningNote: 'Seasonal ferry availability and accommodation prices can change quickly.',
  },
  {
    id: 'egypt',
    country: 'Egypt',
    continent: 'Africa',
    category: ['history', 'culture', 'adventure'],
    budget: 'mid-range',
    bestSeason: 'October to April',
    signature: 'Nile routes, desert light, temples, tombs, and monumental history.',
    image: 'images/pyramids.jpg',
    gallery: ['images/desktop-wallpaper-giza-pyramids.jpg', 'images/aswan_0.jpg', 'images/shutterstock_valley-of-kings.webp'],
    highlights: ['Pyramids of Giza', 'Luxor Temple', 'Valley of the Kings', 'Nile River'],
    description:
      'A powerful route through ancient monuments, river landscapes, museums, desert edges, and archaeological sites.',
    recommendedDays: 5,
    dailyBudgetUsd: { budget: 40, midRange: 90, premium: 220 },
    itineraryIdeas: [
      'Giza pyramids and museum',
      'Cairo historic district',
      'Luxor temples',
      'Valley of the Kings',
      'Nile cruise or Aswan extension',
    ],
    practicalTips: [
      'Use licensed guides for major archaeological sites',
      'Plan desert sightseeing for cooler hours',
      'Carry small notes for tips and small purchases',
    ],
    planningNote: 'Check current entry rules, local advisories, and site opening times before departure.',
  },
  {
    id: 'australia',
    country: 'Australia',
    continent: 'Oceania',
    category: ['nature', 'beach', 'adventure'],
    budget: 'premium',
    bestSeason: 'September to November or March to May',
    signature: 'Reefs, harbor cities, coastal drives, red desert, and open-road scale.',
    image: 'images/Sydney Opera House (NSW).jpeg',
    gallery: ['images/Great Barrier Reef (QLD).jpeg', 'images/Uluru (NT).jpg', 'images/Great Ocean Road & Twelve Apostles (VIC).jpeg'],
    highlights: ['Sydney Opera House', 'Great Barrier Reef', 'Uluru', 'Blue Mountains'],
    description:
      'A large-scale outdoor destination with beaches, reefs, wildlife, modern cities, and long-distance route choices.',
    recommendedDays: 10,
    dailyBudgetUsd: { budget: 90, midRange: 190, premium: 420 },
    itineraryIdeas: [
      'Sydney harbor and city',
      'Blue Mountains day trip',
      'Cairns reef experience',
      'Daintree or coastal nature',
      'Melbourne city and food',
      'Great Ocean Road',
      'Uluru extension',
    ],
    practicalTips: [
      'Distances are large, so avoid overpacking the itinerary',
      'Use reef-safe sunscreen near marine areas',
      'Check weather and fire or flood conditions for road trips',
    ],
    planningNote: 'Domestic flights and regional transport should be planned early for long routes.',
  },
  {
    id: 'canada',
    country: 'Canada',
    continent: 'North America',
    category: ['nature', 'adventure', 'city'],
    budget: 'premium',
    bestSeason: 'June to September',
    signature: 'Mountain lakes, big-city food scenes, waterfalls, forests, and wildlife.',
    image: 'images/niagara-falls-5.jpg',
    gallery: ['images/Toronto.jpg', 'images/athabasca-falls-canada-jasper.webp', 'images/panoramic-pictures-6i3cwfr7iz6zx4ld.webp'],
    highlights: ['Niagara Falls', 'Banff National Park', 'Toronto', 'Vancouver'],
    description:
      'A scenic route country with mountains, lakes, waterfalls, national parks, wildlife, and multicultural cities.',
    recommendedDays: 7,
    dailyBudgetUsd: { budget: 85, midRange: 180, premium: 380 },
    itineraryIdeas: [
      'Toronto and Niagara Falls',
      'Vancouver city and waterfront',
      'Banff lakes and viewpoints',
      'Jasper or Icefields Parkway',
      'Wildlife and hiking day',
      'Local food and market day',
      'Scenic train or road extension',
    ],
    practicalTips: [
      'Book national park accommodation early',
      'Carry layers for mountain weather changes',
      'Respect wildlife distance rules',
    ],
    planningNote: 'Check park passes, trail conditions, and seasonal road closures before travel.',
  },
  {
    id: 'brazil',
    country: 'Brazil',
    continent: 'South America',
    category: ['nature', 'city', 'adventure'],
    budget: 'mid-range',
    bestSeason: 'May to September',
    signature: 'Rainforest routes, city rhythm, waterfalls, beaches, and festivals.',
    image: 'images/amazon-river-basin.jpg',
    gallery: ['images/wp4223737-carnival-in-rio-de-janeiro-wallpapers.jpg', 'images/wp1860185-salvador-de-bahia-wallpapers.jpg', 'images/wp9261126-pantanal-wallpapers.jpg'],
    highlights: ['Christ the Redeemer', 'Amazon Rainforest', 'Iguazu Falls', 'Rio de Janeiro'],
    description:
      'A lively destination with rainforest, beaches, waterfalls, music, festivals, and energetic city life.',
    recommendedDays: 8,
    dailyBudgetUsd: { budget: 45, midRange: 100, premium: 240 },
    itineraryIdeas: [
      'Rio viewpoints and beaches',
      'Christ the Redeemer and Sugarloaf',
      'Iguazu Falls',
      'Amazon gateway day',
      'Local food and music',
      'Historic neighborhoods',
      'Beach or nature extension',
    ],
    practicalTips: [
      'Use trusted transport at night',
      'Keep beach valuables minimal',
      'Check internal flight times for long distances',
    ],
    planningNote: 'Verify local safety guidance, weather, and regional transport before booking.',
  },
  {
    id: 'germany',
    country: 'Germany',
    continent: 'Europe',
    category: ['history', 'city', 'culture'],
    budget: 'mid-range',
    bestSeason: 'May to September or December',
    signature: 'Castles, museums, efficient trains, old towns, and market squares.',
    image: 'images/Germany.jpeg',
    gallery: ['images/Brandenburg Gate, Berlin.jpeg', 'images/Neuschwanstein Castle, Bavaria.jpeg', 'images/Cologne Cathedral, Cologne.jpeg'],
    highlights: ['Brandenburg Gate', 'Neuschwanstein Castle', 'Berlin Wall Memorial', 'Munich'],
    description:
      'Historic cities, castles, museums, Christmas markets, regional food, and scenic countryside routes.',
    recommendedDays: 5,
    dailyBudgetUsd: { budget: 70, midRange: 150, premium: 320 },
    itineraryIdeas: [
      'Berlin history and museums',
      'Berlin Wall and city districts',
      'Munich old town',
      'Neuschwanstein day trip',
      'Rhine or Christmas market extension',
    ],
    practicalTips: [
      'Validate regional transport tickets when required',
      'Check museum closing days',
      'Reserve popular castle visits early',
    ],
    planningNote: 'Transport rules and attraction reservations vary by city and season.',
  },
  {
    id: 'india',
    country: 'India',
    continent: 'Asia',
    category: ['culture', 'history', 'food'],
    budget: 'budget',
    bestSeason: 'October to March',
    signature: 'Forts, temples, rivers, food routes, festivals, and layered heritage.',
    image: 'images/taj-mahal-india-sunset-orange-sky-wonders-of-the-world-6144x2773-4651.jpg',
    gallery: ['images/Ghats_of_Varanasi.jpg', 'images/India-Immediate-Suspension-of-Visa-Services-for-Canadian-Nationals.jpg', 'images/agra-taj-mahal-side-view-front-view-photography_862994-45131.jpg'],
    highlights: ['Taj Mahal', 'Jaipur', 'Kerala Backwaters', 'Varanasi'],
    description:
      'A deeply varied travel country with forts, temples, food, festivals, river rituals, landscapes, and heritage cities.',
    recommendedDays: 10,
    dailyBudgetUsd: { budget: 25, midRange: 70, premium: 180 },
    itineraryIdeas: [
      'Delhi arrival and heritage',
      'Agra and Taj Mahal',
      'Jaipur forts and markets',
      'Varanasi river experience',
      'Kerala backwaters',
      'Food and culture day',
      'Wildlife or hill-country extension',
    ],
    practicalTips: [
      'Plan travel times carefully because distances can be long',
      'Use bottled or filtered water',
      'Dress respectfully for religious sites',
    ],
    planningNote: 'Check current e-visa, train availability, and regional weather before booking.',
  },
  {
    id: 'china',
    country: 'China',
    continent: 'Asia',
    category: ['history', 'city', 'culture'],
    budget: 'mid-range',
    bestSeason: 'April to May or September to October',
    signature: 'Imperial landmarks, high-speed rail, modern skylines, and mountain scenery.',
    image: 'images/The Great Wall of China.jpg',
    gallery: ['images/The Forbidden City (Palace Museum).jpg', 'images/Terracotta Army.jpg', 'images/Bund in Shanghai.jpeg'],
    highlights: ['Great Wall', 'Forbidden City', 'Terracotta Army', 'Shanghai'],
    description:
      'Ancient history, dramatic landscapes, major cultural landmarks, cuisine, and modern city momentum.',
    recommendedDays: 8,
    dailyBudgetUsd: { budget: 50, midRange: 120, premium: 260 },
    itineraryIdeas: [
      'Beijing landmarks',
      'Great Wall day trip',
      'Forbidden City and hutongs',
      "Xi'an Terracotta Army",
      'Shanghai skyline',
      'Food and market day',
      'Nature or river extension',
    ],
    practicalTips: [
      'Check app and payment access before arrival',
      'Book high-speed rail early for busy routes',
      'Carry translated destination names when needed',
    ],
    planningNote: 'Verify current visa, app access, and attraction reservation rules before travel.',
  },
];

const destinationEnhancements = {
  'sri-lanka': {
    routeTheme: 'Cultural triangle, tea rail, wildlife, and southern coast',
    pace: 'Balanced',
    arrivalHub: 'Colombo',
    idealFor: 'Travelers who want history, scenery, and beaches in one compact route',
    stayStyle: 'Boutique guesthouses, tea bungalows, and coastal villas',
    localFlavors: ['Rice and curry', 'Hoppers', 'Ceylon tea', 'King coconut'],
    signatureExperiences: [
      {
        title: 'Climb Sigiriya early',
        text: 'Reach the summit before the heat and watch the central plains open around the fortress.',
      },
      {
        title: 'Take the hill-country train',
        text: 'Use the Kandy to Ella route for tea estates, bridges, and slow mountain scenery.',
      },
      {
        title: 'Close in Galle Fort',
        text: 'Finish with ocean walls, cafes, old lanes, and an easy coastal sunset.',
      },
    ],
    bookingPriorities: ['Hill-country train seats', 'Safari jeep', 'Galle or beach stay'],
  },
  japan: {
    routeTheme: 'Tokyo energy, Fuji views, Kyoto temples, and Kansai food',
    pace: 'Polished',
    arrivalHub: 'Tokyo or Osaka',
    idealFor: 'Travelers who like efficient transport, food culture, and seasonal beauty',
    stayStyle: 'City hotels, ryokan inns, and rail-connected bases',
    localFlavors: ['Ramen', 'Sushi', 'Okonomiyaki', 'Matcha sweets'],
    signatureExperiences: [
      {
        title: 'Start with Tokyo districts',
        text: 'Pair old Tokyo in Asakusa with Shibuya crossings, food halls, and evening city lights.',
      },
      {
        title: 'Slow down in Kyoto',
        text: 'Use temple mornings, garden walks, and tea streets to balance the city pace.',
      },
      {
        title: 'Add Fuji or Hakone',
        text: 'Build in one scenic day for mountain views, hot springs, or lakeside walking.',
      },
    ],
    bookingPriorities: ['Popular restaurants', 'Intercity trains', 'Ryokan stays'],
  },
  france: {
    routeTheme: 'Paris icons, palace day trips, art, and coastal heritage',
    pace: 'Classic',
    arrivalHub: 'Paris',
    idealFor: 'Travelers who want art, architecture, food, and elegant day trips',
    stayStyle: 'Central hotels, apartments, and countryside extensions',
    localFlavors: ['Croissants', 'Cheese boards', 'Steak frites', 'Macarons'],
    signatureExperiences: [
      {
        title: 'Walk Paris by neighborhood',
        text: 'Link landmarks with riverbanks, bookshops, markets, and late cafe stops.',
      },
      {
        title: 'Give Versailles time',
        text: 'Treat the palace and gardens as a full day rather than a quick photo stop.',
      },
      {
        title: 'Stretch to Mont Saint-Michel',
        text: 'Use the abbey as a dramatic coastal extension when the trip has room.',
      },
    ],
    bookingPriorities: ['Museum entries', 'Versailles tickets', 'Restaurant reservations'],
  },
  greece: {
    routeTheme: 'Athens ruins, Delphi, island villages, and Aegean evenings',
    pace: 'Sunlit',
    arrivalHub: 'Athens',
    idealFor: 'Travelers who want ancient sites with island downtime',
    stayStyle: 'City hotels, cliffside stays, and village guesthouses',
    localFlavors: ['Souvlaki', 'Greek salad', 'Seafood', 'Baklava'],
    signatureExperiences: [
      {
        title: 'Begin above Athens',
        text: 'Use the Acropolis and nearby museum to ground the trip before island time.',
      },
      {
        title: 'Make Delphi a mountain day',
        text: 'Break up coastal travel with a sacred-site route through dramatic slopes.',
      },
      {
        title: 'Save sunset space',
        text: 'Let Santorini or another island breathe with one unhurried evening.',
      },
    ],
    bookingPriorities: ['Island ferries', 'Sunset stays', 'Summer site tickets'],
  },
  egypt: {
    routeTheme: 'Cairo, Giza, Luxor temples, tombs, and Nile extensions',
    pace: 'Historic',
    arrivalHub: 'Cairo',
    idealFor: 'Travelers who want ancient history and guided monument days',
    stayStyle: 'City hotels, Nile boats, and heritage-view stays',
    localFlavors: ['Koshari', 'Ful medames', 'Mint tea', 'Grilled kofta'],
    signatureExperiences: [
      {
        title: 'Anchor the route at Giza',
        text: 'Start with the pyramids and museum context before moving south.',
      },
      {
        title: 'Use Luxor as a base',
        text: 'Plan temple mornings and tomb visits around cooler hours.',
      },
      {
        title: 'Add the Nile slowly',
        text: 'A cruise or Aswan extension turns the trip from monuments into landscape.',
      },
    ],
    bookingPriorities: ['Licensed guide', 'Domestic train or flight', 'Temple entries'],
  },
  australia: {
    routeTheme: 'Sydney harbor, reef days, rainforests, coast roads, and red desert',
    pace: 'Expansive',
    arrivalHub: 'Sydney, Melbourne, or Brisbane',
    idealFor: 'Travelers who want outdoor variety and do not mind long distances',
    stayStyle: 'City hotels, reef lodges, road-trip cabins, and desert resorts',
    localFlavors: ['Flat whites', 'Seafood', 'Meat pies', 'Modern brunch'],
    signatureExperiences: [
      {
        title: 'Open on Sydney Harbor',
        text: 'Use the harbor, ferry routes, and coastal walks as an easy first chapter.',
      },
      {
        title: 'Protect reef time',
        text: 'Give Cairns or the Whitsundays enough room for weather and water conditions.',
      },
      {
        title: 'Choose one big extension',
        text: 'Pick Uluru, Great Ocean Road, or the Daintree instead of trying to do all three quickly.',
      },
    ],
    bookingPriorities: ['Domestic flights', 'Reef operator', 'Car hire'],
  },
  canada: {
    routeTheme: 'City gateways, waterfalls, mountain parks, lakes, and scenic roads',
    pace: 'Outdoor',
    arrivalHub: 'Toronto, Vancouver, or Calgary',
    idealFor: 'Travelers who want national parks, cities, and big landscapes',
    stayStyle: 'City hotels, park lodges, cabins, and lake bases',
    localFlavors: ['Poutine', 'Maple sweets', 'Pacific seafood', 'Butter tarts'],
    signatureExperiences: [
      {
        title: 'Pair Toronto and Niagara',
        text: 'Use the city for food and neighborhoods, then shift to the falls for scale.',
      },
      {
        title: 'Give the Rockies space',
        text: 'Banff and Jasper reward slow drives, early starts, and flexible weather plans.',
      },
      {
        title: 'Add a water city',
        text: 'Vancouver brings markets, waterfronts, and easy nature access.',
      },
    ],
    bookingPriorities: ['Park accommodation', 'Car rental', 'Trail or lake shuttles'],
  },
  brazil: {
    routeTheme: 'Rio viewpoints, beaches, waterfalls, rainforest, and music',
    pace: 'Lively',
    arrivalHub: 'Rio de Janeiro or Sao Paulo',
    idealFor: 'Travelers who want city energy, nature, beaches, and culture',
    stayStyle: 'City hotels, beach stays, eco lodges, and boutique pousadas',
    localFlavors: ['Feijoada', 'Acai', 'Pao de queijo', 'Caipirinha'],
    signatureExperiences: [
      {
        title: 'Frame Rio from above',
        text: 'Use Christ the Redeemer and Sugarloaf for city shape, then return to street level.',
      },
      {
        title: 'Let the falls dominate',
        text: 'Iguazu deserves time from more than one viewpoint if the route allows.',
      },
      {
        title: 'Choose a nature chapter',
        text: 'Amazon, Pantanal, or coastal reserves each change the trip completely.',
      },
    ],
    bookingPriorities: ['Internal flights', 'Trusted transfers', 'Nature lodge'],
  },
  germany: {
    routeTheme: 'Berlin history, Munich old town, castles, rivers, and markets',
    pace: 'Structured',
    arrivalHub: 'Berlin, Frankfurt, or Munich',
    idealFor: 'Travelers who want history, rail trips, museums, and old towns',
    stayStyle: 'City hotels, family-run inns, and rail-friendly bases',
    localFlavors: ['Pretzels', 'Schnitzel', 'Currywurst', 'Black Forest cake'],
    signatureExperiences: [
      {
        title: 'Start with Berlin layers',
        text: 'Use museums, memorials, and neighborhoods to understand the city beyond landmarks.',
      },
      {
        title: 'Go south for castles',
        text: 'Neuschwanstein works best as a planned day with timed tickets.',
      },
      {
        title: 'Use rail for variety',
        text: 'Efficient trains make it easy to connect river towns, Munich, and museum cities.',
      },
    ],
    bookingPriorities: ['Castle tickets', 'Regional rail passes', 'Museum days'],
  },
  india: {
    routeTheme: 'Golden Triangle, river rituals, forts, food, and southern calm',
    pace: 'Immersive',
    arrivalHub: 'Delhi, Mumbai, or Bengaluru',
    idealFor: 'Travelers who want intense culture, layered history, and strong food routes',
    stayStyle: 'Heritage hotels, homestays, city hotels, and retreat stays',
    localFlavors: ['Thali', 'Masala chai', 'Biryani', 'Dosa'],
    signatureExperiences: [
      {
        title: 'Build around the Taj Mahal',
        text: 'Give Agra a clear sunrise or sunset slot rather than rushing through.',
      },
      {
        title: 'Use Jaipur for color',
        text: 'Forts, markets, textiles, and old-city streets give the route texture.',
      },
      {
        title: 'Add a slower ending',
        text: 'Kerala, a hill station, or a wildlife stay can balance the heavier city pace.',
      },
    ],
    bookingPriorities: ['Train seats', 'Guided heritage days', 'Long-distance transfers'],
  },
  china: {
    routeTheme: 'Beijing heritage, Great Wall, Xi’an history, Shanghai skyline, and rail',
    pace: 'Layered',
    arrivalHub: 'Beijing or Shanghai',
    idealFor: 'Travelers who want imperial history, fast trains, cuisine, and modern cities',
    stayStyle: 'City hotels, rail-connected bases, and scenic extensions',
    localFlavors: ['Peking duck', 'Dumplings', 'Hot pot', 'Noodles'],
    signatureExperiences: [
      {
        title: 'Give Beijing the opening',
        text: 'Forbidden City, hutongs, and temple routes set up the rest of the country.',
      },
      {
        title: 'Choose the right Wall section',
        text: 'Pick a Great Wall visit based on crowd tolerance, walking level, and views.',
      },
      {
        title: 'Use rail to shift eras',
        text: 'High-speed routes connect ancient Xi’an with the Shanghai skyline efficiently.',
      },
    ],
    bookingPriorities: ['Visa documents', 'Attraction reservations', 'High-speed rail'],
  },
};

export const detailedDestinations = destinations.map((destination) => ({
  ...destination,
  ...destinationEnhancements[destination.id],
}));

const slugify = (value) =>
  value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

const commonsImage = (fileName, width = 2600) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}?width=${width}`;

export const homeHeroImage = commonsImage('20221102 Santorini904.jpg');

const countryHeroImages = {
  'sri-lanka': commonsImage('Sigiriya Rock Fortress.jpg'),
  japan: commonsImage('Torii path with lantern at Fushimi Inari Taisha Shrine, Kyoto, Japan.jpg'),
  france: commonsImage('Eiffel tower in the morning.jpg'),
  greece: commonsImage('Panoramic view of Oia, Santorini island (Thira), Greece.jpg'),
  egypt: commonsImage('Pyramids of the Giza Necropolis.jpg'),
  australia: commonsImage('Aerial shots of The Great Barrier Reef, Queensland, Australia (Ank Kumar) 01.jpg'),
  canada: commonsImage('Lake Louise, Banff, Canada. (54056720075).jpg'),
  brazil: commonsImage('Christ the Redeemer.jpg'),
  germany: commonsImage('Neuschwanstein Castle 2024-02.jpg'),
  india: commonsImage('Taj Mahal, Agra, India.jpg'),
  china: commonsImage('67016-The-Great-Wall, Mutianyu.jpg'),
};

export const homeHeroSlides = [
  {
    id: 'santorini',
    eyebrow: 'Blue coast escape',
    title: 'Santorini, Greece',
    text: 'White villages, volcanic cliffs, warm sunsets, and island routes made for slow evenings.',
    image: homeHeroImage,
    fallbackImage: 'images/Santorini-Sunset.jpg.optimal.jpg',
    href: '#/destination/greece-santorini',
  },
  {
    id: 'kyoto',
    eyebrow: 'Red shrine paths',
    title: 'Fushimi Inari, Japan',
    text: 'Bright torii gates, Kyoto walking routes, temple mornings, and vivid cultural details.',
    image: countryHeroImages.japan,
    fallbackImage: 'images/japan.jpeg',
    href: '#/destination/japan-kyoto',
  },
  {
    id: 'reef',
    eyebrow: 'Ocean color',
    title: 'Great Barrier Reef',
    text: 'Aerial reef blues, island water, coastal days, and tropical Australian route ideas.',
    image: countryHeroImages.australia,
    fallbackImage: 'images/Great Barrier Reef (QLD).jpeg',
    href: '#/destination/australia-great-barrier-reef',
  },
  {
    id: 'lake-louise',
    eyebrow: 'Mountain color',
    title: 'Banff, Canada',
    text: 'Turquoise lakes, alpine viewpoints, scenic drives, wildlife, and crisp mountain air.',
    image: countryHeroImages.canada,
    fallbackImage: 'images/niagara-falls-5.jpg',
    href: '#/destination/canada-banff-national-park',
  },
  {
    id: 'tea-country',
    eyebrow: 'Fresh green hills',
    title: 'Nuwara Eliya, Sri Lanka',
    text: 'Tea estates, cool hill-country air, garden views, and scenic mountain travel.',
    image: commonsImage('Sri Lanka, Tea plantations, Nuwara Eliya, Picking tea leaves.jpg'),
    fallbackImage: 'images/Nuwara Eliya.jpg',
    href: '#/destination/sri-lanka-nuwara-eliya',
  },
  {
    id: 'taj-mahal',
    eyebrow: 'Golden monument light',
    title: 'Taj Mahal, India',
    text: 'Marble architecture, garden symmetry, warm sunrise color, and classic heritage travel.',
    image: countryHeroImages.india,
    fallbackImage: 'images/taj-mahal-india-sunset-orange-sky-wonders-of-the-world-6144x2773-4651.jpg',
    href: '#/destination/india-taj-mahal-agra',
  },
];

const destinationHeroImages = {
  'sri-lanka-sigiriya-rock': commonsImage('Sigiriya Rock Fortress.jpg'),
  'japan-kyoto': commonsImage('Torii path with lantern at Fushimi Inari Taisha Shrine, Kyoto, Japan.jpg'),
  'france-eiffel-tower-paris': commonsImage('Eiffel tower in the morning.jpg'),
  'greece-santorini': commonsImage('Panoramic view of Oia, Santorini island (Thira), Greece.jpg'),
  'egypt-giza-pyramids': commonsImage('Pyramids of the Giza Necropolis.jpg'),
  'australia-sydney-opera-house': commonsImage('Sydney (AU), Opera House -- 2019 -- 3054.jpg'),
  'canada-banff-national-park': commonsImage('1 lake louise pano 2019.jpg'),
  'brazil-christ-the-redeemer': commonsImage('Christ the Redeemer.jpg'),
  'germany-neuschwanstein-castle': commonsImage('Neuschwanstein Castle 2024-02.jpg'),
  'india-taj-mahal-agra': commonsImage('Taj Mahal, Agra, India.jpg'),
  'china-great-wall-of-china': commonsImage('67016-The-Great-Wall, Mutianyu.jpg'),
};

const countryDestinationMap = {
  'sri-lanka': [
    {
      name: 'Sigiriya Rock',
      image: 'images/Sigiriya Rock.jpeg',
      description:
        'Ancient rock fortress with UNESCO status, frescoes, water gardens, and wide views from the summit.',
      style: ['history', 'culture', 'nature'],
    },
    {
      name: 'Anuradhapura',
      image: 'images/Anuradhapura.jpeg',
      description:
        'Sacred ancient capital with Buddhist monuments, stupas, ruins, and the revered Sri Maha Bodhi tree.',
      style: ['history', 'culture'],
    },
    {
      name: 'Nuwara Eliya',
      image: 'images/Nuwara Eliya.jpg',
      description:
        'Cool highland town known for tea estates, colonial architecture, misty hills, and garden landscapes.',
      style: ['nature', 'culture'],
    },
    {
      name: 'Galle Fort',
      image: 'images/Galle Fort.jpeg',
      description:
        'Colonial coastal fortress with stone ramparts, old streets, boutique cafes, and Indian Ocean sunsets.',
      style: ['history', 'city', 'beach'],
    },
    {
      name: 'Yala National Park',
      image: 'images/Yala National Park.jpeg',
      description:
        'Wildlife reserve with leopards, elephants, birds, lagoons, forest, and open plains for safari drives.',
      style: ['nature', 'adventure'],
    },
    {
      name: 'Mirissa Beach',
      image: 'images/Mirissa Beach.jpg',
      description:
        'Southern coast beach with golden sand, surf, whale watching, relaxed cafes, and sunset viewpoints.',
      style: ['beach', 'nature'],
    },
  ],
  japan: [
    {
      name: 'Mount Fuji',
      image: 'images/Mount Fuji (富士山).webp',
      description:
        'Japan’s highest mountain and most iconic natural landmark, known for lake views and seasonal climbing routes.',
      style: ['nature', 'adventure'],
    },
    {
      name: 'Kyoto',
      image: 'images/Kyoto (京都).jpeg',
      description:
        'Historic city of temples, gardens, shrines, tea streets, and preserved cultural districts.',
      style: ['culture', 'history'],
    },
    {
      name: 'Tokyo',
      image: 'images/Tokyo (東京).jpg',
      description:
        'Dynamic capital blending neon districts, food halls, shrines, design, shopping, and rail-connected neighborhoods.',
      style: ['city', 'food', 'culture'],
    },
    {
      name: 'Miyajima Island',
      image: 'images/Miyajima Island (宮島).jpg',
      description:
        'Seto Inland Sea island famous for Itsukushima Shrine, the floating torii gate, forest trails, and coastal calm.',
      style: ['culture', 'nature'],
    },
    {
      name: 'Hiroshima Peace Memorial',
      image: 'images/Hiroshima Peace Memorial (広島原爆ドーム).jpeg',
      description:
        'UNESCO-listed memorial site preserving the Atomic Bomb Dome and a powerful message of peace.',
      style: ['history', 'culture'],
    },
    {
      name: 'Nara',
      image: 'images/Nara (奈良).JPG',
      description:
        'Ancient capital with Todai-ji Temple, parkland, shrines, and the famous roaming deer.',
      style: ['history', 'culture', 'nature'],
    },
  ],
  france: [
    {
      name: 'Eiffel Tower, Paris',
      image: 'images/76686668_large.jpg',
      description:
        'Paris icon with city views, evening lights, and classic Seine-side travel atmosphere.',
      style: ['city', 'culture'],
    },
    {
      name: 'Versailles Palace',
      image: 'images/Palac-of-Versaillees-Hompage.jpg',
      description:
        'Grand royal palace with ornate interiors, mirrored halls, formal gardens, fountains, and deep French history.',
      style: ['history', 'culture'],
    },
    {
      name: 'Mont Saint-Michel',
      image: 'images/mont-saint-michel-13465438.webp',
      description:
        'Medieval abbey village rising from tidal flats, one of France’s most dramatic coastal landmarks.',
      style: ['history', 'culture', 'nature'],
    },
    {
      name: 'Louvre Museum, Paris',
      image: 'images/wallpaperflare.com_wallpaper (22).jpg',
      description:
        'World-class museum with masterpieces, royal architecture, and a vast collection across civilizations.',
      style: ['culture', 'history'],
    },
    {
      name: 'Provence Lavender Fields',
      image: 'images/leonard-cotte-c1Jp-fo53U8-unsplash.jpg',
      description:
        'Seasonal countryside landscapes of lavender rows, hill villages, markets, and summer light.',
      style: ['nature', 'culture'],
    },
    {
      name: 'Loire Valley Chateaux',
      image: 'images/wallpaperflare.com_wallpaper (21).jpg',
      description:
        'Fairytale castle region with riverside estates, gardens, vineyards, and scenic countryside drives.',
      style: ['history', 'culture', 'nature'],
    },
  ],
  greece: [
    {
      name: 'Acropolis of Athens',
      image: 'images/Night-view-Parthenon-Athens.webp',
      description:
        'Ancient citadel above Athens with the Parthenon, marble monuments, and sweeping city views.',
      style: ['history', 'culture'],
    },
    {
      name: 'Santorini',
      image: 'images/Santorini-Sunset.jpg.optimal.jpg',
      description:
        'Cycladic island of white villages, blue domes, caldera views, cliffside stays, and sunsets.',
      style: ['beach', 'culture', 'nature'],
    },
    {
      name: 'Delphi',
      image: 'images/delphi-1920.webp',
      description:
        'Mountain archaeological site with the Temple of Apollo, ancient ruins, and dramatic valley scenery.',
      style: ['history', 'culture', 'nature'],
    },
    {
      name: 'Meteora Monasteries',
      image: 'images/8709faebd89802d53d95229047c91b22.jpg',
      description:
        'Monasteries perched on high rock pillars, combining spiritual heritage and extraordinary landscapes.',
      style: ['history', 'culture', 'nature'],
    },
    {
      name: 'Mykonos',
      image: 'images/Best-Things-to-do-in-Mykonos-Greece.jpg',
      description:
        'Cosmopolitan island known for beaches, windmills, whitewashed lanes, nightlife, and Aegean views.',
      style: ['beach', 'city'],
    },
    {
      name: 'Oia',
      image: 'images/iStock-1272509097.jpg',
      description:
        'Romantic village famous for cliffside paths, blue domes, caldera hotels, and sunset viewpoints.',
      style: ['beach', 'culture'],
    },
  ],
  egypt: [
    {
      name: 'Giza Pyramids',
      image: 'images/pyramids-2371501_1920.jpg',
      description:
        'Ancient pyramid complex and Sphinx on the edge of Cairo, one of the world’s defining historic sites.',
      style: ['history', 'culture'],
    },
    {
      name: 'Luxor Temple',
      image: 'images/FCa1na2XoAgQZEt.jpg',
      description:
        'Ancient temple on the Nile’s east bank, especially atmospheric by evening lighting.',
      style: ['history', 'culture'],
    },
    {
      name: 'Valley of the Kings',
      image: 'images/shutterstock_valley-of-kings.webp',
      description:
        'Royal burial valley with painted tombs and chambers belonging to New Kingdom pharaohs.',
      style: ['history', 'culture'],
    },
    {
      name: 'Aswan High Dam',
      image: 'images/GettyImages-140331034-c1888aea448d45aebf677e601ecd16a0.jpg',
      description:
        'Major Nile engineering landmark shaping modern Egypt’s power, irrigation, and river control.',
      style: ['history', 'city'],
    },
    {
      name: 'Abu Simbel Temples',
      image: 'images/15-great-temple.jpg',
      description:
        'Monumental rock temples built by Ramses II, relocated above Lake Nasser in a remarkable preservation effort.',
      style: ['history', 'culture'],
    },
    {
      name: 'Karnak Temple',
      image: 'images/shutterstock_2096246080-min-scaled.jpg',
      description:
        'Vast Luxor temple complex with columns, sanctuaries, obelisks, and ceremonial avenues.',
      style: ['history', 'culture'],
    },
    {
      name: 'Aswan',
      image: 'images/Aswan+at+sunset-1920w.jpg',
      description:
        'Nile city with island views, Nubian culture, felucca rides, and access to southern temples.',
      style: ['culture', 'nature'],
    },
    {
      name: 'Hurghada',
      image: 'images/Hurgada-Egypt-MAX-TARVEL.jpg',
      description:
        'Red Sea resort city known for beaches, diving, coral reefs, marinas, and warm-weather escapes.',
      style: ['beach', 'adventure'],
    },
    {
      name: 'White Desert',
      image: 'images/0K3A2439.jpg',
      description:
        'Surreal desert landscape with white chalk formations, camping routes, and otherworldly scenery.',
      style: ['nature', 'adventure'],
    },
  ],
  australia: [
    {
      name: 'Sydney Opera House',
      image: 'images/Sydney Opera House (NSW).jpeg',
      description: 'Iconic harbor masterpiece and UNESCO landmark on Sydney’s waterfront.',
      style: ['city', 'culture'],
    },
    {
      name: 'Great Barrier Reef',
      image: 'images/Great Barrier Reef (QLD).jpeg',
      description: 'World’s largest coral reef system, known for snorkeling, diving, marine life, and reef islands.',
      style: ['nature', 'beach', 'adventure'],
    },
    {
      name: 'Uluru',
      image: 'images/Uluru (NT).jpg',
      description: 'Sacred red monolith in the desert heart of Australia, famous for changing colors at sunrise and sunset.',
      style: ['culture', 'nature'],
    },
    {
      name: 'Great Ocean Road',
      image: 'images/Great Ocean Road & Twelve Apostles (VIC).jpeg',
      description: 'Coastal drive with cliffs, beaches, forests, and the limestone Twelve Apostles sea stacks.',
      style: ['nature', 'adventure'],
    },
    {
      name: 'Bondi Beach',
      image: 'images/Bondi Beach (NSW).jpeg',
      description: 'Sydney surf beach with golden sand, ocean pools, cafes, and coastal walks.',
      style: ['beach', 'city'],
    },
    {
      name: 'Daintree Rainforest',
      image: 'images/Daintree Rainforest (QLD).jpeg',
      description: 'Ancient tropical rainforest with rare wildlife, canopy walks, rivers, and reef-to-rainforest scenery.',
      style: ['nature', 'adventure'],
    },
  ],
  canada: [
    {
      name: 'Banff National Park',
      image: 'images/panoramic-pictures-6i3cwfr7iz6zx4ld.webp',
      description:
        'Canadian Rockies park with turquoise lakes, mountain roads, wildlife, hiking, and alpine viewpoints.',
      style: ['nature', 'adventure'],
    },
    {
      name: 'Niagara Falls',
      image: 'images/niagara-falls-5.jpg',
      description:
        'Powerful waterfall system and classic Canadian natural landmark with boat trips and viewing decks.',
      style: ['nature', 'adventure'],
    },
    {
      name: 'Historic Quebec City',
      image: 'images/flatten.jpg',
      description:
        'Old-world walled city with cobblestone lanes, heritage architecture, French culture, and winter charm.',
      style: ['history', 'city', 'culture'],
    },
    {
      name: 'Vancouver Island',
      image: 'images/DJI_0250-1080x675.jpeg',
      description:
        'Pacific island escape with coastlines, forests, gardens, whale watching, and laid-back towns.',
      style: ['nature', 'beach'],
    },
    {
      name: 'Jasper National Park',
      image: 'images/athabasca-falls-canada-jasper.webp',
      description:
        'Wild mountain park with waterfalls, glaciers, dark skies, wildlife, and scenic drives.',
      style: ['nature', 'adventure'],
    },
    {
      name: 'CN Tower',
      image: 'images/Toronto.jpg',
      description:
        'Toronto skyline landmark with city and lake views, dining, and urban sightseeing nearby.',
      style: ['city', 'culture'],
    },
  ],
  brazil: [
    {
      name: 'Christ the Redeemer',
      image: 'images/main-qimg-4cfa947cc33efb7ecd2dfec1bf65eb9c-lq.jpg',
      description:
        'Rio de Janeiro mountaintop statue with sweeping city, beach, and bay views.',
      style: ['culture', 'city'],
    },
    {
      name: 'Amazon Rainforest',
      image: 'images/amazon-river-basin.jpg',
      description:
        'Vast rainforest and river basin with extraordinary biodiversity, lodges, and guided nature exploration.',
      style: ['nature', 'adventure'],
    },
    {
      name: 'Iguazu Falls',
      image: 'images/wp9261126-pantanal-wallpapers.jpg',
      description:
        'Massive waterfall system on the Brazil-Argentina border, known for dramatic viewpoints and misty walkways.',
      style: ['nature', 'adventure'],
    },
    {
      name: 'Carnival in Rio de Janeiro',
      image: 'images/wp4223717-carnival-in-rio-de-janeiro-wallpapers.jpg',
      description:
        'World-famous festival of samba, color, music, parades, and citywide celebration.',
      style: ['culture', 'city'],
    },
    {
      name: 'Pantanal Wetlands',
      image: 'images/wp9261126-pantanal-wallpapers.jpg',
      description:
        'Huge tropical wetland region with wildlife, birding, river safaris, and jaguar territory.',
      style: ['nature', 'adventure'],
    },
    {
      name: 'Historic Salvador',
      image: 'images/wp1860185-salvador-de-bahia-wallpapers.jpg',
      description:
        'Colonial old town with Afro-Brazilian culture, music, colorful streets, churches, and coastal energy.',
      style: ['history', 'culture', 'city'],
    },
  ],
  germany: [
    {
      name: 'Neuschwanstein Castle',
      image: 'images/Neuschwanstein Castle, Bavaria.jpeg',
      description: 'Fairy-tale castle in Bavaria’s alpine scenery, one of Germany’s most photographed landmarks.',
      style: ['history', 'culture', 'nature'],
    },
    {
      name: 'Cologne Cathedral',
      image: 'images/Cologne Cathedral, Cologne.jpeg',
      description: 'Gothic cathedral masterpiece with twin spires, river-city setting, and panoramic tower views.',
      style: ['history', 'culture', 'city'],
    },
    {
      name: 'Brandenburg Gate',
      image: 'images/Brandenburg Gate, Berlin.jpeg',
      description: 'Berlin landmark and symbol of German unity, surrounded by major museums and historic sites.',
      style: ['history', 'city'],
    },
    {
      name: 'Black Forest',
      image: 'images/Black Forest, Baden-Württemberg.jpg',
      description: 'Woodland region with villages, hiking, cuckoo-clock traditions, spa towns, and scenic roads.',
      style: ['nature', 'culture'],
    },
    {
      name: 'Romantic Road',
      image: 'images/Romantic Road, Various Cities.jpeg',
      description: 'Scenic route linking medieval towns, half-timbered houses, castles, and countryside stops.',
      style: ['history', 'culture'],
    },
    {
      name: 'Rhine River',
      image: 'images/Rhine River, Various Cities.jpeg',
      description: 'Castle-lined river valley with vineyards, old towns, cruises, and romantic scenery.',
      style: ['nature', 'history'],
    },
  ],
  india: [
    {
      name: 'Taj Mahal, Agra',
      image: 'images/taj-mahal-india-sunset-orange-sky-wonders-of-the-world-6144x2773-4651.jpg',
      description:
        'White marble mausoleum and world-famous monument of love, best viewed around sunrise or sunset.',
      style: ['history', 'culture'],
    },
    {
      name: 'Jaipur, The Pink City',
      image: 'images/wp2771093-india-4k-wallpapers.jpg',
      description:
        'Rajasthan city of palaces, forts, markets, textiles, old gates, and warm desert color.',
      style: ['history', 'culture', 'food'],
    },
    {
      name: 'Varanasi Ghats',
      image: 'images/Ghats_of_Varanasi.jpg',
      description:
        'Sacred Ganges riverfront with ancient steps, ceremonies, boat rides, and spiritual atmosphere.',
      style: ['culture', 'history'],
    },
    {
      name: 'Kerala Backwaters',
      image: 'images/download.jfif',
      description:
        'Peaceful canals, lagoons, houseboats, coconut groves, and village life in tropical Kerala.',
      style: ['nature', 'culture'],
    },
    {
      name: 'Hampi Ruins',
      image: 'images/wallpaperflare-cropped.jpg',
      description:
        'UNESCO ruins of the Vijayanagara Empire set among boulders, temples, and river landscapes.',
      style: ['history', 'culture', 'nature'],
    },
    {
      name: 'Red Fort',
      image: 'images/1167248.jpg',
      description:
        'Delhi Mughal fortress with red sandstone walls, ceremonial spaces, and deep imperial history.',
      style: ['history', 'culture', 'city'],
    },
  ],
  china: [
    {
      name: 'Great Wall of China',
      image: 'images/The Great Wall of China.jpg',
      description:
        'Ancient defensive wall across mountain ridges, one of China’s defining historic achievements.',
      style: ['history', 'culture', 'adventure'],
    },
    {
      name: 'Forbidden City',
      image: 'images/The Forbidden City (Palace Museum).jpg',
      description:
        'Imperial palace complex in Beijing, rich with courtyards, halls, gates, and dynastic history.',
      style: ['history', 'culture'],
    },
    {
      name: 'Terracotta Army',
      image: 'images/Terracotta Army.jpg',
      description:
        'Thousands of life-sized clay soldiers guarding the mausoleum of China’s first emperor near Xian.',
      style: ['history', 'culture'],
    },
    {
      name: 'Li River and Karst Mountains',
      image: 'images/Li River and Karst Mountains.jpeg',
      description:
        'Southern China river landscape framed by limestone karst peaks, villages, and boat routes.',
      style: ['nature', 'culture'],
    },
    {
      name: 'Jiuzhaigou Valley',
      image: 'images/Jiuzhaigou Valley.jpeg',
      description:
        'UNESCO valley with turquoise lakes, waterfalls, forests, and snow-capped mountain scenery.',
      style: ['nature', 'adventure'],
    },
    {
      name: 'Potala Palace',
      image: 'images/Potala Palace.jpeg',
      description:
        'Tibetan palace in Lhasa, an architectural and spiritual symbol set above the city.',
      style: ['history', 'culture'],
    },
  ],
};

export const countryPages = detailedDestinations.map((country) => ({
  ...country,
  heroImage: countryHeroImages[country.id],
  destinations: (countryDestinationMap[country.id] || []).map((place) => ({
    ...place,
    id: `${country.id}-${slugify(place.name)}`,
    countryId: country.id,
    country: country.country,
    continent: country.continent,
    budget: country.budget,
    bestSeason: country.bestSeason,
    recommendedDays: Math.max(2, Math.min(country.recommendedDays, 4)),
  })).map((place) => ({
    ...place,
    heroImage: destinationHeroImages[place.id],
  })),
}));

export const destinationPages = countryPages.flatMap((country) => country.destinations);

export const journeyThemes = [
  {
    id: 'heritage',
    label: 'Heritage routes',
    style: 'history',
    image: 'images/Night-view-Parthenon-Athens.webp',
    text: 'Temples, palaces, ruins, old capitals, and guided monument days.',
  },
  {
    id: 'coast',
    label: 'Coastal escapes',
    style: 'beach',
    image: 'images/Great Barrier Reef (QLD).jpeg',
    text: 'Reefs, islands, sunsets, harbor cities, and slow water-facing stays.',
  },
  {
    id: 'nature',
    label: 'Landscape journeys',
    style: 'nature',
    image: 'images/athabasca-falls-canada-jasper.webp',
    text: 'Parks, mountains, rainforests, wildlife, scenic rail, and road days.',
  },
];

export const universalTravelChecklist = [
  'Passport validity and visa or ETA checked',
  'Travel insurance confirmed',
  'Emergency contacts saved offline',
  'Hotel address saved in local language when possible',
  'Offline maps downloaded',
  'Backup bank card and small cash prepared',
  'Weather and local advisories reviewed',
  'Copies of key documents stored securely',
];

export const travelStyles = ['culture', 'history', 'nature', 'city', 'beach', 'adventure', 'food'];

export const budgetLabels = {
  budget: 'Budget',
  'mid-range': 'Mid-range',
  premium: 'Premium',
};

export const budgetTierLabels = {
  budget: 'Budget',
  midRange: 'Mid-range',
  premium: 'Premium',
};
