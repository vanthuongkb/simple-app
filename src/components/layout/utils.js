export function getCustomClassNames(classNames) {
  if (classNames) {
    return Array.isArray(classNames) ? classNames.join(' ') : classNames;
  }

  return '';
}