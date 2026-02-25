const si = require("systeminformation");

async function updateStats() {
  const cpuLoad = await si.currentLoad();
  const mem = await si.mem();
  const cpu = await si.cpu();

  document.getElementById("cpu").innerText =
    cpuLoad.currentLoad.toFixed(1) + "%";

  document.getElementById("ram").innerText =
    ((mem.used / mem.total) * 100).toFixed(1) + "%";

  document.getElementById("model").innerText =
    cpu.manufacturer + " " + cpu.brand;
}

setInterval(updateStats, 1000);
updateStats();