function listprocessing(iplist) {
  if (iplist.length % 10 !== 0) {
    throw new Error("The list length must be a multiple of 10");
  }

  const filteredList = [];
  for (let i = 0; i < iplist.length; i++) {
    if (iplist[i] % 2 != 0 && iplist[i] % 3 != 0) {
      filteredList.push(iplist[i]);
    }
  }

  return filteredList;
}

module.exports = listprocessing;

