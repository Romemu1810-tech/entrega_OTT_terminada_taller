// ================== CANVAS ==================
const canvas = document.getElementById("firmaCanvas");
const ctx = canvas.getContext("2d");

const scale = window.devicePixelRatio || 1;
const canvasHeightCSS = 120;




const previewCanvas = document.getElementById("previewCanvas");
const previewCtx = previewCanvas.getContext("2d");
const img = document.getElementById("docImg");

img.onload = () => {
    previewCanvas.width = img.width;
    previewCanvas.height = img.height;
};




canvas.width = canvas.offsetWidth * scale;
canvas.height = canvasHeightCSS * scale;

ctx.scale(scale, scale);
ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.lineCap = "round";
ctx.lineJoin = "round";

let drawing = false;

// ================== USUARIOS ==================
let usuario = 0;

const roles = [
    "PERSONAL DE ALMACÉN",
    "PERSONAL DE TALLER",
    "GERENCIA"
];

const nombres = ["", "", ""];
const firmas = [null, null, null];

const CAMPOS = {
    0: { nombre: [90, 508],  firma: [90, 528] },
    1: { nombre: [340, 508], firma: [340, 528] },
    2: { nombre: [560, 508], firma: [560, 528] }
};

// ================== HELPERS ==================
function getPos(e) {
    const rect = canvas.getBoundingClientRect();
    if (e.touches) {
        return {
            x: e.touches[0].clientX - rect.left,
            y: e.touches[0].clientY - rect.top
        };
    }
    return { x: e.offsetX, y: e.offsetY };
}

function limpiar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function guardarActual() {
    nombres[usuario] = document.getElementById("nombre").value;
    firmas[usuario] = canvas.toDataURL("image/png");
}

function cargarActual() {
    document.getElementById("titulo").innerText =
        "Firmando: " + roles[usuario];

    document.getElementById("nombre").value = nombres[usuario] || "";
    limpiar();

    if (firmas[usuario]) {
        const img = new Image();
        img.onload = () => ctx.drawImage(img, 0, 0);
        img.src = firmas[usuario];
    }
}





function actualizarPreview() {
    previewCtx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);

    for (let i = 0; i <= usuarioActual; i++) {
        if (!nombres[i] || !firmas[i]) continue;

        const [nx, ny] = CAMPOS[i].nombre;
        const [fx, fy] = CAMPOS[i].firma;

        // Dibujar nombre
        previewCtx.font = "16px Arial";
        previewCtx.fillStyle = "black";
        previewCtx.fillText(nombres[i], nx, ny);

        // Dibujar firma
        const imgFirma = new Image();
        imgFirma.src = firmas[i];
        imgFirma.onload = () => {
            previewCtx.drawImage(imgFirma, fx, fy, 150, 50);
        };
    }
}



// ================== EVENTOS CANVAS ==================
// Mouse
canvas.addEventListener("mousedown", e => {
    drawing = true;
    const p = getPos(e);
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
});

canvas.addEventListener("mousemove", e => {
    if (!drawing) return;
    const p = getPos(e);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
});

canvas.addEventListener("mouseup", () => drawing = false);
canvas.addEventListener("mouseleave", () => drawing = false);

// Touch
canvas.addEventListener("touchstart", e => {
    e.preventDefault();
    drawing = true;
    const p = getPos(e);
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
}, { passive: false });

canvas.addEventListener("touchmove", e => {
    e.preventDefault();
    if (!drawing) return;
    const p = getPos(e);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
}, { passive: false });

canvas.addEventListener("touchend", () => drawing = false);

// ================== NAVEGACIÓN ==================
function siguiente() {
    const nombre = document.getElementById("nombre").value.trim();
    if (!nombre) {
        alert("Ingrese el nombre");
        return;
    }

    nombres[usuarioActual] = nombre;
    firmas[usuarioActual] = firmaCanvas.toDataURL();

    actualizarPreview();   // 👈 NUEVO

    limpiar();

    if (usuarioActual < 2) {
        usuarioActual++;
        actualizarTitulo();
    }
}


function anterior() {
    guardarActual();
    usuario = (usuario + 2) % 3;
    cargarActual();
}

// ================== PDF ==================
async function generarPDF() {
    guardarActual();

    const pdfBytes = await fetch("assets/ENTREGA_OTT04046-2025.pdf")
        .then(r => r.arrayBuffer());

    const pdfDoc = await PDFLib.PDFDocument.load(pdfBytes);
    const page = pdfDoc.getPages()[0];
    const font = await pdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);
    
    const pageHeight = page.getHeight();

    for (let i = 0; i < 3; i++) {
        if (!nombres[i] || !firmas[i]) continue;

        // -------- Nombre --------
        const [xN, yN] = CAMPOS[i].nombre;
        page.drawText(nombres[i], {
            x: xN,
            y: pageHeight - yN - 10,
            size: 10,
            font
        });

        // -------- Firma --------
        const imgBytes = await fetch(firmas[i]).then(r => r.arrayBuffer());
        const img = await pdfDoc.embedPng(imgBytes);

        const [xF, yF] = CAMPOS[i].firma;
        page.drawImage(img, {
            x: xF,
            y: pageHeight - yF - 40,
            width: 160,
            height: 45
        });
    }

    const finalPdf = await pdfDoc.save();
    const blob = new Blob([finalPdf], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);

    // GitHub Pages / móviles: abrir visor
    window.open(url, "_blank");
}

// ================== INIT ==================
cargarActual();









