// https://www.codewars.com/kata/514a024011ea4fb54200004b

const domainName = (url) => {

  const isIncludesPeriod = (domain) => {
    if (domain.includes('.')) {
      return domain.split('.')[0];
    }
    return domain
  }

  if (url.includes('https://www.')) {
    const removeProtocolAndSubdomoain = url.replace('https://www.', '');

    return isIncludesPeriod(removeProtocolAndSubdomoain)
  }

  if (url.includes('http://www.')) {
    const removeProtocolAndSubdomoain = url.replace('http://www.', '');

    return isIncludesPeriod(removeProtocolAndSubdomoain)
  }

  if (url.includes('https://')) {
    const removeProtocolAndSubdomoain = url.replace('https://', '');

    return isIncludesPeriod(removeProtocolAndSubdomoain)
  }

  if (url.includes('http://')) {
    const removeProtocolAndSubdomoain = url.replace('http://', '');

  return isIncludesPeriod(removeProtocolAndSubdomoain)
  }

  if (url.includes('www')) {
    return url.replace('www.', '').split('.')[0];
  }

  return url.split('.')[0];
};
