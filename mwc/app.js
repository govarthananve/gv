// Material data with density factors and colors
const materialsData = {
  Steel: { factor: 1.0, color: "#71797E", density: "7.85 g/cm³" },
  "Stainless 300 Series": {
    factor: 1.03,
    color: "#CFD4D9",
    density: "8.00 g/cm³",
  },
  "Stainless 400 Series": {
    factor: 1.01,
    color: "#CFD4D9",
    density: "7.80 g/cm³",
  },
  "Aluminum 1100": { factor: 0.3462, color: "#D9DAD9", density: "2.71 g/cm³" },
  "Aluminum 2011": { factor: 0.3604, color: "#D9DAD9", density: "2.83 g/cm³" },
  "Aluminum 2014": { factor: 0.3568, color: "#D9DAD9", density: "2.80 g/cm³" },
  "Aluminum 2017": { factor: 0.3568, color: "#D9DAD9", density: "2.80 g/cm³" },
  "Aluminum 2024": { factor: 0.3533, color: "#D9DAD9", density: "2.78 g/cm³" },
  "Aluminum 3003": { factor: 0.3498, color: "#D9DAD9", density: "2.73 g/cm³" },
  "Aluminum 5005": { factor: 0.3462, color: "#D9DAD9", density: "2.70 g/cm³" },
  "Aluminum 5052": { factor: 0.3427, color: "#D9DAD9", density: "2.68 g/cm³" },
  "Aluminum 5056": { factor: 0.3356, color: "#D9DAD9", density: "2.64 g/cm³" },
  "Aluminum 5083": { factor: 0.3392, color: "#D9DAD9", density: "2.66 g/cm³" },
  "Aluminum 5086": { factor: 0.3392, color: "#D9DAD9", density: "2.66 g/cm³" },
  "Aluminum 6061": { factor: 0.3462, color: "#D9DAD9", density: "2.70 g/cm³" },
  "Aluminum 6063": { factor: 0.3462, color: "#D9DAD9", density: "2.70 g/cm³" },
  "Aluminum 7050": { factor: 0.3568, color: "#D9DAD9", density: "2.83 g/cm³" },
  "Aluminum 7075": { factor: 0.3568, color: "#D9DAD9", density: "2.81 g/cm³" },
  "Aluminum 7178": { factor: 0.3604, color: "#D9DAD9", density: "2.83 g/cm³" },
  "Nickel 200": { factor: 1.132, color: "#727472", density: "8.90 g/cm³" },
  "Nickel 400": { factor: 1.125, color: "#727472", density: "8.80 g/cm³" },
  "Nickel R-405": { factor: 1.121, color: "#727472", density: "8.83 g/cm³" },
  "Nickel K-500": { factor: 1.075, color: "#727472", density: "8.44 g/cm³" },
  "Nickel 600": { factor: 1.072, color: "#727472", density: "8.47 g/cm³" },
  "Nickel 625": { factor: 1.075, color: "#727472", density: "8.44 g/cm³" },
  "Nickel 800H": { factor: 1.012, color: "#727472", density: "7.94 g/cm³" },
  "Nickel 800AT": { factor: 1.012, color: "#727472", density: "7.94 g/cm³" },
  "Nickel 825": { factor: 1.037, color: "#727472", density: "8.14 g/cm³" },
  "Nickel 330": { factor: 1.012, color: "#727472", density: "7.94 g/cm³" },
  "Nickel 20": { factor: 1.03, color: "#727472", density: "8.08 g/cm³" },
  "Nickel C-276": { factor: 1.132, color: "#727472", density: "8.89 g/cm³" },
  "Nickel 2545MD": { factor: 1.012, color: "#727472", density: "7.94 g/cm³" },
  Magnesium: { factor: 0.229, color: "#c1c2c3", density: "1.74 g/cm³" },
  Beryllium: { factor: 0.236, color: "#c0c0c0", density: "1.85 g/cm³" },
  Titanium: { factor: 0.575, color: "#7A7772", density: "4.51 g/cm³" },
  Zirconium: { factor: 0.812, color: "#EDF0F1", density: "6.52 g/cm³" },
  "Cast Iron": { factor: 0.911, color: "#61666A", density: "7.20 g/cm³" },
  Zinc: { factor: 0.911, color: "#BAC4C8", density: "7.14 g/cm³" },
  Brass: { factor: 1.084, color: "#C49E5B", density: "8.50 g/cm³" },
  Columbium: { factor: 1.095, color: "#727472", density: "8.57 g/cm³" },
  Copper: { factor: 1.144, color: "#B87333", density: "8.96 g/cm³" },
  Molybdenum: { factor: 1.303, color: "#96919c", density: "10.22 g/cm³" },
  Silver: { factor: 1.339, color: "#C0C0C0", density: "10.49 g/cm³" },
  Lead: { factor: 1.448, color: "#212121", density: "11.34 g/cm³" },
  Tantalum: { factor: 2.12, color: "#A0A0AB", density: "16.69 g/cm³" },
  Tungsten: { factor: 2.462, color: "#b5ac9f", density: "19.25 g/cm³" },
  Gold: { factor: 2.466, color: "#FFD700", density: "19.32 g/cm³" },
};

