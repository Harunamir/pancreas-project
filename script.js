function showInfo(part) {
  function showInfo(part) {
  const infoDiv = document.getElementById("info");
  infoDiv.innerHTML = `<h3>${part}</h3><p>More information about ${part}...</p>`;

  // Flash highlight effect
  infoDiv.style.backgroundColor = "#ffeb3b";
  setTimeout(() => {
    infoDiv.style.backgroundColor = "transparent";
  }, 400);
}

  const info = {
    "Head of Pancreas": `
      <h2>Head of Pancreas</h2>
      <p>The head is the widest part of the pancreas and lies within the curve of the duodenum. It receives secretions from the bile duct.</p>
    `,
    "Body of Pancreas": `
      <h2>Body of Pancreas</h2>
      <p>The body lies behind the stomach and connects the head to the tail. It contains ducts that carry enzymes to aid digestion.</p>
    `,
   "spleen": `
      <h2>spleen</h2>
      <p>Injuries or tumors at the tail may involve the spleen due to their close proximity.</p>
    `,
   "C-shaped curve of the duodenum": `
      <h2>C-shaped curve of the duodenum</h2>
      <p>The head is the widest part of the pancreas and lies in the C-shaped curve of the duodenum.</p>
    `,
  "superior mesenteric artery": `
      <h2>superior mesenteric artery</h2>
      <p>superior mesenteric artery(SMA) passes between the neck and the uncinate process.</p>
    `,
  "superior mesenteric vein": `
      <h2>superior mesenteric vein</h2>
      <p>.</p>
    `,
    "Tail of Pancreas": `
      <h2>Tail of Pancreas</h2>
      <p>The tail is the narrowest part and extends toward the spleen. It contains a high concentration of endocrine cells (islets of Langerhans).</p>
    `
  };

  const infoBox = document.getElementById("info");
  infoBox.innerHTML = info[part] || "<p>No information available.</p>";
  infoBox.classList.add("visible");
}
