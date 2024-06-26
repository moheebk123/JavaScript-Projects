const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  counter.innerHTML = 0;
  const updateCounter = () => {
    const targetCount = +counter.getAttribute("data-target");
    const startingCount = Number(counter.innerHTML);
    if (startingCount < targetCount) {
      counter.innerHTML = `${startingCount + 5}`;
      setTimeout(updateCounter, 50);
    } else {
      counter.innerHTML = targetCount;
    }
  };
  updateCounter();
});
