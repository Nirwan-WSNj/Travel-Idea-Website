const destinations = [
  {
    country: 'Sri Lanka',
    continent: 'Asia',
    category: ['culture', 'history', 'nature'],
    budget: 'mid-range',
    bestSeason: 'December to April',
    highlights: ['Sigiriya Rock Fortress', 'Anuradhapura', 'Nuwara Eliya', 'Ella', 'Galle Fort'],
    description: 'A tropical island destination with ancient cities, tea country, beaches, wildlife, and cultural heritage.',
    recommendedDays: 7,
    dailyBudgetUsd: { budget: 35, midRange: 75, premium: 160 },
    itineraryIdeas: ['Colombo arrival and city walk', 'Sigiriya and Dambulla culture day', 'Kandy temple and lake', 'Nuwara Eliya tea country', 'Ella train and viewpoints', 'Yala or Udawalawe safari', 'Galle Fort and beach sunset'],
    practicalTips: ['Keep cash for small shops and rural areas', 'Use sun protection in coastal areas', 'Reserve popular train routes early when possible'],
    planningNote: 'Check current ETA/visa, weather, and transport schedules before booking.'
  },
  {
    country: 'Japan',
    continent: 'Asia',
    category: ['city', 'culture', 'nature'],
    budget: 'premium',
    bestSeason: 'March to May or October to November',
    highlights: ['Mount Fuji', 'Kyoto', 'Tokyo', 'Hiroshima Peace Memorial', 'Nara'],
    description: 'A blend of modern cities, temples, seasonal landscapes, food culture, and efficient transport.',
    recommendedDays: 7,
    dailyBudgetUsd: { budget: 80, midRange: 160, premium: 320 },
    itineraryIdeas: ['Tokyo neighborhoods and food', 'Asakusa and Shibuya day', 'Mount Fuji day trip', 'Kyoto temples', 'Nara deer park and shrines', 'Osaka food evening', 'Hiroshima or Hakone extension'],
    practicalTips: ['Use public transport cards or rail passes when useful', 'Carry a small cash backup', 'Respect quiet etiquette on trains'],
    planningNote: 'Check rail pass prices, entry reservations, and seasonal crowd levels before final planning.'
  },
  {
    country: 'France',
    continent: 'Europe',
    category: ['city', 'culture', 'history'],
    budget: 'premium',
    bestSeason: 'April to June or September to October',
    highlights: ['Eiffel Tower', 'Mont Saint-Michel', 'Palace of Versailles', 'Louvre Museum'],
    description: 'Classic European travel with art, architecture, food, fashion, countryside, and historical landmarks.',
    recommendedDays: 5,
    dailyBudgetUsd: { budget: 85, midRange: 180, premium: 380 },
    itineraryIdeas: ['Paris landmarks and Seine walk', 'Louvre and museum day', 'Versailles day trip', 'Montmartre and local food', 'Mont Saint-Michel or Loire Valley extension'],
    practicalTips: ['Pre-book major museums and attractions', 'Validate public transport tickets where required', 'Keep valuables secure in crowded tourist zones'],
    planningNote: 'Check transport strikes, museum closures, and current entry rules before travel.'
  },
  {
    country: 'Greece',
    continent: 'Europe',
    category: ['beach', 'history', 'culture'],
    budget: 'mid-range',
    bestSeason: 'April to June or September to October',
    highlights: ['Acropolis of Athens', 'Delphi', 'Santorini', 'Meteora'],
    description: 'Mediterranean islands, ancient ruins, blue-water beaches, and rich cultural experiences.',
    recommendedDays: 6,
    dailyBudgetUsd: { budget: 60, midRange: 130, premium: 280 },
    itineraryIdeas: ['Athens ancient sites', 'Acropolis Museum and Plaka', 'Delphi day trip', 'Santorini villages', 'Beach and sunset day', 'Meteora or island extension'],
    practicalTips: ['Book ferries and island stays early in high season', 'Carry water during summer sightseeing', 'Check ferry schedules before island hopping'],
    planningNote: 'Seasonal ferry availability and accommodation prices can change quickly.'
  },
  {
    country: 'Egypt',
    continent: 'Africa',
    category: ['history', 'culture', 'adventure'],
    budget: 'mid-range',
    bestSeason: 'October to April',
    highlights: ['Pyramids of Giza', 'Luxor Temple', 'Valley of the Kings', 'Nile River'],
    description: 'Ancient monuments, desert landscapes, river cruises, and one of the world’s deepest historical travel experiences.',
    recommendedDays: 5,
    dailyBudgetUsd: { budget: 40, midRange: 90, premium: 220 },
    itineraryIdeas: ['Giza pyramids and museum', 'Cairo historic district', 'Luxor temples', 'Valley of the Kings', 'Nile cruise or Aswan extension'],
    practicalTips: ['Use licensed guides for major archaeological sites', 'Plan desert sightseeing for cooler hours', 'Carry small notes for tips and small purchases'],
    planningNote: 'Check current entry rules, local advisories, and site opening times before departure.'
  },
  {
    country: 'Australia',
    continent: 'Oceania',
    category: ['nature', 'beach', 'adventure'],
    budget: 'premium',
    bestSeason: 'September to November or March to May',
    highlights: ['Sydney Opera House', 'Great Barrier Reef', 'Uluru', 'Blue Mountains'],
    description: 'A vast destination with beaches, reefs, wildlife, modern cities, and unique outdoor adventures.',
    recommendedDays: 10,
    dailyBudgetUsd: { budget: 90, midRange: 190, premium: 420 },
    itineraryIdeas: ['Sydney harbor and city', 'Blue Mountains day trip', 'Cairns reef experience', 'Daintree or coastal nature', 'Melbourne city and food', 'Great Ocean Road', 'Uluru extension'],
    practicalTips: ['Distances are large, so avoid overpacking the itinerary', 'Use reef-safe sunscreen near marine areas', 'Check weather and fire/flood conditions for road trips'],
    planningNote: 'Domestic flights and regional transport should be planned early for long routes.'
  },
  {
    country: 'Canada',
    continent: 'North America',
    category: ['nature', 'adventure', 'city'],
    budget: 'premium',
    bestSeason: 'June to September',
    highlights: ['Niagara Falls', 'Banff National Park', 'Toronto', 'Vancouver'],
    description: 'A scenic travel destination with mountains, lakes, waterfalls, wildlife, and modern multicultural cities.',
    recommendedDays: 7,
    dailyBudgetUsd: { budget: 85, midRange: 180, premium: 380 },
    itineraryIdeas: ['Toronto and Niagara Falls', 'Vancouver city and waterfront', 'Banff lakes and viewpoints', 'Jasper or Icefields Parkway', 'Wildlife and hiking day', 'Local food and market day', 'Scenic train or road extension'],
    practicalTips: ['Book national park accommodation early', 'Carry layers for mountain weather changes', 'Respect wildlife distance rules'],
    planningNote: 'Check park passes, trail conditions, and seasonal road closures before travel.'
  },
  {
    country: 'Brazil',
    continent: 'South America',
    category: ['nature', 'city', 'adventure'],
    budget: 'mid-range',
    bestSeason: 'May to September',
    highlights: ['Christ the Redeemer', 'Amazon Rainforest', 'Iguazu Falls', 'Rio de Janeiro'],
    description: 'A lively destination with rainforests, beaches, waterfalls, music, festivals, and city life.',
    recommendedDays: 8,
    dailyBudgetUsd: { budget: 45, midRange: 100, premium: 240 },
    itineraryIdeas: ['Rio viewpoints and beaches', 'Christ the Redeemer and Sugarloaf', 'Iguazu Falls', 'Amazon gateway day', 'Local food and music', 'Historic neighborhoods', 'Beach or nature extension'],
    practicalTips: ['Use trusted transport at night', 'Keep beach valuables minimal', 'Check internal flight times for long distances'],
    planningNote: 'Verify local safety guidance, weather, and regional transport before booking.'
  },
  {
    country: 'Germany',
    continent: 'Europe',
    category: ['history', 'city', 'culture'],
    budget: 'mid-range',
    bestSeason: 'May to September or December',
    highlights: ['Brandenburg Gate', 'Neuschwanstein Castle', 'Berlin Wall Memorial', 'Munich'],
    description: 'Historic cities, castles, museums, efficient transport, Christmas markets, and scenic countryside.',
    recommendedDays: 5,
    dailyBudgetUsd: { budget: 70, midRange: 150, premium: 320 },
    itineraryIdeas: ['Berlin history and museums', 'Berlin Wall and city districts', 'Munich old town', 'Neuschwanstein day trip', 'Rhine or Christmas market extension'],
    practicalTips: ['Validate regional transport tickets when required', 'Check museum closing days', 'Reserve popular castle visits early'],
    planningNote: 'Transport rules and attraction reservations vary by city and season.'
  },
  {
    country: 'India',
    continent: 'Asia',
    category: ['culture', 'history', 'food'],
    budget: 'budget',
    bestSeason: 'October to March',
    highlights: ['Taj Mahal', 'Jaipur', 'Kerala Backwaters', 'Varanasi'],
    description: 'A diverse destination with forts, temples, food, festivals, landscapes, and deep cultural experiences.',
    recommendedDays: 10,
    dailyBudgetUsd: { budget: 25, midRange: 70, premium: 180 },
    itineraryIdeas: ['Delhi arrival and heritage', 'Agra and Taj Mahal', 'Jaipur forts and markets', 'Varanasi river experience', 'Kerala backwaters', 'Food and culture day', 'Wildlife or hill-country extension'],
    practicalTips: ['Plan travel times carefully because distances can be long', 'Use bottled or filtered water', 'Dress respectfully for religious sites'],
    planningNote: 'Check current e-visa, train availability, and regional weather before booking.'
  },
  {
    country: 'China',
    continent: 'Asia',
    category: ['history', 'city', 'culture'],
    budget: 'mid-range',
    bestSeason: 'April to May or September to October',
    highlights: ['Great Wall', 'Forbidden City', 'Terracotta Army', 'Shanghai'],
    description: 'Ancient history, modern cities, dramatic landscapes, cuisine, and major cultural landmarks.',
    recommendedDays: 8,
    dailyBudgetUsd: { budget: 50, midRange: 120, premium: 260 },
    itineraryIdeas: ['Beijing landmarks', 'Great Wall day trip', 'Forbidden City and hutongs', 'Xi’an Terracotta Army', 'Shanghai skyline', 'Food and market day', 'Nature or river extension'],
    practicalTips: ['Check app/payment access before arrival', 'Book high-speed rail early for busy routes', 'Carry translated destination names when needed'],
    planningNote: 'Verify current visa, app access, and attraction reservation rules before travel.'
  }
];

const universalTravelChecklist = [
  'Passport validity and visa/ETA checked',
  'Travel insurance confirmed',
  'Emergency contacts saved offline',
  'Hotel address saved in local language when possible',
  'Offline maps downloaded',
  'Backup bank card and small cash prepared',
  'Weather and local advisories reviewed',
  'Copies of key documents stored securely'
];

if (typeof window !== 'undefined') {
  window.destinations = destinations;
  window.universalTravelChecklist = universalTravelChecklist;
}
