'use strict';

module.exports = (string) => {
  return string
    .replace(/\s/g, '-')
    .replace(/[%()=:.,!#$@"'/\\|?*+&]/g, '')
    .replace(/^-+|-+$/g, '')
    .replace(/-+/g, '-')
    .toLowerCase();
};