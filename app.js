document.addEventListener("DOMContentLoaded", () => {

    const { PDFDocument, rgb, StandardFonts } = PDFLib;

    // ================= CONFIG =================
    const roles = [
        "PERSONAL DE ALMACÉN",
        "PERSONAL DE TALLER",
        "GERENCIA"
    ];

    const CAMPOS = {
        0: { nombre: [90, 520],  firma: [90, 560] },
        1: { nombre: [340, 520], firma: [340, 560] },
        2: { nombre: [560, 520], firma: [560, 560] }
    };

    let usuario = 0;

    const datos = [
        { nombre: "", firma: null },
        { nombre: "", firma: null },
        { nombre: "", firma: null }
    ];

    // ================= DOM =================
    const titulo = document.getElementById("tituloRol");
    const nombreInput = document.getElementById("nombre");
    const canvas = document.getElementById("firmaCanvas");
    const ctx = canvas.getContext("2d");

    // Tamaño REAL del canvas
    canvas.width = 300;
    canvas.height = 120;

    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#000";

    let drawing = false;

    // ================= HELPERS =================
    function getPos(evt) {
        const rect = canvas.getBoundingClientRect();

        if (evt.touches && evt.touches.length > 0) {
            return {
                x: evt.touches[0].clientX - rect.left,
                y: evt.touches[0].clientY - rect.top
            };
        } else {
            return {
                x: evt.offsetX,
                y: evt.offsetY
            };
        }
    }

    function actualizarVista() {
        titulo.textContent = `Firmando: ${roles[usuario]}`;
        nombreInput.value = datos[usuario].nombre || "";
        clearCanvas();

        if (datos[usuario].firma) {
            const img = new Image();
            img.onload = () => ctx.drawImage(img, 0, 0);
            img.src = datos[usuario].firma;
        }
    }

    function guardarDatos() {
        datos[usuario].nombre = nombreInput.value;
        datos[usuario].firma = canvas.toDataURL("image/png");
    }

    // ================= CANVAS EVENTS =================

    // Mouse
    canvas.addEventListener("mousedown", e => {
        drawing = true;
        const pos = getPos(e);
        ctx.beginPath();
        ctx.moveTo(pos.x, pos.y);
    });

    canvas.addEventListener("mousemove", e => {
        if (!drawing) return;
        const pos = getPos(e);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
    });

    canvas.addEventListener("mouseup", () => drawing = false);
    canvas.addEventListener("mouseleave", () => drawing = false);

    // Touch (MÓVIL)
    canvas.addEventListener("touchstart", e => {
        e.preventDefault();
        drawing = true;
        const pos = getPos(e);
        ctx.beginPath();
        ctx.moveTo(pos.x, pos.y);
    }, { passive: false });

    canvas.addEventListener("touchmove", e => {
        e.preventDefault();
        if (!drawing) return;
        const pos = getPos(e);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
    }, { passive: false });

    canvas.addEventListener("touchend", () => drawing = false);
    canvas.addEventListener("touchcancel", () => drawing = false);

    // ================= UI ACTIONS =================
    window.clearCanvas = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        datos[usuario].firma = null;
    };

    window.next = function () {
        guardarDatos();
        if (usuario < roles.length - 1) {
            usuario++;
            actualizarVista();
        }
    };

    window.prev = function () {
        guardarDatos();
        if (usuario > 0) {
            usuario--;
            actualizarVista();
        }
    };

    // ================= PDF =================
    window.generarPDF = async function () {
        guardarDatos();

        const pdfBytes = await fetch("assets/ENTREGA_OTT04046-2025.pdf")
            .then(res => res.arrayBuffer());

        const pdfDoc = await PDFDocument.load(pdfBytes);
        const page = pdfDoc.getPages()[0];
        const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

        for (let i = 0; i < datos.length; i++) {
            const { nombre, firma } = datos[i];
            if (!nombre || !firma) continue;

            const [xN, yN] = CAMPOS[i].nombre;
            const [xF, yF] = CAMPOS[i].firma;

            page.drawText(nombre, {
                x: xN,
                y: yN,
                size: 10,
                font,
                color: rgb(0, 0, 0)
            });

            const pngBytes = await fetch(firma).then(r => r.arrayBuffer());
            const pngImage = await pdfDoc.embedPng(pngBytes);

            page.drawImage(pngImage, {
                x: xF,
                y: yF,
                width: 150,
                height: 40
            });
        }

        const finalPdf = await pdfDoc.save();
        descargarPDF(finalPdf);
    };

    function descargarPDF(bytes) {
        const blob = new Blob([bytes], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "ENTREGA_OTT_FIRMADA.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        URL.revokeObjectURL(url);
    }

    // ================= INIT =================
    actualizarVista();
});