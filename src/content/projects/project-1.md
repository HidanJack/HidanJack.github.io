---
title: 'Intelitax — Plataforma de Conciliación Bancaria/Contable Automatizada'
description: Automaticé por completo la conciliación bancaria de una empresa, incluyendo ingeniería inversa de fuentes PDF sin OCR, un motor de matching reescrito en Rust y una migración a plataforma multiusuario en Kubernetes.
publishDate: 'Aug 01 2025'
isFeatured: true
---

**Proyecto insignia del portafolio.** En producción desde enero de 2025, procesando más de 1 millón de registros financieros reales.

## El problema

Conciliar estados de cuenta bancarios contra los libros contables era un proceso manual, lento y propenso a error humano — horas de trabajo por cliente, cruzando a mano PDFs de bancos contra Excel contable.

## Lo que construí

Un sistema que convierte horas de trabajo manual en minutos: automaticé todo el flujo, desde leer el PDF del banco hasta señalar exactamente qué transacciones no cuadran — para que el equipo contable deje de cruzar papeles a mano y se enfoque en resolver las excepciones reales, no en buscarlas.

Dos hitos técnicos destacan sobre el resto:

- **Descifrar PDFs "protegidos" sin usar OCR:** algunos bancos generan sus PDFs con una fuente de texto deliberadamente revuelta, para que no se pueda copiar el contenido directamente. En vez de recurrir a reconocimiento óptico (OCR), analicé cómo esa fuente codifica cada carácter y escribí desde cero un programa que descifra ese mapeo — porque no existía ninguna herramienta ya hecha que resolviera este caso.
- **Reescritura del motor de matching en Rust:** el prototipo en Python no escalaba. Lo reescribí para que corriera en paralelo real y resolviera coincidencias con matching semántico, reduciendo un caso real de 82 movimientos sin conciliar a solo 2.

Cuando la plataforma creció para atender a varios clientes a la vez, lideré la migración de un pipeline pensado para un solo cliente a una **arquitectura multiusuario en la nube**, integrada a un sistema real de autenticación. En la auditoría de seguridad previa a la entrega **detecté y corregí una vulnerabilidad de autorización cruzada**: cualquier sesión válida podía leer el trabajo de otro cliente con solo conocer su identificador — la corregí antes de que llegara a producción, protegiendo los datos de cada cliente entre sí.

## Stack técnico

Python · Rust (PyO3, rayon) · YOLOv10 · Tesseract · OpenCV · NetworkX · Neo4j · sentence-transformers · Flask · React (Vite + Tailwind) · Kubernetes/EKS · nginx · Docker/Podman · pytest

## Resultados

- Más de 1 millón de registros financieros procesados en producción.
- ~95% de precisión en extracción OCR sobre documentos bancarios mexicanos.
- 211 PDFs validados masivamente sobre 11 bancos reales.
- Caso real: de 82 a 2 movimientos sin conciliar tras el motor de matching en Rust.
- Vulnerabilidad de autorización cruzada detectada y corregida en auditoría propia, antes de producción.
