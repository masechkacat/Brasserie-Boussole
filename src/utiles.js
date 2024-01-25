function truncateText(text, maxLength) {
  if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
  }
  return text;
}

function displayNoResultsMessage() {
  const container = document.getElementById('beer-list');
  container.innerHTML = '<p>Aucun résultat trouvé pour votre recherche.</p>';
}

function displayErrorMessage() {
  const container = document.getElementById('beer-list');
  container.innerHTML = '<p>Une erreur s\'est produite lors de la requête.</p>';
}

export { truncateText, displayNoResultsMessage, displayErrorMessage};
