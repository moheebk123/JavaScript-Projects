const calculateTemp = () => {
  const temp = document.getElementById("temp").value;

  const degree = document.getElementById("degree");

  const valueTemp = degree.options[degree.selectedIndex].value;

  const celToFah = (temp) => Math.round((temp / 5) * 9 + 32);
  const fehToCel = (temp) => Math.round(((temp - 32) * 5) / 9);

  let result;
  if (valueTemp == "cel") {
    result = celToFah(temp);
    document.getElementById("output").innerHTML = `${result} Fahrenheit`;
  } else {
    result = fehToCel(temp);
    document.getElementById("output").innerHTML = `${result} Celsius`;
  }
};
