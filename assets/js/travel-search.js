function normalizeSearchText(value) {
  return String(value || '').trim().toLowerCase();
}

function destinationMatches(destination, filters = {}) {
  const query = normalizeSearchText(filters.query);
  const continent = normalizeSearchText(filters.continent);
  const category = normalizeSearchText(filters.category);
  const budget = normalizeSearchText(filters.budget);

  const searchableText = normalizeSearchText([
    destination.country,
    destination.continent,
    destination.budget,
    destination.bestSeason,
    destination.description,
    ...(destination.highlights || []),
    ...(destination.category || []),
  ].join(' '));

  const matchesQuery = !query || searchableText.includes(query);
  const matchesContinent = !continent || normalizeSearchText(destination.continent) === continent;
  const matchesBudget = !budget || normalizeSearchText(destination.budget) === budget;
  const matchesCategory = !category || (destination.category || []).some((item) => normalizeSearchText(item) === category);

  return matchesQuery && matchesContinent && matchesBudget && matchesCategory;
}

function filterDestinations(destinationList, filters = {}) {
  return (destinationList || []).filter((destination) => destinationMatches(destination, filters));
}

function renderDestinationCards(destinationList, containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  if (!destinationList.length) {
    container.innerHTML = '<p class="travel-empty-state">No destinations found. Try a different search.</p>';
    return;
  }

  container.innerHTML = destinationList.map((destination) => `
    <article class="travel-destination-card">
      <h3>${destination.country}</h3>
      <p>${destination.description}</p>
      <ul>
        <li><strong>Continent:</strong> ${destination.continent}</li>
        <li><strong>Budget:</strong> ${destination.budget}</li>
        <li><strong>Best season:</strong> ${destination.bestSeason}</li>
        <li><strong>Recommended:</strong> ${destination.recommendedDays} days</li>
      </ul>
      <p><strong>Highlights:</strong> ${(destination.highlights || []).join(', ')}</p>
    </article>
  `).join('');
}

if (typeof window !== 'undefined') {
  window.travelSearch = {
    filterDestinations,
    renderDestinationCards,
    destinationMatches,
  };
}
