// Buying
const shopList = document.getElementById('shop-list').getElementsByTagName('li');
const storage = document.getElementById('get-collected-number');

var upgrades = [shopList[0], shopList[1], shopList[2], shopList[3]];

upgrades.forEach((upgrade) => {
  var count = upgrade.getElementsByTagName('i')[0];
  var cost = upgrade.getElementsByTagName('i')[1];

  upgrade.addEventListener('click', () => {
    let element = count;
    let intCount = parseInt(element.innerText);

    if (window.collected < parseInt(cost.innerText)) return;

    window.collected -= parseInt(cost.innerText);

    intCount += 1;
    element.innerText = intCount.toString();

    var costAfter = Math.floor(parseInt(cost.innerText) * 1.25);

    cost.innerText = costAfter;

    storage.innerText = `${
      window.collected === 1 ? `${window.collected} cock` : `${window.collected} cocks`
    } inside you(r farm) 😳😳😳😳😳`;
  });

  if (count < 1) return;
});

// Activating upgrades

setInterval(() => {
  const spyCount = parseInt(upgrades[0].getElementsByTagName('i')[0].innerText);
  const scareCockCount = parseInt(upgrades[1].getElementsByTagName('i')[0].innerText);
  const terrainCount = parseInt(upgrades[2].getElementsByTagName('i')[0].innerText);
  const winGame = parseInt(upgrades[3].getElementsByTagName('i')[0].innerText);

  if (spyCount >= 1) window.collected += 1 * spyCount;
  if (scareCockCount >= 1) window.collected += 12 * scareCockCount;
  if (terrainCount >= 1) window.collected += 69 * terrainCount;
  if (winGame >= 1) window.collected += 69696969 * winGame;

  storage.innerText = `${
    window.collected === 1 ? `${window.collected} cock` : `${window.collected} cocks`
  } inside you(r farm) 😳😳😳😳😳`;
}, 1000);
