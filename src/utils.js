/* eslint-disable linebreak-style */
// eslint-disable-next-line import/prefer-default-export
export function getTokenFromParams() {
  const hashParams = {};
  let e; const r = /([^&;=]+)=?([^&;]*)/g;
  const q = window.location.hash.substring(1);
  // eslint-disable-next-line no-cond-assign
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }

  return hashParams;
}
