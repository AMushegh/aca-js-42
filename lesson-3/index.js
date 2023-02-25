const payments = [
  {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe", // Name of the student
    payedAmount: 1600, // Amount payed with this transaction
    year: 2020, // The payment year
  },
  {
    studentId: 1, // Unique for each student
    studentName: "John Doe",
    payedAmount: 1500,
    year: 2021,
  },
  {
    studentId: 1, // Unique for each student
    studentName: "John Doe",
    payedAmount: 1400,
    year: 2022,
  },
  {
    studentId: 1, // Unique for each student
    studentName: "John Doe",
    payedAmount: 1300,
    year: 2023,
  },
  {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1500,
    year: 2020,
  },
  {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1400,
    year: 2021,
  },
  {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1300,
    year: 2023,
  },
  {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1200,
    year: 2023,
  },
  {
    studentId: 3, // Unique for each student
    studentName: "John smith",
    payedAmount: 77,
    year: 2023,
  },
  {
    studentId: 3, // Unique for each student
    studentName: "John smith",
    payedAmount: 1000,
    year: 2023,
  },
  {
    studentId: 4, // Unique for each student
    studentName: "Karen",
    payedAmount: 41111,
    year: 2023,
  },
];

const allPayments = (payments) => {
  const res = [];
  const ids = [];

  for (const payment of payments) {
    const temp = ids.indexOf(payment.studentId);

    if (temp === -1) {
      res.push({
        studentId: payment.studentId,
        studentName: payment.studentName,
        total: payment.payedAmount,
      });
      ids.push(payment.studentId);
    } else {
      res[temp].total += payment.payedAmount;
    }
  }

  return res;
};

console.log(allPayments(payments));
