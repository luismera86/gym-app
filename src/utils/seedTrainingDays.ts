
export const seedTrainingDays = (month: number, year: number) => { 
  let date = new Date(year, month, 1);
  const trainingDays = [];
  while (date.getMonth() === month) {
    const day = date.getDay();
    if (day < 6 && day > 0) {
      let dayOfMonth = {
        date: date.toISOString().split("T")[0],
        day: date.getDay() === 1 ? "Lunes" : date.getDay() === 2 ? "Martes" : date.getDay() === 3 ? "Miércoles" : date.getDay() === 4 ? "Jueves" : date.getDay() === 5 ? "Viernes" : "",
      };
      
      trainingDays.push(dayOfMonth);
    }
    date.setDate(date.getDate() + 1);
  }
  return trainingDays;
  }
 