module.exports = {
  name: "ASTRO::CONE_SEARCH",
  isDeterministic: true,
  code: `function(ra1, dec1, ra2, dec2, separation) {
    const toRad = (deg) => deg * Math.PI / 180;

    const dec1r = toRad(dec1);
    const dec2r = toRad(dec2);
    const dra   = toRad(ra2  - ra1) / 2;
    const ddec  = toRad(dec2 - dec1) / 2;

    const a = Math.sin(ddec) * Math.sin(ddec) +
              Math.cos(dec1r) * Math.cos(dec2r) *
              Math.sin(dra)   * Math.sin(dra);

    // 2*arcsin(sqrt(a)) is numerically stable for both small and large separations
    // unlike arccos which loses precision for small angles
    const dist = 2 * Math.asin(Math.sqrt(a)) * 180 / Math.PI;
    return dist <= separation;
  }`
};
