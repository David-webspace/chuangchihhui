// Returns a path with the correct language prefix
export function getLocalizedPath(path, lng) {
  let cleanPath = path.startsWith('/') ? path : '/' + path;
  cleanPath = cleanPath.replace(/^\/(en|ch)(?=\/|$)/, ''); // Remove any existing prefix
  if (lng === 'en') {
    return '/en' + cleanPath;
  }
  // For Chinese (default), no prefix
  return cleanPath;
}
