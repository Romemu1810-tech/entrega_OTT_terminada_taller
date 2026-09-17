# Automatización del Registro de Entrega de OTTs Terminadas

Aplicación web desarrollada para **automatizar el proceso de firma del Registro de Entrega de OTTs Terminadas**, utilizado en la gestión y entrega de Órdenes de Trabajo (OTT) en el taller.

El proyecto nace como una mejora al proceso manual utilizado anteriormente, en el cual el registro debía ser impreso, trasladado físicamente entre diferentes áreas para obtener las firmas correspondientes, posteriormente escaneado y finalmente cargado al sistema de gestión de la empresa.

La aplicación permite **digitalizar y agilizar este flujo**, facilitando la incorporación de las tres firmas requeridas directamente sobre el documento PDF.

---

## Objetivo

El objetivo del proyecto es **reducir las actividades manuales asociadas al proceso de entrega y validación de OTTs terminadas**, mediante una herramienta web que permita generar el documento final con las firmas correspondientes.

Las tres validaciones consideradas en el proceso son:

| Firma | Responsable               | Función                                              |
| ----- | ------------------------- | ---------------------------------------------------- |
| 1️⃣   | **Personal de Taller**    | Validación de la entrega de la OTT terminada         |
| 2️⃣   | **Personal de Almacén**   | Confirmación de la recepción/gestión correspondiente |
| 3️⃣   | **Aprobado por Gerencia** | Aprobación final del registro                        |

---

## Proceso anterior

Antes de implementar esta herramienta, el proceso de firma se realizaba de forma manual.

### Flujo tradicional

```text
              OTT TERMINADA
                    │
                    ▼
        Imprimir el Registro de
        Entrega de OTTs Terminadas
                    │
                    ▼
        ┌───────────────────────┐
        │ Firma Personal Taller │
        └───────────┬───────────┘
                    │
                    ▼
        ┌───────────────────────┐
        │ Firma Personal Almacén│
        └───────────┬───────────┘
                    │
                    ▼
        ┌───────────────────────┐
        │   Firma de Gerencia   │
        └───────────┬───────────┘
                    │
                    ▼
              Escanear PDF
                    │
                    ▼
        Cargar documento al
        sistema de la empresa
```

### Problemas del proceso manual

Este flujo implicaba varias actividades que podían generar demoras:

* Impresión del documento.
* Manipulación física del registro.
* Traslado del documento entre diferentes responsables.
* Espera para obtener cada una de las firmas.
* Riesgo de extravío o deterioro del documento físico.
* Escaneo del documento una vez completadas las firmas.
* Carga manual del documento escaneado al sistema.
* Generación de archivos adicionales durante el proceso.

---

## Proceso automatizado

La aplicación busca simplificar el procedimiento mediante el procesamiento digital del registro.

### Nuevo flujo

```text
              OTT TERMINADA
                    │
                    ▼
        Registro de Entrega de
          OTTs Terminadas
                    │
                    ▼
        ┌───────────────────────┐
        │ Firma Personal Taller │
        └───────────┬───────────┘
                    │
                    ▼
        ┌───────────────────────┐
        │ Firma Personal Almacén│
        └───────────┬───────────┘
                    │
                    ▼
        ┌───────────────────────┐
        │   Firma de Gerencia   │
        └───────────┬───────────┘
                    │
                    ▼
            PDF FINAL FIRMADO
                    │
                    ▼
        Cargar al sistema de
             la empresa
```

De esta manera, se elimina la necesidad de **imprimir y posteriormente escanear el documento** como parte del flujo de preparación del registro.

---

## Funcionamiento de la aplicación

La aplicación funciona desde un navegador web y utiliza JavaScript para gestionar el documento PDF.

El flujo general es:

1. Abrir la aplicación.
2. Cargar o trabajar con el registro correspondiente.
3. Incorporar la firma de **Personal de Taller**.
4. Incorporar la firma de **Personal de Almacén**.
5. Incorporar la firma de **Gerencia**.
6. Generar el documento PDF final.
7. Guardar el documento.
8. Cargar el PDF terminado al sistema de gestión de la empresa.

---

## Características

* Gestión de documentos PDF.
* Incorporación de tres firmas.
* Firma correspondiente a **Personal de Taller**.
* Firma correspondiente a **Personal de Almacén**.
* Firma correspondiente a **Aprobado por Gerencia**.
* Interfaz web.
* Procesamiento mediante JavaScript.
* Generación del documento PDF final.
* Ejecución desde un navegador.
* Organización de recursos mediante una carpeta `assets`.

---

## Tecnologías utilizadas

| Tecnología     | Aplicación                                |
| -------------- | ----------------------------------------- |
| **HTML5**      | Estructura de la aplicación               |
| **CSS**        | Diseño y presentación de la interfaz      |
| **JavaScript** | Lógica y automatización del proceso       |
| **PDF-LIB**    | Manipulación y generación de archivos PDF |
| **Git**        | Control de versiones                      |
| **GitHub**     | Repositorio y distribución del proyecto   |

---

## Estructura del proyecto

