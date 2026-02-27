const { shell } = require("electron");
const si = require("systeminformation");

// const github = document.getElementById("github");

// /**
//  *   Project Repository
//  */
// github.addEventListener("click", () => {
//   shell.openExternal("https://github.com/nastasagr/monitron");
// });

/**
 *   Updatable Callback
 */
async function updateStats() {
  const cpuLoad = await si.currentLoad();
  const mem = await si.mem();
  const cpu = await si.cpu();

  document.getElementById("cpu").innerText =
    cpuLoad.currentLoad.toFixed(1) + "%";

  // document.getElementById("ram").innerText =
  //   ((mem.used / mem.total) * 100).toFixed(1) + "%";

  document.getElementById("model").innerText =
    cpu.manufacturer + " " + cpu.brand;

  document.getElementById("cores").innerText = cpu.cores;
  document.getElementById("cache").innerText = cpu.governor
}

setInterval(updateStats, 1000);
updateStats();
