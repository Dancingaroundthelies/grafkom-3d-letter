var triangles = [
    // Z 
    0.05, 0.2, 0.3, // 0
    0.05, 0.42, 0.3,
    0.5, 0.42, 0.3,
    0.5, 0.2, 0.3,
    0.2, -0.2, 0.3,
    0.5, -0.2, 0.3,
    0.5, -0.42, 0.3,
    0.05, -0.42, 0.3,
    0.05, -0.2, 0.3,
    0.6, 0.2, 0.3,
    0.05, 0.2, 0.3, // 10
    // 
    0.05,0.2, 0, // 11
    0.05,0.42, 0,
    0.5,0.42, 0,
    0.5,0.2, 0,
    0.2,-0.2, 0,
    0.5,-0.2, 0,
    0.5,-0.42, 0,
    0.05,-0.42, 0,
    0.05,-0.2, 0,
    0.6,0.2, 0,
    0.05,0.2, 0, // 21

];

// Colors (shades of blue) for each letter
var colors = [
    0.0, 0.0, 1.0,    // Blue color for letter A
    0.0, 0.0, 1.0,    // Blue color for letter A (same color for the back face)

    0.0, 0.0, 1.0,    // Blue color for letter Z
    0.0, 0.0, 1.0,    // Blue color for letter Z
    0.0, 0.0, 1.0,    // Blue color for letter Z
];

// Indices to form triangles for each letter
var indices = [
    // Z index 0
    0, 1, 2,
    0, 2, 3,
    2, 3, 8,
    3, 7, 8,
    5, 6, 7,
    5, 7, 8,
    
    // Z index 0.5
    11, 12, 13,
    11, 13, 14,
    13, 14, 19,
    14, 18, 19,
    16, 17, 18,
    16, 18, 19,
    
    // Hubungan antar Z
    // Bagian atas
    0, 1, 11,
    1, 11, 12,
    1, 2, 12,
    2, 12, 13,
    2, 3, 13,
    3, 13, 14,
    0, 3, 14,
    0, 11, 14,
    
    // bagian tengah
    2, 13, 19,
    2, 8, 19,
    
    3, 14, 18,
    3, 7, 18,
    
    // bagian bawah
    7, 8, 18,
    8, 18, 19,
    6, 7, 18,
    6, 17, 18,
    6, 16, 17,
    5, 6, 16,
    5, 8, 16,
    8, 16, 19,

];
