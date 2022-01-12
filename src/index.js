module.exports = function toReadable (number) {
  // readable 0-999
  const sectionReadable = (numberSection) => {
    let hundredReadable = '';
    let units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if(Number(numberSection[0])) {
      hundredReadable = `${units[Number(numberSection[0])]} hundred `;
    }

    if(Number(numberSection[1]) < 2) {
      return `${hundredReadable}${units[Number(numberSection) % 100]}`;
    }

    return `${hundredReadable}${tens[Number(numberSection[1])]} ${units[Number(numberSection[2])]}`;
  };

  // readable > 999
  const numberReadable = (number) => {
    if (!number) return 'zero';

    let result = '';
    let sectionName = ['', 'thousand ', 'million ', 'billion ', 'trillion ', 'quadrillion '];
    let numberStr = String(number);

    switch(numberStr.length % 3) {
      case 1:
        numberStr = '00' + numberStr;
        break;
      case 2:
        numberStr = '0' + numberStr;
        break;
    }

    for (let i = 0; i < numberStr.length / 3;  i++) {
      let section = numberStr[i * 3] + numberStr[i * 3 + 1] + numberStr[i * 3 + 2];
      result += (section == '000') ? '' : `${sectionReadable(section)} ${sectionName[numberStr.length / 3 - i - 1]}`;
    }

    return result.trim();
  };

  return numberReadable(number);
}
