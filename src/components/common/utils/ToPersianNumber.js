const toPersianNumber = (number) => {
    const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
    return number
      .toString()
      .replace(/\d/g, (digit) => persianDigits[digit]);
  };

export default toPersianNumber