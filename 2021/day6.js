const input = `1,1,1,2,1,1,2,1,1,1,5,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,4,1,1,1,1,3,1,1,3,1,1,1,4,1,5,1,3,1,1,1,1,1,5,1,1,1,1,1,5,5,2,5,1,1,2,1,1,1,1,3,4,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,5,4,1,1,1,1,1,5,1,2,4,1,1,1,1,1,3,3,2,1,1,4,1,1,5,5,1,1,1,1,1,2,5,1,4,1,1,1,1,1,1,2,1,1,5,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,3,1,1,3,1,3,1,4,1,5,4,1,1,2,1,1,5,1,1,1,1,1,5,1,1,1,1,1,1,1,1,1,4,1,1,4,1,1,1,1,1,1,1,5,4,1,2,1,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,1,4,1,1,1,2,1,4,1,1,1,1,1,1,1,1,1,4,2,1,2,1,1,4,1,1,1,1,1,1,3,1,1,1,1,1,1,1,1,3,2,1,4,1,5,1,1,1,4,5,1,1,1,1,1,1,5,1,1,5,1,2,1,1,2,4,1,1,2,1,5,5,3`

// const input = `3,4,3,1,2`
// const buckets = {
//   0: 0,
//   1: 0,
//   2: 0,
//   3: 0,
//   4: 0,
//   5: 0,
//   6: 0,
//   7: 0,
//   8: 0
// }

function parseInput() {
  return input.split(',').map(a=>parseInt(a))
}

function solution1() {
  let data = parseInput()
  let days =  80;
  let fish6 = 0;

  let buckets = Array.from({length: 9}, ()=>0)

  // sort out the buckets
  data.forEach(fish => {
    buckets[fish] += 1;
  })

  console.log(buckets)

  for (let i = 1; i <= days; i++) {
    for (let j = 0; j < buckets.length; j++) {
      if (j == 8) continue;

      if (j == 0)  {
        fish6 = buckets[j]
      }

      buckets[j] = buckets[j+1]
    }
    buckets[6] += fish6
    buckets[8] = fish6
    // console.log(buckets)
    // if (i == 4) break;
  }

  console.log(buckets.reduce((a,b) => a+b))
}

function solution2() {
  let data = parseInput()
  let days =  256;
  let fish6 = 0;

  let buckets = Array.from({length: 9}, ()=>0)

  // sort out the buckets
  data.forEach(fish => {
    buckets[fish] += 1;
  })

  console.log(buckets)

  for (let i = 1; i <= days; i++) {
    for (let j = 0; j < buckets.length; j++) {
      if (j == 8) continue;

      if (j == 0)  {
        fish6 = buckets[j]
      }

      buckets[j] = buckets[j+1]
    }
    buckets[6] += fish6
    buckets[8] = fish6
    // console.log(buckets)
    // if (i == 4) break;
  }

  console.log(buckets.reduce((a,b) => a+b))
}

solution1();
solution2();