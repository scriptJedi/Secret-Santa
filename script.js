const techArr = ["Alex Tech", "Eugen Tech", "Vlada Tech", "Igor Tech"],
  bayerArr = [
    "AS",
    "ADD",
    "KKD",
    "DK",
    "OO",
    "RA",
    "VOO",
    "DM",
    "OV",
    "KH",
    "VD",
    "AK",
    "VP",
    "NG",
    "AH",
  ],
  hrArr = ["Katya HR", "Julia HR", "Vika HR"],
  btn = document.querySelector("button[data-get-couple]"),
  counter = document.getElementById("counter"),
  personOne = document.getElementById("person1"),
  personTwo = document.getElementById("person2");

let count = 0;
let punchAggency = new Set([...techArr, ...hrArr, ...bayerArr]);

btn.addEventListener("click", () => {
  const totalNumber = punchAggency.size - 1;

  if (count !== punchAggency.size) {
    count++;
    counter.innerText = `Пара номер: ${count}`;
  }

  const getRndNum = (min = 0, max = totalNumber) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getPair = () => {
    if (punchAggency.size < 2) {
      console.log("Not enough people for a pair.");
      btn.disabled = true;
      return null;
    }

    const workingArray = [...punchAggency];

    let firstIndex = getRndNum(0, workingArray.length - 1);
    let secondIndex = getRndNum(0, workingArray.length - 1);

    while (firstIndex === secondIndex) {
      secondIndex = getRndNum(0, workingArray.length - 1);
    }

    const firstPerson = workingArray[firstIndex];
    const secondPerson = workingArray[secondIndex];

    punchAggency.delete(firstPerson);
    punchAggency.delete(secondPerson);

    console.log(`${firstPerson} and ${secondPerson}`);

    if (totalNumber < 1) {
      console.log("Not enough people for a pair.");
      btn.disabled = true;
      return null;
    }

    personOne.innerText = firstPerson;
    personTwo.innerText = secondPerson;

    return [firstPerson, secondPerson];
  };

  getPair();
});
