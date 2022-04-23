window.collected = 0;

const storage = document.getElementById('get-collected-number');
const milestoneList = document.getElementById('milestones');
const cockButton = document.getElementById('cock-button');

// Milestone
var nextMil = 10;
var needed = nextMil * 10;

cockButton.onclick = function () {
  window.collected += 1;
  needed -= 1;

  if (needed <= 0) {
    let cockMilestone = document.createElement('li');
    cockMilestone.appendChild(document.createTextNode(`${window.collected} 🐓`));
    milestoneList.appendChild(cockMilestone);

    nextMil = 10;
    needed = nextMil * 10;
  }

  storage.innerText = `${
    window.collected === 1 ? `${window.collected} cock` : `${window.collected} cocks`
  } inside you(r farm) 😳😳😳😳😳`;
};
