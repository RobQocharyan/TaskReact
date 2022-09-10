const arr = [
  {
    id: 15560,
    firstName: "Վարդան",
    lastName: "Սարգսյան",
    age: "15",
    entryDate: "2020-01-02",
    oneDaySalary: 36,
  },
  {
    id: 15561,
    firstName: "Սուրիկ",
    lastName: "Գինոսյան",
    age: "17",
    entryDate: "2020-03-02",
    oneDaySalary: 157,
  },
  {
    id: 1556,
    firstName: "Աննա",
    lastName: "Կիրակոսյան",
    age: "1",
    entryDate: "2020-03-15",
    oneDaySalary: 590,
  },
  {
    id: 15563,
    firstName: "Սիմոնա",
    lastName: "Գալստյան",
    age: "20",
    entryDate: "2020-11-10",
    oneDaySalary: 600,
  },
  {
    id: 15564,
    firstName: "Գագիկ",
    lastName: "Ծատուրյան",
    age: "21",
    entryDate: "2020-09-10",
    oneDaySalary: 750,
  },
];

const getRow = (item: ItableData, headers: Array<string>) => {
  return headers.map((header: string) => {
    return <td>{item[header as keyof ItableData]}</td>;
  });
};

const getDuration = (item: ItableData) => {
  const lastDate = new Date("2021-02-03").getTime();
  return (
    (lastDate - new Date(item.entryDate).getTime()) / (60 * 60 * 24 * 1000)
  );
};

export { arr, getRow, getDuration };
