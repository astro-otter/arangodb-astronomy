module.exports = {
  name: "ASTRO::CONE_SEARCH",
  isDeterministic: true,
  code: `function(ra, dec, separation) {
    const toRad = (deg) => deg * Math.PI / 180;
    const ra1  = toRad(ra);
    const dec1 = toRad(dec);
    const sep  = toRad(separation);

    const haversine = function(ra2, dec2) {
      const ra2r  = toRad(ra2);
      const dec2r = toRad(dec2);
      const dra   = (ra2r - ra1) / 2;
      const ddec  = (dec2r - dec1) / 2;
      const a = Math.sin(ddec) * Math.sin(ddec) +
                Math.cos(dec1) * Math.cos(dec2r) *
                Math.sin(dra)  * Math.sin(dra);
      return 2 * Math.asin(Math.sqrt(a));
    };

    return haversine(ra, dec) <= sep;
  }`
};
