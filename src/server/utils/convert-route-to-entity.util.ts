const mapping: Record<string, string> = {
  libraries: 'library',
  'mp-3s': 'mp3',
  ratings: 'rating',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
