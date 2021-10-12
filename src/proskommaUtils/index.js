import { Proskomma } from "proskomma";

export const initializeProskomma = async (subDir) => {
  console.time("Init Proskomma");
  const pk = new Proskomma();
  const bookNumbers = [...Array(28).keys()].slice(1);

  for await (const bookNumber of bookNumbers) {
    const paddedBookNumber = bookNumber.toString().padStart(2, "0");
    console.log(`Load ${paddedBookNumber}`);
    const bookData = await import(`../data/${subDir}/${paddedBookNumber}.json`);
    console.log(bookData.default);
    await pk.loadSuccinctDocSet(bookData);
  }

  console.timeEnd("Init Proskomma");
  return pk;
};
