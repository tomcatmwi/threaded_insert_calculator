//  Everything is in millimeters

filaments = {

    "pla": {

        name: "PLA",

        //  Multiplier to get hole size from insert size
        adjustment: 0.93,

        //  Hole shrinkage, by diameter, in millimeters
        shrinkage: [
            // hole size minimum, hole size maximum, shrinkage at minimum size, shrinkage at maximum size
            [0, 6, -0.15, -0.30],
            [6, 12, -0.20, -0.40],
            [12, 20, -0.10, 0.00]
        ]
    },

    "plaplus": {
        name: "PLA+",
        adjustment: 0.94,
        shrinkage: [
            [0, 6,  -0.12, -0.25],
            [6, 12, -0.18, -0.35],
            [12, 20, -0.08, 0.00]
        ]
    },

    "petg": {
        name: "PETG",
        adjustment: 0.92,
        shrinkage: [
            [0, 6,  -0.15, -0.30],
            [6, 12, -0.20, -0.40],
            [12, 20, -0.10, 0.00]
        ]
    },

    "pet": {
        name: "PET",
        adjustment: 0.94,
        shrinkage: [
            [0, 6,  -0.10, -0.25],
            [6, 12, -0.15, -0.30],
            [12, 20, -0.05, 0.00]
        ]
    },

    "abs": {
        name: "ABS",
        adjustment: 0.90,
        shrinkage: [
            [0, 6,  -0.20, -0.40],
            [6, 12, -0.30, -0.50],
            [12, 20, -0.20, -0.10]
        ]
    },

    "asa": {
        name: "ASA",
        adjustment: 0.91,
        shrinkage: [
            [0, 6,  -0.18, -0.35],
            [6, 12, -0.25, -0.45],
            [12, 20, -0.15, -0.05]
        ]
    },

    "pc": {
        name: "PC",
        adjustment: 0.95,
        shrinkage: [
            [0, 6,  -0.10, -0.20],
            [6, 12, -0.15, -0.30],
            [12, 20, -0.05, 0.00]
        ]
    },

    "pcabs": {
        name: "PC-ABS",
        adjustment: 0.93,
        shrinkage: [
            [0, 6,  -0.15, -0.30],
            [6, 12, -0.20, -0.40],
            [12, 20, -0.10, 0.00]
        ]
    },

    "nylon": {
        name: "Nylon (PA)",
        adjustment: 0.90,
        shrinkage: [
            [0, 6,  -0.25, -0.50],
            [6, 12, -0.35, -0.60],
            [12, 20, -0.25, -0.15]
        ]
    },

    "nyloncfgf": {
        name: "Nylon (CF/GF)",
        adjustment: 0.96,
        shrinkage: [
            [0, 6,  -0.05, -0.15],
            [6, 12, -0.08, -0.20],
            [12, 20, -0.05, 0.00]
        ]
    },

    "tpu": {
        name: "TPU",
        adjustment: 0.97,
        shrinkage: [
            [0, 6,  -0.05, -0.15],
            [6, 12, -0.08, -0.20],
            [12, 20, -0.05, 0.00]
        ]
    }
}

bolts = [
    ["M1", 1.1, 1.2, 1.3],
    ["M1.2", 1.3, 1.4, 1.5],
    ["M1.4", 1.5, 1.6, 1.8],
    ["M1.6", 1.7, 1.8, 2.0],
    ["M1.8", 2.0, 2.1, 2.2],
    ["M2", 2.2, 2.4, 2.6],
    ["M2.2", 2.4, 2.6, 2.8],
    ["M2.5", 2.7, 2.8, 3.1],
    ["M3", 3.2, 3.35, 3.6],
    ["M3.5", 3.7, 3.9, 4.2],
    ["M4", 4.3, 4.5, 4.8],
    ["M4.5", 4.8, 5.0, 5.3],
    ["M5", 5.3, 5.5, 5.8],
    ["M6", 6.4, 6.5, 7.0],
    ["M7", 7.4, 7.8, 8.0],
    ["M8", 8.4, 9.0, 10.0],
    ["M10", 10.5, 11.0, 12.0],
    ["M12", 13.0, 14.0, 15.0],
    ["M16", 17.0, 18.0, 19.0],
    ["M20", 21.0, 22.0, 24.0],
    ["M24", 25.0, 26.0, 28.0],
    ["M30", 31.0, 33.0, 35.0],
    ["M33", 34.0, 36.0, 38.0],
    ["M36", 37.0, 39.0, 42.0],
    ["M39", 40.0, 42.0, 45.0],
    ["M42", 43.0, 45.0, 48.0],
    ["M45", 46.0, 48.0, 52.0],
    ["M48", 50.0, 52.0, 56.0]
];

window.onload = () => {
  const filament_select = document.getElementById('filament');
  Object.keys(filaments).forEach(key => {
    const o = document.createElement('option');
    o.value = key;
    o.innerHTML = filaments[key].name;
    filament_select.append(o);
  });

}
