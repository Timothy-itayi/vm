// obj/lc3_calculator.js
window.lc3_calculator = new Uint8Array([
    0x2001, // LD R0, NUM1
    0x3002, // LD R1, NUM2
    0x4005, // BR ZEROS
    0x0000, // NUM1: 0 (Default)
    0x0000, // NUM2: 0 (Default)
    
    // Add operation
    0x1602, // ADD R2, R0, R1  (R2 = NUM1 + NUM2)
    0xF025, // HALT (End of the program)
    
    // Subtract operation
    0x1702, // SUB R2, R0, R1  (R2 = NUM1 - NUM2)
    0xF025, // HALT (End of the program)
    
    // Multiply operation
    0x2002, // LD R0, NUM1
    0x3001, // LD R1, NUM2
    0x0000, // Multiply by repeated additions

    0xF025, // HALT (End of the program)
]);