const shapesData = {
  Round: {
    params: ["Diameter", "Length"],
    formula: "2.6729 * d² * factor * length * quantity",
    image: "round",
  },
  Square: {
    params: ["Width", "Length"],
    formula: "3.4032 * width² * factor * length * quantity",
    image: "square",
  },
  Rectangle: {
    params: ["Thickness", "Width", "Length"],
    formula: "3.4032 * thickness * width * length * factor * quantity",
    image: "rectangle",
  },
  Hexagonal: {
    params: ["Diameter", "Length"],
    formula: "2.9473 * d² * factor * length * quantity",
    image: "hexagon",
  },
  Octagonal: {
    params: ["Diameter", "Length"],
    formula: "2.8193 * d² * factor * length * quantity",
    image: "octagon",
  },
  Plate: {
    params: ["Thickness", "Width", "Length"],
    formula: "3.4032 * thickness * width * length * factor * quantity",
    image: "plate",
  },
  Pipe: {
    params: ["Outer Diameter", "Wall", "Length"],
    formula: "10.68 * (OD - wall) * wall * factor * length * quantity",
    image: "pipe",
  },
  Ring: {
    params: ["Outer Diameter", "Inner Diameter", "Thickness"],
    formula: "0.22274 * thickness * (OD² - ID²) * factor * quantity",
    image: "ring",
  },
};

// Initialize the application
function init() {
  console.log("Initializing application...");

  // Load materials and shapes first (these don't depend on Three.js)
  loadMaterials();
  loadShapes();

  // Try to initialize Three.js
  try {
    if (typeof THREE !== "undefined") {
      initThreeJS();
    } else {
      console.warn("Three.js not loaded, continuing without 3D visualization");
    }
  } catch (error) {
    console.error("Error initializing Three.js:", error);
  }

  // Event listeners
  document.getElementById("shape").addEventListener("change", updateDimensions);
  document
    .getElementById("material")
    .addEventListener("change", updateVisualization);
  document
    .getElementById("shape")
    .addEventListener("change", updateVisualization);
}

function loadMaterials() {
  console.log("Loading materials...");
  const materialSelect = document.getElementById("material");
  if (!materialSelect) {
    console.error("Material select element not found");
    return;
  }

  Object.keys(materialsData).forEach((material) => {
    const option = document.createElement("option");
    option.value = material;
    option.textContent = material;
    materialSelect.appendChild(option);
  });
  console.log(`Loaded ${Object.keys(materialsData).length} materials`);
}

function loadShapes() {
  console.log("Loading shapes...");
  const shapeSelect = document.getElementById("shape");
  if (!shapeSelect) {
    console.error("Shape select element not found");
    return;
  }

  Object.keys(shapesData).forEach((shape) => {
    const option = document.createElement("option");
    option.value = shape;
    option.textContent = shape;
    shapeSelect.appendChild(option);
  });
  console.log(`Loaded ${Object.keys(shapesData).length} shapes`);
}