```text
entrega_OTT_terminada_taller/
│
├── assets/
│   └── Recursos gráficos y firmas
│
├── index.html
├── app.js
├── pdf-lib.min.js
├── .nojekyll
└── README.md
```

### Archivos principales

#### `index.html`

Contiene la estructura HTML de la aplicación y los elementos que conforman la interfaz de usuario.

#### `app.js`

Contiene la lógica principal de la aplicación y las funciones necesarias para gestionar el proceso de incorporación de las firmas.

#### `pdf-lib.min.js`

Biblioteca utilizada para trabajar con documentos PDF desde JavaScript.

#### `assets/`

Directorio destinado a almacenar los recursos utilizados por la aplicación, incluyendo elementos gráficos y firmas.

#### `.nojekyll`

Archivo utilizado para facilitar la publicación de la aplicación mediante GitHub Pages.

---

## Ejecución

El proyecto puede ejecutarse directamente desde un navegador web.

### Clonar el repositorio

```bash
git clone https://github.com/Romemu1810-tech/entrega_OTT_terminada_taller.git
```

Ingresar al directorio:

```bash
cd entrega_OTT_terminada_taller
```

Posteriormente, abrir:

```text
index.html
```

con un navegador compatible.

---

## Publicación

El proyecto puede ser publicado mediante **GitHub Pages**, permitiendo acceder a la aplicación desde un navegador sin necesidad de instalar un programa adicional.

El repositorio contiene el archivo `.nojekyll` necesario para la publicación del sitio.

---

## 📊 Comparación del proceso

| Actividad                     | Proceso anterior | Proceso automatizado |
| ----------------------------- | :--------------: | :------------------: |
| Elaboración del registro      |         ✅        |           ✅          |
| Impresión                     |         ✅        |           ❌          |
| Firma Personal de Taller      |     ✍️ Física    |      💻 Digital      |
| Firma Personal de Almacén     |     ✍️ Física    |      💻 Digital      |
| Firma de Gerencia             |     ✍️ Física    |      💻 Digital      |
| Traslado físico del documento |         ✅        |           ❌          |
| Escaneo                       |         ✅        |           ❌          |
| Generación del PDF final      |     Escaneado    |        Digital       |
| Carga al sistema empresarial  |         ✅        |           ✅          |

---

## Beneficios esperados

La automatización del proceso busca:

* Reducir el uso de papel.
* Eliminar la necesidad de trasladar físicamente el registro entre áreas.
* Reducir el tiempo empleado en la preparación del documento.
* Evitar el paso de escaneo posterior a la firma.
* Simplificar la generación del PDF final.
* Estandarizar el proceso de firma.
* Facilitar la posterior carga del documento al sistema empresarial.
* Mantener un flujo de trabajo más ordenado y trazable.

---

## Aplicación en la gestión de taller

El proyecto está orientado a un proceso real de **gestión documental de Órdenes de Trabajo (OTT)**.

La solución busca aplicar principios de **digitalización y automatización de procesos administrativos** a una actividad que anteriormente dependía de documentos físicos y del traslado del registro entre diferentes responsables.

El objetivo no es únicamente digitalizar la firma, sino **simplificar el flujo completo desde que una OTT es terminada hasta que su registro firmado queda disponible para ser cargado al sistema de la empresa**.

---

## Consideraciones

La aplicación está destinada a facilitar el proceso interno de preparación de documentos.

El uso de imágenes de firmas, firmas electrónicas o mecanismos similares debe realizarse de acuerdo con las políticas, procedimientos y autorizaciones establecidas por la empresa.

Esta herramienta **no pretende sustituir un sistema de firma electrónica certificada** cuando este sea requerido por normativa, contrato o procedimiento interno.

---

## Mejoras futuras

Algunas funcionalidades que podrían incorporarse en futuras versiones:

* [ ] Registro automático de fecha y hora.
* [ ] Identificación del usuario que realiza cada acción.
* [ ] Generación automática del nombre del PDF.
* [ ] Incorporación automática del número de OTT.
* [ ] Incorporación automática de la fecha de entrega.
* [ ] Validación de que las tres firmas hayan sido incorporadas.
* [ ] Vista previa del documento antes de descargarlo.
* [ ] Selección y posicionamiento de firmas mediante interfaz gráfica.
* [ ] Historial de documentos procesados.
* [ ] Integración con el sistema de gestión documental de la empresa.
* [ ] Implementación de mecanismos de firma electrónica con autenticación de usuarios.

---

## Autor

**Rodrigo Mena Muñoz**

Proyecto de automatización aplicado a la gestión documental y entrega de **Órdenes de Trabajo (OTT) terminadas** en entorno de taller.

---

## Repositorio

**GitHub:**
`Romemu1810-tech/entrega_OTT_terminada_taller`

---

### Resumen del proyecto

> **Automatización del Registro de Entrega de OTTs Terminadas mediante una aplicación web para la incorporación de las firmas de Personal de Taller, Personal de Almacén y Aprobado por Gerencia, eliminando las etapas de impresión, traslado físico y escaneo del documento.**
