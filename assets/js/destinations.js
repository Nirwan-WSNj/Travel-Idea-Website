const destinations = [
  {
    country: 'Sri Lanka',
    continent: 'Asia',
    category: ['culture', 'history', 'nature'],
    budget: 'mid-range',
    bestSeason: 'December to April',
    highlights: ['Sigiriya Rock Fortress', 'Anuradhapura', 'Nuwara Eliya', 'Ella', 'Galle Fort'],
    description: 'A tropical island destination with ancient cities, tea country, beaches, wildlife, and cultural heritage.',
    recommendedDays: 7
  },
  {
    country: 'Japan',
    continent: 'Asia',
    category: ['city', 'culture', 'nature'],
    budget: 'premium',
    bestSeason: 'March to May or October to November',
    highlights: ['Mount Fuji', 'Kyoto', 'Tokyo', 'Hiroshima Peace Memorial', 'Nara'],
    description: 'A blend of modern cities, temples, seasonal landscapes, food culture, and efficient transport.',
    recommendedDays: 7
  },
  {
    country: 'France',
    continent: 'Europe',
    category: ['city', 'culture', 'history'],
    budget: 'premium',
    bestSeason: 'April to June or September to October',
    highlights: ['Eiffel Tower', 'Mont Saint-Michel', 'Palace of Versailles', 'Louvre Museum'],
    description: 'Classic European travel with art, architecture, food, fashion, countryside, and historical landmarks.',
    recommendedDays: 5
  },
  {
    country: 'Greece',
    continent: 'Europe',
    category: ['beach', 'history', 'culture'],
    budget: 'mid-range',
    bestSeason: 'April to June or September to October',
    highlights: ['Acropolis of Athens', 'Delphi', 'Santorini', 'Meteora'],
    description: 'Mediterranean islands, ancient ruins, blue-water beaches, and rich cultural experiences.',
    recommendedDays: 6
  },
  {
    country: 'Egypt',
    continent: 'Africa',
    category: ['history', 'culture', 'adventure'],
    budget: 'mid-range',
    bestSeason: 'October to April',
    highlights: ['Pyramids of Giza', 'Luxor Temple', 'Valley of the Kings', 'Nile River'],
    description: 'Ancient monuments, desert landscapes, river cruises, and one of the world’s deepest historical travel experiences.',
    recommendedDays: 5
  },
  {
    country: 'Australia',
    continent: 'Oceania',
    category: ['nature', 'beach', 'adventure'],
    budget: 'premium',
    bestSeason: 'September to November or March to May',
    highlights: ['Sydney Opera House', 'Great Barrier Reef', 'Uluru', 'Blue Mountains'],
    description: 'A vast destination with beaches, reefs, wildlife, modern cities, and unique outdoor adventures.',
    recommendedDays: 10
  },
  {
    country: 'Canada',
    continent: 'North America',
    category: ['nature', 'adventure', 'city'],
    budget: 'premium',
    bestSeason: 'June to September',
    highlights: ['Niagara Falls', 'Banff National Park', 'Toronto', 'Vancouver'],
    description: 'A scenic travel destination with mountains, lakes, waterfalls, wildlife, and modern multicultural cities.',
    recommendedDays: 7
  },
  {
    country: 'Brazil',
    continent: 'South America',
    category: ['nature', 'city', 'adventure'],
    budget: 'mid-range',
    bestSeason: 'May to September',
    highlights: ['Christ the Redeemer', 'Amazon Rainforest', 'Iguazu Falls', 'Rio de Janeiro'],
    description: 'A lively destination with rainforests, beaches, waterfalls, music, festivals, and city life.',
    recommendedDays: 8
  },
  {
    country: 'Germany',
    continent: 'Europe',
    category: ['history', 'city', 'culture'],
    budget: 'mid-range',
    bestSeason: 'May to September or December',
    highlights: ['Brandenburg Gate', 'Neuschwanstein Castle', 'Berlin Wall Memorial', 'Munich'],
    description: 'Historic cities, castles, museums, efficient transport, Christmas markets, and scenic countryside.',
    recommendedDays: 5
  },
  {
    country: 'India',
    continent: 'Asia',
    category: ['culture', 'history', 'food'],
    budget: 'budget',
    bestSeason: 'October to March',
    highlights: ['Taj Mahal', 'Jaipur', 'Kerala Backwaters', 'Varanasi'],
    description: 'A diverse destination with forts, temples, food, festivals, landscapes, and deep cultural experiences.',
    recommendedDays: 10
  },
  {
    country: 'China',
    continent: 'Asia',
    category: ['history', 'city', 'culture'],
    budget: 'mid-range',
    bestSeason: 'April to May or September to October',
    highlights: ['Great Wall', 'Forbidden City', 'Terracotta Army', 'Shanghai'],
    description: 'Ancient history, modern cities, dramatic landscapes, cuisine, and major cultural landmarks.',
    recommendedDays: 8
  }
];

if (typeof window !== 'undefined') {
  window.destinations = destinations;
}
