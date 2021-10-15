function canTheyBook(adultsCount = 0, childrenCount = 0, babiesCount = 0) {
  console.log(`canTheyBook(${adultsCount}, ${childrenCount}, ${babiesCount})`);

  let roomCapacity = 8;
  let bookingOrder = adultsCount + childrenCount + babiesCount;

  if (adultsCount >= 1) {
    console.log(`bookingOrder = ${bookingOrder}`);
    if (babiesCount === 0) {
      console.log(`babiesCount === 0, babiesCount = ${babiesCount}`);
      if (
        roomCapacity >= bookingOrder &&
        childrenCount / adultsCount <= 2 &&
        roomCapacity >= adultsCount + childrenCount
      ) {
        console.log(
          `roomCapacity = ${roomCapacity}, bookingOrder = ${bookingOrder}, babiesCount = ${babiesCount}`,
        );
        return true;
      } else {
        console.log(
          `roomCapacity = ${roomCapacity}, bookingOrder = ${bookingOrder}, babiesCount = ${babiesCount}`,
        );
        return false;
      }
    } else if (babiesCount === 1) {
      console.log(`babiesCount === 1, babiesCount = ${babiesCount}`);
      if (
        roomCapacity + 1 >= bookingOrder &&
        childrenCount / adultsCount <= 2 &&
        (childrenCount + babiesCount) / 2 <= adultsCount
      ) {
        console.log(
          `childrenCount / adultsCount <= 2, childrenCount / adultsCount = ${
            childrenCount / adultsCount
          }`,
        );
        console.log(
          `roomCapacity = ${
            roomCapacity + 1
          }, bookingOrder = ${bookingOrder}, babiesCount = ${babiesCount}`,
        );
        return true;
      } else {
        console.log(
          `roomCapacity = ${roomCapacity}, bookingOrder = ${bookingOrder}, babiesCount = ${babiesCount}`,
        );
        return false;
      }
    } else if (babiesCount > 1) {
      console.log(`babiesCount > 1, babiesCount = ${babiesCount}`);
      if (
        (babiesCount / adultsCount <= 2 || childrenCount / adultsCount <= 2) &&
        (childrenCount + babiesCount) / 2 <= adultsCount &&
        roomCapacity + 1 >= bookingOrder
      ) {
        console.log(
          `babiesCount / adultsCount <= 2, babiesCount / adultsCount = ${
            babiesCount / adultsCount
          }`,
        );
        console.log(
          `childrenCount / adultsCount <= 2, childrenCount / adultsCount = ${
            childrenCount / adultsCount
          }`,
        );
        console.log(
          `roomCapacity = ${
            roomCapacity + 1
          }, bookingOrder = ${bookingOrder}, babiesCount = ${babiesCount}`,
        );
        return true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
}

// the same simplified:
function canTheyBook(adultsCount = 0, childrenCount = 0, babiesCount = 0) {
  const hasAdult = adultsCount > 0;
  const hasEnoughAdults = (childrenCount + babiesCount) / 2 <= adultsCount;
  const totalCount = adultsCount + childrenCount + babiesCount;
  const hasEnoughRoom = totalCount <= 8 || (totalCount === 9 && babiesCount > 0);

  return hasAdult && hasEnoughAdults && hasEnoughRoom;
}

canTheyBook(1, 2, 1);
