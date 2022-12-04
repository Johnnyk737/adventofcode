const input = `1101,1,29,67,1102,0,1,65,1008,65,35,66,1005,66,28,1,67,65,20,4,0,1001,65,1,65,1106,0,8,99,35,67,101,99,105,32,110,39,101,115,116,32,112,97,115,32,117,110,101,32,105,110,116,99,111,100,101,32,112,114,111,103,114,97,109,10,14,94,153,512,1778,1219,522,207,112,148,1185,380,530,502,957,898,71,10,719,47,51,188,188,1277,446,156,188,990,370,549,1086,49,150,42,50,976,456,24,526,183,206,887,3,487,11,111,933,1059,51,439,30,258,901,19,1207,718,404,498,79,83,58,520,267,109,933,4,174,748,66,463,514,378,708,103,1073,364,224,254,28,196,95,30,567,633,943,3,63,1369,1754,342,651,139,8,10,535,1,841,89,306,86,621,51,872,806,212,926,930,390,665,163,291,357,724,861,106,793,222,33,215,81,1100,641,813,1073,276,1416,991,318,505,1112,1556,1309,1222,504,72,126,1143,261,347,1022,668,146,111,982,250,247,589,42,99,305,722,1286,732,16,248,234,140,492,1229,342,204,113,137,597,44,78,484,285,431,502,258,1329,1143,364,814,0,489,1070,837,56,17,784,636,809,342,50,713,71,280,674,1586,321,255,143,47,184,62,1133,4,24,470,5,269,11,316,2,472,535,1011,854,1543,614,605,404,1010,757,129,91,889,10,30,429,625,816,107,1367,69,272,466,335,851,723,574,121,37,23,256,920,4,1280,405,731,249,930,135,306,448,1027,27,932,4,352,703,258,652,1121,89,478,189,75,1204,33,869,1483,191,64,136,1622,651,294,458,944,819,68,1635,29,301,591,1195,82,783,1411,841,96,1370,272,403,10,87,1233,71,108,430,992,19,258,171,1812,509,671,212,228,252,22,1477,344,359,639,351,1187,44,300,318,92,189,153,1141,606,679,710,148,62,335,138,1074,1131,658,533,356,462,434,759,1036,436,4,1031,387,80,223,1152,125,515,32,243,239,31,1277,1151,252,565,12,700,117,90,83,194,22,196,73,460,560,133,351,237,167,21,694,9,287,114,128,130,190,1271,382,652,834,261,907,1697,377,854,241,1019,959,945,1397,1095,1009,1337,647,631,1019,83,1691,540,544,648,685,133,64,283,1599,55,10,37,25,614,93,98,503,7,200,376,64,636,471,110,491,402,795,388,1453,713,717,122,680,297,942,117,88,1467,123,1056,1295,1100,1343,956,133,6,498,1687,35,959,380,97,2,351,1556,749,246,700,157,1216,571,448,730,1515,47,535,102,1550,486,551,387,0,430,434,205,351,701,421,536,308,247,88,25,329,264,464,1441,77,18,1712,353,1672,56,220,328,74,973,249,489,815,589,607,927,158,63,13,49,573,280,350,66,553,233,69,314,78,961,469,821,605,959,48,1346,968,222,1365,473,917,137,782,322,603,989,277,45,73,265,276,242,342,257,699,221,334,259,806,812,54,89,1551,109,271,1642,151,1158,228,109,10,306,1308,817,1618,1430,839,146,33,650,241,83,644,109,120,637,317,190,48,1113,1547,68,765,230,422,1066,421,22,189,1060,375,907,363,1051,34,465,572,611,629,535,1097,1015,915,616,13,448,36,29,129,195,1423,839,56,125,430,571,747,449,435,446,387,569,22,1721,90,978,1659,93,1826,115,334,219,333,122,725,162,707,17,1103,38,172,65,438,1143,763,115,328,13,257,117,383,912,673,130,128,222,318,785,1505,887,110,1706,786,192,524,1265,40,276,408,63,86,315,648,222,17,1127,460,341,414,204,991,14,68,354,201,110,1613,477,345,1991,452,5,446,68,456,683,144,336,149,1204,736,934,1256,112,26,478,185,1361,997,220,292,52,385,130,107,61,39,368,757,466,120,787,576,355,701,52,212,448,103,712,679,94,465,788,93,884,29,214,470,120,216,406,662,642,452,704,156,484,29,41,1639,286,1325,535,101,53,408,1727,684,276,314,36,1393,1448,34,12,158,118,433,1320,617,68,395,174,83,549,1032,871,239,325,454,923,1324,470,532,214,1308,278,213,155,94,514,18,1278,467,481,194,932,122,619,796,1296,979,884,1176,230,457,61,162,571,1246,631,840,135,76,293,517,789,314,772,674,406,1302,9,86,53,1019,376,1688,203,1328,840,322,17,249,1192,5,353,304,476,739,299,1495,162,49,226,421,19,20,1179,4,438,244,298,117,46,107,133,407,190,146,1063,485,132,348,15,804,343,227,1108,29,1141,1413,1412,181,489,146,227,1136,86,612,1256,862,120,3,129,373,1240,428,1119,13,168,34,609,655,260,94,634,1136,1567,165,0,1079,11,39,27,456,391,79,1908,1062,141,6,1081,209,642,1726,83,141,2,254,393,83,246,1355,1085,786,453,213,1536,756,351,405,1925,3,1,12,615,303,423,10,1365,181,1510`;

const cache = new Map();

function parseInput() {
  return input.split(',').map(a=> parseInt(a))
}

function solution1() {
  let data = parseInput()
  let minPosition = 0;
  let minDistance = Number.MAX_SAFE_INTEGER;

  for (let position of data) {
    let distance = getDistance(position, data);

    if (distance < minDistance) {
      minDistance = distance
      minPosition = position
    }
  }
  console.log(minDistance);
}

function solution2() {
  let data = parseInput()
  let minPosition = 0;
  let minDistance = Number.MAX_SAFE_INTEGER;

  for (let position of data) {
    let distance = getDistance2(position, data);

    if (distance < minDistance) {
      minDistance = distance
      minPosition = position
    }
  }
  console.log(minDistance);
}

function getDistance(position, data) {
  let distance = 0;
  if (!cache.has(position)) {
    for (let other of data) {
      distance += Math.abs(position - other)
    }
    cache.set(position, distance)
  }

  return cache.get(position)
}

function getDistance2(position, data) {
  let distance = 0;
  let initDistance = 0;
  if (!cache.has(position)) {
    for (let other of data) {
      initDistance = Math.abs(position - other)
      distance += (initDistance * (initDistance + 1)) / 2
    }
    cache.set(position, distance)
  }

  return cache.get(position)
}

// solution1();
solution2();