function updateDimensions() {
  const shape = document.getElementById("shape").value;
  const dimensionsDiv = document.getElementById("dimensions");

  // Hide results when shape changes
  document.getElementById("results").classList.add("hidden");

  if (!shape) {
    dimensionsDiv.innerHTML = "";
    return;
  }

  const params = shapesData[shape].params;
  let html = "";

  params.forEach((param, index) => {
    html += `
            <div class="dimension-row">
                <label class="dimension-label">${param}</label>
                <div class="dimension-input">
                    <div class="form-group">
                        <input type="number" id="param${
                          index + 1
                        }" step="0.001" min="0.001" placeholder="Enter ${param.toLowerCase()}">
                    </div>
                    <div class="form-group">
                        <select id="unit${index + 1}">
                            <option value="in">in</option>
                            <option value="ft">ft</option>
                            <option value="yd">yd</option>
                            <option value="mm">mm</option>
                            <option value="cm">cm</option>
                            <option value="m">m</option>
                        </select>
                    </div>
                </div>
            </div>
        `;
  });

  dimensionsDiv.innerHTML = html;

  // Add event listeners to the new inputs
  params.forEach((param, index) => {
    const inputElement = document.getElementById(`param${index + 1}`);
    const unitElement = document.getElementById(`unit${index + 1}`);

    if (inputElement) {
      inputElement.addEventListener("input", updateVisualization);
    }
    if (unitElement) {
      unitElement.addEventListener("change", updateVisualization);
    }
  });

  updateVisualization();
}

function updateVisualization() {
  const material = document.getElementById("material").value;
  const shape = document.getElementById("shape").value;

  if (!shape) return;

  const color = material ? materialsData[material].color : "#8C9196";
  const shapeInfo = document.getElementById("shapeInfo");
  const materialInfo = document.getElementById("materialInfo");

  // Update material info
  if (material) {
    const matData = materialsData[material];
    materialInfo.innerHTML = `
            <strong>${material}</strong><br>
            Density: ${matData.density}<br>
            Factor: ${matData.factor}
        `;
  } else {
    materialInfo.innerHTML = "";
  }

  // Collect user input dimensions for 3D visualization
  const dimensions = {};
  const shapeData = shapesData[shape];

  if (shapeData && shapeData.params) {
    shapeData.params.forEach((param, index) => {
      const valueElement = document.getElementById(`param${index + 1}`);
      const unitElement = document.getElementById(`unit${index + 1}`);

      if (valueElement && valueElement.value && unitElement) {
        const value = parseFloat(valueElement.value);
        const unit = unitElement.value;

        if (value > 0) {
          // Convert all dimensions to inches for consistency in 3D visualization
          const valueInInches = convertToInches(value, unit);

          // Map parameter names to dimension object properties
          const paramLower = param.toLowerCase();
          if (paramLower.includes("diameter")) {
            if (paramLower.includes("outer")) {
              dimensions.outerDiameter = valueInInches;
            } else if (paramLower.includes("inner")) {
              dimensions.innerDiameter = valueInInches;
            } else {
              dimensions.diameter = valueInInches;
            }
          } else if (paramLower.includes("width")) {
            dimensions.width = valueInInches;
          } else if (paramLower.includes("length")) {
            dimensions.length = valueInInches;
          } else if (paramLower.includes("thickness")) {
            dimensions.thickness = valueInInches;
          } else if (paramLower.includes("wall")) {
            dimensions.wall = valueInInches;
          }
        }
      }
    });
  }

  console.log(`Shape: ${shape}, Dimensions:`, dimensions);

  // Generate 3D shape based on shape type with dynamic dimensions
  create3DShape(shape, color, dimensions);
  shapeInfo.textContent = `${shape} - ${shapesData[shape].formula}`;
}

function convertToInches(value, unit) {
  switch (unit) {
    case "cm":
      return value / 2.54;
    case "m":
      return (value * 100) / 2.54;
    case "mm":
      return value / 10 / 2.54;
    case "ft":
      return value * 12;
    case "yd":
      return value * 36;
    default:
      return value; // inches
  }
}

function convertToFeet(value, unit) {
  switch (unit) {
    case "cm":
      return value / 2.54 / 12;
    case "m":
      return (value * 100) / 2.54 / 12;
    case "mm":
      return value / 10 / 2.54 / 12;
    case "in":
      return value / 12;
    case "yd":
      return value * 3;
    default:
      return value; // feet
  }
}

