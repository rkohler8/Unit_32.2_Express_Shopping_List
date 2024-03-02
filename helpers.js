function getMean(nums) {
  return nums.reduce(function (mean, next) {
    return mean + next;
  }) / nums.length
}

function stringToNumArray(splitNums) {
  let result = [];

  for (let i = 0; i < splitNums.length; i++) {
      let valToNumber = Number(splitNums[i]);

      if (Number.isNaN(valToNumber)) {
        return new Error(
            `The value '${splitNums[i]}' at index ${i} is not a valid number.`
        );
      }

      result.push(valToNumber);
  }
  return result;
}

function getMedian(nums) {
  nums.sort((a, b) => a - b);
  let midpoint = Math.floor(nums.length / 2);

  if (nums.length % 2 === 0) {
    return (nums[midpoint] + nums[midpoint - 1]) / 2;
  } else {
    return nums[midpoint];
  }
}

function createFrequencyCounter(arr) {
  return arr.reduce(function(acc, next) {
    acc[next] = (acc[next] || 0) + 1;
    return acc;
  }, {});
}

function getMode(nums) {
  let freqCounter = createFrequencyCounter(nums);

  let count = 0;
  let mostFrequent;

  for (let key in freqCounter) {
      if (freqCounter[key] > count) {
      mostFrequent = key;
      count = freqCounter[key];
      }
  }

  return +mostFrequent;
}

module.exports = {
  getMean,
  stringToNumArray,
  getMedian,
  getMode,
};