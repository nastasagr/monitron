function updateElement(id, property, value) {
  const el = document.getElementById(id);
  if (!el) return;

  // style property
  if (property.startsWith("style.")) {
    const styleProp = property.split(".")[1];
    el.style[styleProp] = value;
    return;
  }

  // element property
  el[property] = value;
}

module.exports = {
  updateElement,
};
