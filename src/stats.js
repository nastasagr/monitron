const { shell } = require("electron");
const si = require("systeminformation");
const { updateElement } = require("./helper");

const toGB = (bytes) => Number((bytes / 1024 / 1024 / 1024).toFixed(2));

async function updateStats() {
  const cpuLoad = await si.currentLoad();
  const mem = await si.mem();
  const cpu = await si.cpu();

  const usedMemory = mem.total - mem.available;
  const percent = ((usedMemory / mem.total) * 100).toFixed(1);

  const systemData = {
    cpu: {
      load: Number(cpuLoad.currentLoad.toFixed(1)),
      cores: cpu.cores,
      manufacturer: cpu.manufacturer + " " + cpu.brand,
    },

    memory: {
      total: toGB(mem.total),
      used: toGB(usedMemory),
      free: toGB(mem.available),
      usage: Number(percent),
    },
  };

  // cpu info elements
  updateElement("cpu", "innerText", systemData.cpu.load + "%");
  updateElement("cpuBar", "style.width", systemData.cpu.load + "%");
  updateElement("model", "innerText", systemData.cpu.manufacturer);
  updateElement("cores", "innerText", cpu.cores);

  // memory info elements
  updateElement("ramTotal", "innerText", systemData.memory.total + " GB");
  updateElement("memUsed", "innerText", systemData.memory.usage + "%");
  updateElement("ramBar", "style.width", systemData.memory.usage + "%");
  updateElement("ramUsed", "innerText", systemData.memory.used + " GB");
  updateElement("ramFree", "innerText", systemData.memory.free + " GB");
}

setInterval(updateStats, 1000);
updateStats();
