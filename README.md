# Automatización de Firma de Informes OTT

Aplicación web desarrollada para **automatizar y agilizar el proceso de firma de informes de Orden de Trabajo (OTT)** utilizados en el taller.

El sistema permite trabajar directamente desde el navegador con un documento PDF y facilitar el proceso de incorporación de las firmas correspondientes a **tres responsables**, evitando tener que editar manualmente el documento en programas externos.

---

## Objetivo

El objetivo principal de este proyecto es simplificar el proceso de entrega y validación de informes OTT mediante una herramienta web sencilla, rápida y accesible.

La aplicación busca reducir tareas manuales como:

* Abrir el informe en un programa externo.
* Insertar manualmente las firmas.
* Repetir el proceso para cada responsable.
* Guardar diferentes versiones del documento.
* Preparar el archivo final para su entrega.

De esta manera, el proceso de firma puede realizarse desde una única interfaz.

---

## Funcionamiento

El flujo general de la aplicación es:

```text
┌─────────────────────┐
│   Informe OTT PDF   │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Carga del documento │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Incorporación de    │
│     Firma 1         │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Incorporación de    │
│     Firma 2         │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Incorporación de    │
│     Firma 3         │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Generación del PDF  │
│       final         │
└─────────────────────┘
```

---

## Características

* Procesamiento de documentos PDF.
* Incorporación de tres firmas al informe.
* Aplicación ejecutable directamente desde el navegador.
* Procesamiento local del documento.
* Generación del documento PDF final.
* Interfaz sencilla orientada al uso en taller.
* No requiere un servidor backend para su funcionamiento básico.

---

## Tecnologías utilizadas

El proyecto está desarrollado utilizando tecnologías web estándar:

| Tecnología   | Uso                                                |
| ------------ | -------------------------------------------------- |
| HTML5        | Estructura de la interfaz                          |
| JavaScript   | Lógica y funcionamiento de la aplicación           |
| PDF-LIB      | Manipulación y generación de documentos PDF        |
| CSS          | Estilos de la interfaz                             |
| Git / GitHub | Control de versiones y almacenamiento del proyecto |

---

## Estructura del proyecto

```text
entrega_OTT_terminada_taller/
│
├── assets/
│   └── ...
│
├── index.html
├── app.js
├── pdf-lib.min.js
├── .nojekyll
└── README.md
```

### Descripción de los archivos

**`index.html`**

Contiene la estructura principal de la aplicación y los elementos de la interfaz gráfica.

**`app.js`**

Contiene la lógica de funcionamiento de la aplicación, incluyendo el procesamiento del documento y las acciones relacionadas con las firmas.

**`pdf-lib.min.js`**

Biblioteca utilizada para trabajar con archivos PDF directamente desde JavaScript.

**`assets/`**

Contiene los recursos utilizados por la aplicación, como imágenes, firmas u otros elementos gráficos.

**`.nojekyll`**

Archivo utilizado para facilitar la publicación del proyecto mediante GitHub Pages.

---

## Instalación y ejecución

El proyecto no requiere una instalación compleja.

### Opción 1 — Ejecutar localmente

Clonar el repositorio:

```bash
git clone https://github.com/Romemu1810-tech/entrega_OTT_terminada_taller.git
```

Ingresar al directorio:

```bash
cd entrega_OTT_terminada_taller
```

Luego abrir:

```text
index.html
```

directamente en un navegador web.

---

## Ejecución mediante GitHub Pages

El proyecto también puede publicarse como una página web utilizando **GitHub Pages**.

Una vez habilitado GitHub Pages para la rama correspondiente, la aplicación puede utilizarse desde un navegador sin necesidad de instalar software adicional.

---

## Uso de la aplicación

El flujo de utilización es el siguiente:

### 1. Cargar el informe

Seleccionar el archivo PDF correspondiente al informe OTT que se desea procesar.

### 2. Incorporar la primera firma

La aplicación permite colocar la primera firma en la ubicación correspondiente del documento.

### 3. Incorporar la segunda firma

Se continúa con la segunda persona responsable de la aprobación o validación del informe.

### 4. Incorporar la tercera firma

Finalmente se incorpora la tercera firma requerida.

### 5. Generar el documento final

Una vez completado el proceso, se genera el PDF con las firmas incorporadas, listo para su almacenamiento o entrega.

---

## Procesamiento del documento

La aplicación está diseñada como una herramienta web del lado del cliente (*client-side*), utilizando JavaScript para realizar el procesamiento del PDF.

Esto permite trabajar con el documento directamente desde el navegador sin depender de un servidor dedicado para las operaciones principales.

> **Nota:** La implementación y el manejo de documentos deben utilizarse de acuerdo con las políticas internas de la organización y los requisitos aplicables a la validez de las firmas.

---

## Aplicación en procesos de taller

Este proyecto fue desarrollado pensando en un entorno de **taller y gestión de Órdenes de Trabajo (OTT)**, donde los informes requieren la validación de diferentes responsables antes de ser entregados o archivados.

La automatización permite reducir actividades repetitivas y estandarizar el proceso de preparación de los documentos.

### Flujo simplificado

```text
Trabajo realizado
       ↓
Elaboración del informe OTT
       ↓
Revisión
       ↓
Firma 1
       ↓
Firma 2
       ↓
Firma 3
       ↓
Informe final
       ↓
Entrega / Archivo
```

---

## Alcance

Esta herramienta está orientada principalmente a la **automatización del proceso interno de preparación y firma de informes PDF**.

No pretende sustituir sistemas de firma electrónica certificada ni determinar por sí misma la validez legal de una firma.

La validez y aceptación del documento dependerán de los procedimientos internos y de los requisitos legales o contractuales aplicables.

---

## Posibles mejoras futuras

Entre las posibles funcionalidades que podrían incorporarse posteriormente:

* [ ] Selección visual de la posición de cada firma.
* [ ] Redimensionamiento de las firmas mediante controles gráficos.
* [ ] Previsualización completa del PDF.
* [ ] Selección de diferentes tipos de documentos OTT.
* [ ] Registro de fecha y hora de cada firma.
* [ ] Identificación del responsable que realiza cada firma.
* [ ] Generación automática del nombre del archivo.
* [ ] Incorporación de información de la OTT al documento.
* [ ] Interfaz adaptable a dispositivos móviles.
* [ ] Integración con un sistema de gestión documental.
* [ ] Registro de versiones del informe.
* [ ] Implementación de mecanismos de firma electrónica avanzada, si el proceso lo requiere.

---

## Autor

**Rodrigo Mena Muñoz**

Proyecto desarrollado como herramienta de automatización aplicada a la gestión documental de informes OTT en entorno de taller.

---

## Licencia

Este proyecto se encuentra destinado principalmente a fines de desarrollo y automatización interna.

La utilización, modificación y distribución del código deberá realizarse de acuerdo con las condiciones definidas por el propietario del repositorio.
