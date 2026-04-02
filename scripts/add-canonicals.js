// Script to generate canonical URL metadata updates
// Run: node scripts/add-canonicals.js

const fs = require('fs');
const path = require('path');

// Services mapping
const services = [
  'amiante', 'audit-energetique', 'boutin', 'carrez', 'dpe',
  'electricite', 'erp', 'gaz', 'plomb', 'termites'
];

// Cities mapping
const cities = [
  'agen', 'arcachon', 'bayonne', 'bazas', 'bergerac', 'blaye',
  'cognac', 'dax', 'jonzac', 'la-reole', 'langon', 'libourne',
  'merignac', 'mont-de-marsan', 'perigueux', 'pessac', 'rochefort',
  'royan', 'saintes', 'bordeaux' // Already done
];

console.log('=== CANONICAL URL UPDATES ===\n');
console.log('Services (9 remaining):');
services.forEach(s => {
  if (s !== 'dpe') { // dpe already has canonical
    console.log(`✓ /services/${s}`);
  }
});

console.log('\nCities (19 remaining):');
cities.forEach(c => {
  if (c !== 'bordeaux') { // bordeaux already has canonical
    console.log(`✓ /diagnostic-immobilier-${c}`);
  }
});

console.log('\nTotal pages to update: 28');
console.log('\nUpdate pattern:');
console.log('1. Read metadata');
console.log('2. Add alternates: { canonical: "https://www.eneoshabitat.fr/[path]" }');
