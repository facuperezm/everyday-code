function cyberReindeer(road, time) {
  let results = [road];
  let position = 0;
  let lastChar = ".";

  for (let i = 1; i < time; i++) {
    if (i == 5) road = road.replace(/\|/g, "*");
    const newRoad = road.replace(/S[\.\*]/, `${lastChar}S`);
    if (newRoad != road) {
      position++;
      lastChar = road[position];
    }
    road = newRoad;
    results.push(road);
  }

  return results;
}
