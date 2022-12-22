const prefixes = {
  '-3': 'milli',
  '-6': 'micro',
  '-9': 'nano',
  '-12': 'pico',
  '-15': 'femto',
  '-18': 'atto',
  '-21': 'zepto',
  '-24': 'yocto',
  '-27': 'ninto',
  '-30': 'tento',
  '-33': 'tenamilli',
  '-36': 'tenamicro',
  '-39': 'tenanano',
  '-42': 'tenapico',
  '-45': 'tenafemto',
  '-48': 'tenaatto',
  '-51': 'tenazepto',
  '-54': 'tenayocto',
  '-57': 'tenaninto',
  '-60': 'bitento',
  '-63': 'bitentomilli',
  '-120': 'quadtento',
  '-300': 'hunto',
  '-3000': 'touto',
  0: '',
  3: 'kilo',
  6: 'mega',
  9: 'giga',
  12: 'tera',
  15: 'peta',
  18: 'exa',
  21: 'zetta',
  24: 'yotta',
  27: 'nina',
  30: 'tena',
  33: 'tenakilo',
  36: 'tenamega',
  39: 'tenagiga',
  42: 'tenatera',
  45: 'tenapeta',
  48: 'tenaexa',
  51: 'tenazetta',
  54: 'tenayotta',
  57: 'tenanina',
  60: 'bitena',
  63: 'bitenakilo',
  120: 'quadtena',
  300: 'huna',
  3000: 'tousa',
};

function joulesToTonsOfTNT(joules) {
  return joules / 4_184_000_000;
}

function getNumberPrefix(number) {
  const factorOfTen = Math.floor(Math.log10(number));
  const nearestPrefixFactor = factorOfTen - (factorOfTen % 3);
  const prefix = {
    factor: nearestPrefixFactor,
    prefix: prefixes[nearestPrefixFactor],
  };
  return prefix;
}

function getPrettyPrefixedValue(value, units, roundToPlace = 2) {
  const shortenedNumber = (value / 10 ** units.factor).toFixed(roundToPlace);
  return `${shortenedNumber} ${units.prefix}${units.unit}`;
}
