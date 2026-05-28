import { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  Compass,
  Heart,
  Mail,
  Map,
  MapPin,
  Menu,
  Plane,
  Search,
  Send,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Star,
  Users,
  WalletCards,
  X,
} from 'lucide-react';
import {
  asset,
  budgetLabels,
  budgetTierLabels,
  countryPages,
  destinationPages,
  homeHeroImage,
  homeHeroSlides,
  journeyThemes,
  travelStyles,
  universalTravelChecklist,
} from './data/destinations.js';

const continents = [...new Set(countryPages.map((country) => country.continent))];

function useHashRoute() {
  const getRoute = () => window.location.hash.replace(/^#/, '') || '/';
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const handleHashChange = () => setRoute(getRoute());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [route]);

  return route;
}

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

function formatMoney(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}

function searchDestinations(list, filters) {
  const query = filters.query.trim().toLowerCase();

  return list.filter((destination) => {
    const searchable = [
      destination.name,
      destination.country,
      destination.continent,
      destination.description,
      destination.bestSeason,
      destination.budget,
      ...(destination.style || []),
    ]
      .join(' ')
      .toLowerCase();

    return (
      (!query || searchable.includes(query)) &&
      (!filters.countryId || destination.countryId === filters.countryId) &&
      (!filters.continent || destination.continent === filters.continent) &&
      (!filters.style || destination.style.includes(filters.style)) &&
      (!filters.budget || destination.budget === filters.budget)
    );
  });
}

function App() {
  const route = useHashRoute();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [favorites, setFavorites] = useLocalStorage('travel-idea-favorite-destinations', []);
  const [checkedItems, setCheckedItems] = useLocalStorage('travel-idea-checklist', []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [route]);

  function toggleFavorite(destinationId) {
    setFavorites((current) =>
      current.includes(destinationId)
        ? current.filter((id) => id !== destinationId)
        : [...current, destinationId],
    );
  }

  function toggleChecklistItem(index) {
    setCheckedItems((current) =>
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index],
    );
  }

  const page = resolvePage(route);

  return (
    <div className="app">
      <Header isMenuOpen={isMenuOpen} onToggleMenu={() => setIsMenuOpen((value) => !value)} />
      {page.type === 'home' && (
        <HomePage favoriteIds={favorites} onToggleFavorite={toggleFavorite} />
      )}
      {page.type === 'countries' && <CountriesPage />}
      {page.type === 'country' && (
        <CountryPage
          country={page.country}
          favoriteIds={favorites}
          onToggleFavorite={toggleFavorite}
        />
      )}
      {page.type === 'destination' && (
        <DestinationPage
          destination={page.destination}
          country={page.country}
          favoriteIds={favorites}
          onToggleFavorite={toggleFavorite}
        />
      )}
      {page.type === 'planner' && (
        <PlannerPage checkedItems={checkedItems} onToggleChecklistItem={toggleChecklistItem} />
      )}
      {page.type === 'about' && <AboutPage />}
      {page.type === 'contact' && <ContactPage />}
      {page.type === 'not-found' && <NotFoundPage />}
      <Footer />
    </div>
  );
}

function resolvePage(route) {
  const parts = route.split('/').filter(Boolean);

  if (!parts.length) return { type: 'home' };
  if (parts[0] === 'countries' && parts.length === 1) return { type: 'countries' };
  if (parts[0] === 'planner') return { type: 'planner' };
  if (parts[0] === 'about') return { type: 'about' };
  if (parts[0] === 'contact') return { type: 'contact' };

  if (parts[0] === 'country' && parts[1]) {
    const country = countryPages.find((item) => item.id === parts[1]);
    return country ? { type: 'country', country } : { type: 'not-found' };
  }

  if (parts[0] === 'destination' && parts[1]) {
    const destination = destinationPages.find((item) => item.id === parts[1]);
    const country = countryPages.find((item) => item.id === destination?.countryId);
    return destination && country ? { type: 'destination', destination, country } : { type: 'not-found' };
  }

  return { type: 'not-found' };
}