function calculateWeight() {
  const material = document.getElementById("material").value;
  const shape = document.getElementById("shape").value;
  const quantity = parseFloat(document.getElementById("quantity").value) || 1;

  if (!material || !shape) {
    alert("Please select both material and shape");
    return;
  }

  const shapeData = shapesData[shape];
  const materialData = materialsData[material];
  const params = [];

  // Get all parameter values and convert to appropriate units
  for (let i = 1; i <= shapeData.params.length; i++) {
    const value = parseFloat(document.getElementById(`param${i}`).value);
    const unit = document.getElementById(`unit${i}`).value;

    if (!value || value <= 0) {
      alert(`Please enter a valid value for ${shapeData.params[i - 1]}`);
      return;
    }

    // Convert based on shape requirements
    if (shape === "Ring" && i === 3) {
      // Ring thickness needs to be in inches
      params.push(convertToInches(value, unit));
    } else if (shape === "Pipe" && i === 3) {
      // Pipe length needs to be in feet
      params.push(convertToFeet(value, unit));
    } else if (
      shape === "Round" ||
      shape === "Square" ||
      shape === "Hexagonal" ||
      shape === "Octagonal"
    ) {
      if (i === 1) {
        // Diameter/Width in inches
        params.push(convertToInches(value, unit));
      } else {
        // Length in feet
        params.push(convertToFeet(value, unit));
      }
    } else {
      // Default: convert to inches for thickness/width/diameter, feet for length
      if (i <= 2 || ((shape === "Rectangle" || shape === "Plate") && i <= 3)) {
        params.push(convertToInches(value, unit));
      } else {
        params.push(convertToFeet(value, unit));
      }
    }
  }

  let weight = 0;

  try {
    switch (shape) {
      case "Round":
        weight =
          2.6729 *
          params[0] *
          params[0] *
          materialData.factor *
          params[1] *
          quantity;
        break;
      case "Square":
        weight =
          3.4032 *
          params[0] *
          params[0] *
          materialData.factor *
          params[1] *
          quantity;
        break;
      case "Rectangle":
      case "Plate":
        weight =
          3.4032 *
          params[0] *
          params[1] *
          params[2] *
          materialData.factor *
          quantity;
        break;
      case "Hexagonal":
        weight =
          2.9473 *
          params[0] *
          params[0] *
          materialData.factor *
          params[1] *
          quantity;
        break;
      case "Octagonal":
        weight =
          2.8193 *
          params[0] *
          params[0] *
          materialData.factor *
          params[1] *
          quantity;
        break;
      case "Pipe":
        weight =
          10.68 *
          (params[0] - params[1]) *
          params[1] *
          materialData.factor *
          params[2] *
          quantity;
        if (weight < 0) {
          alert("Wall thickness cannot exceed outer diameter!");
          return;
        }
        break;
      case "Ring":
        const od = convertToInches(
          parseFloat(document.getElementById("param1").value),
          document.getElementById("unit1").value
        );
        const id = convertToInches(
          parseFloat(document.getElementById("param2").value),
          document.getElementById("unit2").value
        );
        weight =
          0.22274 *
          params[2] *
          (od * od - id * id) *
          materialData.factor *
          quantity;
        if (weight < 0) {
          alert("Inner diameter cannot exceed outer diameter!");
          return;
        }
        break;
    }

    // Display results
    const weightLbs = Math.round(weight * 10000) / 10000;
    const weightKgs = Math.round(weightLbs * 0.453592 * 10000) / 10000;

    document.getElementById("weightLbs").textContent = weightLbs.toFixed(4);
    document.getElementById("weightKgs").textContent = weightKgs.toFixed(4);
    document.getElementById("results").classList.remove("hidden");
  } catch (error) {
    alert("Error in calculation: " + error.message);
  }
}

function clearForm() {
  document.getElementById("material").value = "";
  document.getElementById("shape").value = "";
  document.getElementById("quantity").value = "1";
  document.getElementById("dimensions").innerHTML = "";
  document.getElementById("results").classList.add("hidden");

  // Reset Three.js visualization
  if (currentMesh) {
    scene.remove(currentMesh);
    currentMesh.geometry.dispose();
    currentMesh.material.dispose();
    currentMesh = null;
  }

  document.getElementById("shapeInfo").textContent =
    "Choose a material and shape to see the 3D visualization";
  document.getElementById("materialInfo").innerHTML = "";
}

// Initialize when page loads
window.addEventListener("DOMContentLoaded", init);
