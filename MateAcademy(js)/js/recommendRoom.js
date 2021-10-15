// Alt+Shift+F - code format correction.
function recommendRoom(adultsCount = 0, childrenCount = 0, babiesCount = 0) {
  // write code here
  const totalOrder = adultsCount + childrenCount + babiesCount;

  if (babiesCount === 0) {
    console.log('babiesCount === 0');
    if (totalOrder <= 4) {
      console.log('totalOrder <= 4 ---> small room');
      return 'small room';
    } else if (totalOrder <= 8) {
      console.log('totalOrder <= 8 ---> big room');
      return 'big room';
    } else {
      console.log('too many people - make an additional room reservation');
      return 'too many people - make an additional room reservation';
    }
  } else if (babiesCount >= 1) {
    console.log('babiesCount >= 1');
    if (totalOrder <= 4) {
      console.log('totalOrder <= 4 ---> small room');
      return 'small room';
    } else if (totalOrder <= 5 && babiesCount >= 1) {
      console.log('totalOrder <= 5 && babiesCount >= 1 ---> small room + extra bed');
      return 'small room + extra bed';
    }
    if (totalOrder <= 8) {
      console.log('totalOrder <= 8 ---> big room');
      return 'big room';
    } else if (totalOrder <= 9 && babiesCount >= 1) {
      console.log('totalOrder <= 9 && babiesCount >= 1 ---> big room + extra bed');
      return 'big room + extra bed';
    } else {
      console.log('too many people - make an additional room reservation');
      return 'too many people - make an additional room reservation';
    }
  } else {
    console.log('What is your order?');
    return 'What is your order?';
  }
}
