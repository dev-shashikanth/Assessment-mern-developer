function twoSum(nums, target) {
  //handling errors
  if (!Array.isArray(nums)) {
    throw new Error("nums should be an array.");
  }
  if (typeof target !== "number") {
    throw new Error("'target' should be a number.");
  }
  if (nums.length < 2) {
    throw new Error("'nums' should contain at least two elements.");
  }

  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (complement in obj) {
      return [obj[complement], i];
    }

    obj[nums[i]] = i;
  }

  throw new Error("No two numbers found that add up to the target.");
}

try {
  const nums = [2, 7, 11, 15];
  const target = 9;
  console.log(twoSum(nums, target));
} catch (error) {
  console.error(error.message);
}
