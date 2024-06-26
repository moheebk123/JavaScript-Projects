const age = document.getElementById("age");
let date = document.getElementById("date");
date.max = new Date().toISOString().split("T")[0];

const getDayInMonth = (year, month) => new Date(year, month, 0).getDate();

const calculateAge = () => {
  let today = new Date();

  let todayDay = today.getDate();
  let todayMonth = today.getMonth() + 1;
  let todayYear = today.getFullYear();

  if (date.value.length != 0) {
    let birthDate = new Date(date.value);

    let birthDay = birthDate.getDate();
    let birthMonth = birthDate.getMonth() + 1;
    let birthYear = birthDate.getFullYear();

    let day,
      month,
      year = todayYear - birthYear;

    if (todayMonth >= birthMonth) {
      month = todayMonth - birthMonth;
    } else {
      year--;
      month = 12 + todayMonth - birthMonth;
    }

    if (todayDay >= birthDay) {
      day = todayDay - birthDay;
    } else {
      month--;
      day = getDayInMonth(birthYear, birthMonth) + todayDay - birthDay;
    }

    if (month < 0) {
      month = 11;
      year--;
    }
    if (year != 0) {
      age.innerHTML = `You are <span>${year}</span> years, <span>${month}</span> month and <span>${day}</span> days old.`;
    } else {
      if (month != 0) {
        age.innerHTML = `You are <span>${month}</span> month and <span>${day}</span> days old.`;
      } else {
        age.innerHTML = `You are <span>${day}</span> days old.`;
      }
    }
  } else {
    age.innerHTML = `<span>Choose a Valid Birth Date</span>`;
  }
};