function Header({ isMenuOpen, onToggleMenu }) {
  return (
    <header className="site-header">
      <a className="brand" href="#/" aria-label="Travel Idea home">
        <img src={asset('images/travel logo.png')} alt="" />
        <span>Travel Idea</span>
      </a>

      <button
        className="icon-button menu-button"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={isMenuOpen}
        onClick={onToggleMenu}
      >
        {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav className={isMenuOpen ? 'site-nav open' : 'site-nav'} aria-label="Primary navigation">
        <a href="#/">Home</a>
        <a href="#/countries">Countries</a>
        <a href="#/planner">Planner</a>
        <a href="#/about">About</a>
        <a href="#/contact">Contact</a>
      </nav>
    </header>
  );
}

function HomePage({ favoriteIds, onToggleFavorite }) {
  const [filters, setFilters] = useState({
    query: '',
    continent: '',
    countryId: '',
    style: '',
    budget: '',
  });

  const results = useMemo(() => searchDestinations(destinationPages, filters), [filters]);
  const featuredCountries = countryPages.slice(0, 6);
  const isSearching = Object.values(filters).some(Boolean);
  const visibleDestinations = isSearching ? results : destinationPages.slice(0, 9);
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const activeHeroSlide = homeHeroSlides[activeHeroIndex] || homeHeroSlides[0];

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || homeHeroSlides.length <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveHeroIndex((current) => (current + 1) % homeHeroSlides.length);
    }, 5200);

    return () => window.clearInterval(intervalId);
  }, []);

  function updateFilter(key, value) {
    setFilters((current) => ({ ...current, [key]: value }));
  }

  function moveHeroSlide(direction) {
    setActiveHeroIndex((current) => (
      current + direction + homeHeroSlides.length
    ) % homeHeroSlides.length);
  }

  function clearFilters() {
    setFilters({ query: '', continent: '', countryId: '', style: '', budget: '' });
  }

  return (
    <main>
      <section className="home-hero">
        <div className="home-hero-slides" aria-hidden="true">
          {homeHeroSlides.map((slide, index) => (
            <SmartImage
              className={index === activeHeroIndex ? 'home-hero-bg is-active' : 'home-hero-bg'}
              src={slide.image}
              fallbackSrc={slide.fallbackImage}
              alt=""
              key={slide.id}
            />
          ))}
        </div>
        <div className="home-hero-shade" />
        <div className="page-shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow light">
              <Compass size={18} />
              {activeHeroSlide.eyebrow}
            </p>
            <h1>Travel Idea</h1>
            <p>
              Bright destination pages, country routes, and search results with the right place,
              the right image, and a clearer path to your next trip.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#/countries">
                Browse countries
                <ArrowRight size={18} />
              </a>
              <a className="ghost-action" href="#/planner">
                Build a trip plan
              </a>
            </div>
          </div>

          <div className="hero-feature">
            <SmartImage
              src={activeHeroSlide.image}
              fallbackSrc={activeHeroSlide.fallbackImage}
              alt={`${activeHeroSlide.title} travel view`}
            />
            <div>
              <span>{activeHeroSlide.eyebrow}</span>
              <h2>{activeHeroSlide.title}</h2>
              <p>{activeHeroSlide.text}</p>
              <a href={activeHeroSlide.href}>Open destination page</a>
              <div className="hero-slider-controls" aria-label="Hero image slides">
                <button type="button" aria-label="Previous hero image" onClick={() => moveHeroSlide(-1)}>
                  <ArrowLeft size={17} />
                </button>
                {homeHeroSlides.map((slide, index) => (
                  <button
                    className={index === activeHeroIndex ? 'hero-slider-dot active' : 'hero-slider-dot'}
                    type="button"
                    aria-label={`Show ${slide.title}`}
                    aria-current={index === activeHeroIndex ? 'true' : undefined}
                    key={slide.id}
                    onClick={() => setActiveHeroIndex(index)}
                  />
                ))}
                <button type="button" aria-label="Next hero image" onClick={() => moveHeroSlide(1)}>
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell search-panel" aria-label="Destination search">
        <div className="section-title-row">
          <div>
            <p className="eyebrow">
              <Search size={18} />
              Destination search
            </p>
            <h2>Search destinations, not just countries.</h2>
          </div>
          <span>{results.length} matching destinations</span>
        </div>

        <div className="destination-filter-grid">
          <label className="field search-wide">
            <span>Search place</span>
            <span className="input-shell">
              <Search size={18} />
              <input
                value={filters.query}
                onChange={(event) => updateFilter('query', event.target.value)}
                placeholder="Try Giza, Kyoto, beach, temple, rainforest..."
                type="search"
              />
            </span>
          </label>
          <label className="field">
            <span>Country</span>
            <select value={filters.countryId} onChange={(event) => updateFilter('countryId', event.target.value)}>
              <option value="">All countries</option>
              {countryPages.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.country}
                </option>
              ))}
            </select>
          </label>
          <label className="field">
            <span>Continent</span>
            <select value={filters.continent} onChange={(event) => updateFilter('continent', event.target.value)}>
              <option value="">All continents</option>
              {continents.map((continent) => (
                <option key={continent} value={continent}>
                  {continent}
                </option>
              ))}
            </select>
          </label>
          <label className="field">
            <span>Style</span>
            <select value={filters.style} onChange={(event) => updateFilter('style', event.target.value)}>
              <option value="">All styles</option>
              {travelStyles.map((style) => (
                <option key={style} value={style}>
                  {style}
                </option>
              ))}
            </select>
          </label>
          <button className="secondary-action" type="button" onClick={clearFilters}>
            <X size={17} />
            Clear
          </button>
        </div>

        <div className="destination-grid">
          {visibleDestinations.map((destination) => (
            <DestinationCard
              destination={destination}
              isFavorite={favoriteIds.includes(destination.id)}
              key={destination.id}
              onToggleFavorite={() => onToggleFavorite(destination.id)}
            />
          ))}
        </div>
      </section>

      <section className="page-shell section-block">
        <div className="section-title-row">
          <div>
            <p className="eyebrow">
              <Map size={18} />
              Countries
            </p>
            <h2>Open a country page.</h2>
          </div>
          <a className="text-link" href="#/countries">
            View all countries <ArrowRight size={17} />
          </a>
        </div>
        <div className="country-grid">
          {featuredCountries.map((country) => (
            <CountryCard country={country} key={country.id} />
          ))}
        </div>
      </section>

      <section className="page-shell section-block">
        <p className="eyebrow">
          <Star size={18} />
          Journey themes
        </p>
        <div className="theme-grid">
          {journeyThemes.map((theme) => (
            <a className="theme-card" href="#/countries" key={theme.id}>
              <img src={asset(theme.image)} alt="" />
              <span>{theme.label}</span>
              <p>{theme.text}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

function CountriesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Country directory"
        title="Choose a country first."
        text="Each country now opens a dedicated page with only that country’s destinations, route notes, budget signals, and correct imagery."
        image={homeHeroImage}
        fallbackImage="images/wallpaperbetter.com_7680x4320.jpg"
      />
      <section className="page-shell section-block">
        <div className="country-grid all-countries">
          {countryPages.map((country) => (
            <CountryCard country={country} key={country.id} />
          ))}
        </div>
      </section>
    </main>
  );
}

function CountryPage({ country, favoriteIds, onToggleFavorite }) {
  return (
    <main>
      <PageHero
        eyebrow={`${country.continent} / ${budgetLabels[country.budget]}`}
        title={country.country}
        text={country.routeTheme}
        image={country.heroImage || country.image}
        fallbackImage={country.image}
      />

      <section className="page-shell country-detail-grid">
        <div>
          <a className="back-link" href="#/countries">
            <ArrowLeft size={17} />
            Back to countries
          </a>
          <h2>Discover {country.country}</h2>
          <p>{country.description}</p>
          <div className="fact-strip">
            <Fact label="Best season" value={country.bestSeason} />
            <Fact label="Arrival hub" value={country.arrivalHub} />
            <Fact label="Route pace" value={country.pace} />
            <Fact label="Destinations" value={country.destinations.length} />
          </div>
        </div>
        <aside className="country-note">
          <h3>Best for</h3>
          <p>{country.idealFor}</p>
          <h3>Stay style</h3>
          <p>{country.stayStyle}</p>
        </aside>
      </section>

      <section className="page-shell section-block">
        <div className="section-title-row">
          <div>
            <p className="eyebrow">
              <MapPin size={18} />
              Destinations in {country.country}
            </p>
            <h2>Correct country-to-place list.</h2>
          </div>
          <span>{country.destinations.length} places</span>
        </div>
        <div className="destination-grid">
          {country.destinations.map((destination) => (
            <DestinationCard
              destination={destination}
              isFavorite={favoriteIds.includes(destination.id)}
              key={destination.id}
              onToggleFavorite={() => onToggleFavorite(destination.id)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

function DestinationPage({ destination, country, favoriteIds, onToggleFavorite }) {
  const related = country.destinations.filter((item) => item.id !== destination.id).slice(0, 3);
  const isFavorite = favoriteIds.includes(destination.id);

  return (
    <main>
      <PageHero
        eyebrow={`${destination.country} destination`}
        title={destination.name}
        text={destination.description}
        image={destination.heroImage || destination.image}
        fallbackImage={destination.image}
      />

      <section className="page-shell destination-detail-grid">
        <div>
          <a className="back-link" href={`#/country/${country.id}`}>
            <ArrowLeft size={17} />
            Back to {country.country}
          </a>
          <h2>{destination.name}</h2>
          <p>{destination.description}</p>
          <div className="chip-row">
            {destination.style.map((style) => (
              <span className="chip" key={style}>
                {style}
              </span>
            ))}
          </div>
          <button className={isFavorite ? 'primary-action active' : 'primary-action'} type="button" onClick={() => onToggleFavorite(destination.id)}>
            <Heart size={18} fill={isFavorite ? 'currentColor' : 'none'} />
            {isFavorite ? 'Saved destination' : 'Save destination'}
          </button>
        </div>

        <aside className="guide-card">
          <h3>Guide facts</h3>
          <Fact label="Country" value={destination.country} />
          <Fact label="Best season" value={destination.bestSeason} />
          <Fact label="Typical visit" value={`${destination.recommendedDays} days`} />
          <Fact label="Budget style" value={budgetLabels[destination.budget]} />
        </aside>
      </section>

      <section className="page-shell section-block">
        <div className="section-title-row">
          <div>
            <p className="eyebrow">
              <Sparkles size={18} />
              Continue in {country.country}
            </p>
            <h2>Related destination pages.</h2>
          </div>
        </div>
        <div className="destination-grid related-grid">
          {related.map((item) => (
            <DestinationCard
              destination={item}
              isFavorite={favoriteIds.includes(item.id)}
              key={item.id}
              onToggleFavorite={() => onToggleFavorite(item.id)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

const travelMonthOptions = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const plannerPaces = [
  {
    id: 'easy',
    label: 'Easy',
    multiplier: 1.08,
    note: 'Slower days, better hotel locations, and more private transfer room.',
  },
  {
    id: 'balanced',
    label: 'Balanced',
    multiplier: 1,
    note: 'A practical route with one main activity per day and sensible travel gaps.',
  },
  {
    id: 'active',
    label: 'Active',
    multiplier: 0.96,
    note: 'More movement, earlier starts, and less downtime between places.',
  },
];

const tierAllowances = {
  budget: { transport: 12, experiences: 14 },
  midRange: { transport: 24, experiences: 30 },
  premium: { transport: 48, experiences: 62 },
};

const estimateExclusions = [
  'International flights',
  'Visa or ETA fees',
  'Travel insurance',
  'Personal shopping',
];

function clampNumber(value, min, max) {
  return Math.min(max, Math.max(min, Number(value) || min));
}

function PlannerPage({ checkedItems, onToggleChecklistItem }) {
  const [countryId, setCountryId] = useState(countryPages[0].id);
  const country = countryPages.find((item) => item.id === countryId) || countryPages[0];
  const [destinationId, setDestinationId] = useState(country.destinations[0].id);
  const destination = country.destinations.find((item) => item.id === destinationId) || country.destinations[0];
  const [days, setDays] = useState(country.recommendedDays);
  const [travelers, setTravelers] = useState(2);
  const [tier, setTier] = useState('midRange');
  const [paceId, setPaceId] = useState('balanced');
  const [travelMonth, setTravelMonth] = useState(country.bestSeason.split(' ')[0]);

  useEffect(() => {
    const nextCountry = countryPages.find((item) => item.id === countryId) || countryPages[0];
    setDestinationId(nextCountry.destinations[0].id);
    setDays(nextCountry.recommendedDays);
    setTravelMonth(nextCountry.bestSeason.split(' ')[0]);
  }, [countryId]);

  const pace = plannerPaces.find((item) => item.id === paceId) || plannerPaces[1];
  const dailyRate = country.dailyBudgetUsd[tier];
  const allowances = tierAllowances[tier];
  const stayMeals = Math.round(dailyRate * days * travelers * pace.multiplier);
  const localTransport = Math.round(allowances.transport * days * travelers);
  const experiences = Math.round(allowances.experiences * Math.min(days, destination.recommendedDays + 2) * travelers);
  const subtotal = stayMeals + localTransport + experiences;
  const buffer = Math.round(subtotal * 0.12);
  const total = subtotal + buffer;
  const itineraryPreview = country.itineraryIdeas.slice(0, Math.min(days, 6));

  return (
    <main>
      <PageHero
        eyebrow="Trip planner"
        title="Build a practical route estimate."
        text="Choose a country, destination, month, pace, and comfort level. The estimate uses country-specific daily costs with local transport, experience allowance, and a planning buffer."
        image={destination.heroImage || country.heroImage || country.image}
        fallbackImage={destination.image}
      />

      <section className="page-shell planner-layout">
        <div className="planner-card">
          <p className="eyebrow">
            <SlidersHorizontal size={18} />
            Planner controls
          </p>
          <h2>Trip brief</h2>
          <label className="field">
            <span>Country</span>
            <select value={countryId} onChange={(event) => setCountryId(event.target.value)}>
              {countryPages.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.country}
                </option>
              ))}
            </select>
          </label>
          <label className="field">
            <span>Destination</span>
            <select value={destinationId} onChange={(event) => setDestinationId(event.target.value)}>
              {country.destinations.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>
          <div className="two-fields">
            <label className="field">
              <span>Travel month</span>
              <select value={travelMonth} onChange={(event) => setTravelMonth(event.target.value)}>
                {travelMonthOptions.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </label>
            <label className="field">
              <span>Comfort</span>
              <select value={tier} onChange={(event) => setTier(event.target.value)}>
                {Object.entries(budgetTierLabels).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="two-fields">
            <label className="field">
              <span>Days</span>
              <input min="1" max="21" type="number" value={days} onChange={(event) => setDays(clampNumber(event.target.value, 1, 21))} />
            </label>
            <label className="field">
              <span>Travelers</span>
              <input min="1" max="12" type="number" value={travelers} onChange={(event) => setTravelers(clampNumber(event.target.value, 1, 12))} />
            </label>
          </div>
          <div className="field">
            <span>Travel pace</span>
            <div className="segmented-control" role="group" aria-label="Travel pace">
              {plannerPaces.map((item) => (
                <button
                  className={item.id === paceId ? 'active' : ''}
                  type="button"
                  key={item.id}
                  onClick={() => setPaceId(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <p className="planner-note">{pace.note}</p>
        </div>

        <div className="planner-result-card">
          <SmartImage src={destination.heroImage || destination.image} fallbackSrc={destination.image} alt={destination.name} />
          <div className="estimate-header">
            <p className="eyebrow">
              <CalendarDays size={18} />
              {travelMonth} / {country.country}
            </p>
            <h2>{destination.name} estimate</h2>
            <p>{destination.description}</p>
          </div>
          <div className="planner-summary-grid">
            <Fact label="Arrival hub" value={country.arrivalHub} />
            <Fact label="Best season" value={country.bestSeason} />
            <Fact label="Route pace" value={pace.label} />
            <Fact label="Per traveler" value={formatMoney(Math.round(total / travelers))} />
          </div>
          <div className="estimate-total">
            <span>Estimated trip budget</span>
            <strong>{formatMoney(total)}</strong>
            <small>{travelers} travelers / {days} days / {budgetTierLabels[tier]}</small>
          </div>
          <div className="estimate-breakdown" aria-label="Budget breakdown">
            <div>
              <span>Stays and meals</span>
              <strong>{formatMoney(stayMeals)}</strong>
            </div>
            <div>
              <span>Local transport</span>
              <strong>{formatMoney(localTransport)}</strong>
            </div>
            <div>
              <span>Tickets and experiences</span>
              <strong>{formatMoney(experiences)}</strong>
            </div>
            <div>
              <span>Planning buffer</span>
              <strong>{formatMoney(buffer)}</strong>
            </div>
          </div>
          <p className="planner-note">
            Excludes {estimateExclusions.join(', ').toLowerCase()}. Use this as a planning range before checking live prices.
          </p>
        </div>
      </section>

      <section className="page-shell section-block route-preview">
        <div className="section-title-row">
          <div>
            <p className="eyebrow">
              <Map size={18} />
              Route outline
            </p>
            <h2>A realistic first pass.</h2>
          </div>
          <span>{itineraryPreview.length} planning days shown</span>
        </div>
        <ol>
          {itineraryPreview.map((item, index) => (
            <li key={`${item}-${index}`}>
              <span>Day {index + 1}</span>
              <strong>{item}</strong>
            </li>
          ))}
        </ol>
      </section>

      <section className="page-shell section-block">
        <div className="section-title-row">
          <div>
            <p className="eyebrow">
              <ShieldCheck size={18} />
              Checklist
            </p>
            <h2>Pre-travel readiness.</h2>
          </div>
          <span>{checkedItems.length}/{universalTravelChecklist.length} complete</span>
        </div>
        <div className="checklist-grid">
          {universalTravelChecklist.map((item, index) => (
            <label className={checkedItems.includes(index) ? 'check-row checked' : 'check-row'} key={item}>
              <input
                type="checkbox"
                checked={checkedItems.includes(index)}
                onChange={() => onToggleChecklistItem(index)}
              />
              <span className="check-mark">
                <Check size={16} />
              </span>
              <span>{item}</span>
            </label>
          ))}
        </div>
      </section>
    </main>
  );
}

function AboutPage() {
  const standards = [
    {
      icon: <Map size={22} />,
      title: 'Country-first planning',
      text: 'Routes begin with the country context: arrival hub, best season, trip pace, budget style, and destination count.',
    },
    {
      icon: <WalletCards size={22} />,
      title: 'Practical budget signals',
      text: 'Budget ranges separate daily travel costs from local transport, activities, and a realistic planning buffer.',
    },
    {
      icon: <CalendarDays size={22} />,
      title: 'Season-aware details',
      text: 'Each country includes a useful travel window so travelers can compare weather, crowd levels, and route timing.',
    },
    {
      icon: <ShieldCheck size={22} />,
      title: 'Readiness mindset',
      text: 'Planning content keeps visas, insurance, offline maps, emergency contacts, and weather checks visible before travel.',
    },
  ];

  return (
    <main>
      <PageHero
        eyebrow="About Travel Idea"
        title="Travel planning with useful detail."
        text="Travel Idea is built around country-level route decisions, destination-specific pages, realistic budgets, and clear pre-travel readiness."
        image={countryPages[3].heroImage || countryPages[3].image}
        fallbackImage={countryPages[3].image}
      />
      <section className="page-shell section-block split-section">
        <div>
          <p className="eyebrow">
            <Sparkles size={18} />
            Editorial approach
          </p>
          <h2>Useful travel guidance without the clutter.</h2>
          <p>
            The site focuses on decisions travelers actually make before booking: where to arrive, how long to stay,
            what season makes sense, what style of trip fits the budget, and which destinations belong together.
          </p>
          <p>
            Country pages keep the route context together, while destination pages stay focused on the place itself.
            The result feels closer to a planning desk than a random image gallery.
          </p>
        </div>
        <div className="about-stat-grid">
          <Value icon={<Map size={22} />} text={`${countryPages.length} country guides`} />
          <Value icon={<MapPin size={22} />} text={`${destinationPages.length} destination pages`} />
          <Value icon={<WalletCards size={22} />} text="3 budget comfort levels" />
          <Value icon={<Users size={22} />} text={`${travelStyles.length} travel styles`} />
        </div>
      </section>

      <section className="page-shell section-block">
        <div className="section-title-row">
          <div>
            <p className="eyebrow">
              <Star size={18} />
              Planning standards
            </p>
            <h2>Professional travel-page details.</h2>
          </div>
        </div>
        <div className="professional-grid">
          {standards.map((item) => (
            <article className="professional-card" key={item.title}>
              <span>{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [contactCountryId, setContactCountryId] = useState(countryPages[0].id);
  const contactCountry = countryPages.find((country) => country.id === contactCountryId) || countryPages[0];
  const [contactDestinationId, setContactDestinationId] = useState(contactCountry.destinations[0].id);

  useEffect(() => {
    setContactDestinationId(contactCountry.destinations[0].id);
  }, [contactCountry]);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Request a travel planning brief."
        text="Send the country, destination, dates, group size, budget comfort, and travel style. The message can become a realistic route brief."
        image={countryPages[5].heroImage || countryPages[5].image}
        fallbackImage={countryPages[5].image}
      />
      <section className="page-shell contact-layout">
        <div className="contact-panel">
          <p className="eyebrow">
            <Mail size={18} />
            Planning desk
          </p>
          <h2>Share details for a real itinerary.</h2>
          <p>
            A useful enquiry includes travel dates, trip length, group size, preferred comfort level, must-see places,
            mobility limits, and anything that should be avoided. That gives the planner enough context to build a route
            that feels realistic from the first reply.
          </p>
          <div className="contact-points">
            <Value icon={<Mail size={20} />} text="planning@travelidea.com" />
            <Value icon={<CalendarDays size={20} />} text="Replies within 1 business day" />
            <Value icon={<MapPin size={20} />} text="Colombo travel desk, Sri Lanka" />
            <Value icon={<Plane size={20} />} text="Route planning for 11 countries" />
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Trip enquiry</h3>
          <div className="two-fields">
            <label className="field">
              <span>Name</span>
              <input required name="name" placeholder="Your name" />
            </label>
            <label className="field">
              <span>Email</span>
              <input required name="email" placeholder="you@example.com" type="email" />
            </label>
          </div>
          <div className="two-fields">
            <label className="field">
              <span>Travel month</span>
              <select defaultValue="September" name="month">
                {travelMonthOptions.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </label>
            <label className="field">
              <span>Travelers</span>
              <input min="1" max="24" name="travelers" placeholder="2" type="number" />
            </label>
          </div>
          <label className="field">
            <span>Country</span>
            <select name="country" value={contactCountryId} onChange={(event) => setContactCountryId(event.target.value)}>
              {countryPages.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.country}
                </option>
              ))}
            </select>
          </label>
          <label className="field">
            <span>Destination</span>
            <select name="destination" value={contactDestinationId} onChange={(event) => setContactDestinationId(event.target.value)}>
              {contactCountry.destinations.map((destination) => (
                <option key={destination.id} value={destination.id}>
                  {destination.name}
                </option>
              ))}
            </select>
          </label>
          <label className="field">
            <span>Budget comfort</span>
            <select defaultValue="midRange" name="budget">
              {Object.entries(budgetTierLabels).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>
          <label className="field">
            <span>Trip notes</span>
            <textarea required name="message" placeholder="Dates, route style, must-see places, hotel preference, food interests, accessibility needs..." rows="5" />
          </label>
          <button className="primary-action" type="submit">
            <Send size={18} />
            Send planning request
          </button>
          {sent && <p className="form-status">Request received. A planning brief for {contactCountry.country} can be prepared from these details.</p>}
        </form>
      </section>
    </main>
  );
}

function SmartImage({ src, fallbackSrc, alt, ...props }) {
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setCurrentSrc(src);
  }, [src]);

  return (
    <img
      {...props}
      src={asset(currentSrc)}
      alt={alt}
      onError={() => {
        if (fallbackSrc && currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        }
      }}
    />
  );
}

function PageHero({ eyebrow, title, text, image, fallbackImage, video = false }) {
  return (
    <section className="page-hero">
      {video ? (
        <video src={asset(image)} autoPlay muted loop playsInline />
      ) : (
        <SmartImage src={image} fallbackSrc={fallbackImage} alt="" />
      )}
      <div className="page-hero-shade" />
      <div className="page-shell page-hero-content">
        <p className="eyebrow light">
          <Compass size={18} />
          {eyebrow}
        </p>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}

function CountryCard({ country }) {
  return (
    <article className="country-card">
      <SmartImage src={country.heroImage || country.image} fallbackSrc={country.image} alt={country.country} />
      <div>
        <span>{country.continent}</span>
        <h3>{country.country}</h3>
        <p>{country.signature}</p>
        <div className="card-meta-row">
          <strong>{country.destinations.length} destinations</strong>
          <strong>{country.bestSeason}</strong>
        </div>
        <a className="text-link" href={`#/country/${country.id}`}>
          Open country page <ArrowRight size={17} />
        </a>
      </div>
    </article>
  );
}

function DestinationCard({ destination, isFavorite, onToggleFavorite }) {
  return (
    <article className="destination-card">
      <div className="destination-media">
        <SmartImage
          src={destination.image}
          fallbackSrc={destination.image}
          alt={destination.name}
        />
        <button
          className={isFavorite ? 'favorite-button active' : 'favorite-button'}
          type="button"
          aria-label={isFavorite ? `Remove ${destination.name} from saved` : `Save ${destination.name}`}
          onClick={onToggleFavorite}
        >
          <Heart size={18} fill={isFavorite ? 'currentColor' : 'none'} />
        </button>
      </div>
      <div className="destination-body">
        <div className="card-meta-row">
          <span>{destination.country}</span>
          <span>{destination.continent}</span>
        </div>
        <h3>{destination.name}</h3>
        <p>{destination.description}</p>
        <div className="chip-row">
          {destination.style.slice(0, 3).map((style) => (
            <span className="chip" key={style}>
              {style}
            </span>
          ))}
        </div>
        <a className="text-link" href={`#/destination/${destination.id}`}>
          Open destination page <ArrowRight size={17} />
        </a>
      </div>
    </article>
  );
}

function Fact({ label, value }) {
  return (
    <div className="fact">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function Value({ icon, text }) {
  return (
    <div>
      {icon}
      <span>{text}</span>
    </div>
  );
}

function NotFoundPage() {
  return (
    <main>
      <section className="page-shell empty-page">
        <h1>Page not found</h1>
        <p>The travel page you opened does not exist.</p>
        <a className="primary-action" href="#/countries">
          Browse countries
        </a>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <span>
        <Plane size={18} />
        Travel Idea
      </span>
      <p>Country pages, destination guides, and trip planning.</p>
    </footer>
  );
}

export default App;
