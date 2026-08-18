---
title: 'GG (Git Guardian) — Notificaciones Distribuidas de Commits Pendientes'
description: Construí en 4 días un sistema distribuido que te avisa al celular cuando dejas cambios sin commitear, con mensaje de commit sugerido y control remoto desde la app — sin usar IA para generarlo.
publishDate: 'Mar 01 2025'
isFeatured: true
seo:
  image:
    src: '../../assets/images/project-3.jpg'
    alt: Project preview
---

![Project preview](../../assets/images/project-3.jpg)

**Proyecto personal**, construido en 4 días de desarrollo intenso.

## El problema

Es fácil dejar cambios sin commitear en un repo local y olvidarlos por días — sin darte cuenta de que ese trabajo no está respaldado en ningún lado.

## Lo que construí

Un sistema que vigila tus repos por ti y te avisa al instante en el celular en cuanto dejas cambios sin respaldar — con el mensaje de commit ya redactado y la opción de actuar de forma remota, para que nunca pierdas trabajo por olvido.

Por dentro son tres piezas: un **agente local** que corre en tu computadora vigilando los repos, un **backend** que reenvía las notificaciones en tiempo real, y una **app móvil** que las recibe y sugiere el mensaje de commit (clasificado por heurísticas propias, sin depender de un LLM).

Decisiones técnicas que vale la pena resaltar:

- **WebSockets bidireccionales** con reconexión y backoff exponencial para mantener el agente y la app sincronizados en tiempo real.
- **Doble esquema de autenticación:** JWT para usuarios, API keys hasheadas (SHA-256) para dispositivos — dominios separados por diseño.
- **Seguridad explícita en mobile:** el token de sesión vive solo en memoria, nunca se persiste en disco.

## Stack técnico

Python (FastAPI, Typer, SQLAlchemy async) · WebSockets · APScheduler · React Native (Expo Router) · Zustand · JWT

## Resultados

- Sistema end-to-end funcional en 4 días de desarrollo.
- Dashboard de analítica de calidad de commits.
- Bug crítico de timezone detectado y corregido en producción.
