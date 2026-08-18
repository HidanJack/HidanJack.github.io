---
title: 'Knoto — Asistente Personal On-Device con LLM Local y Grafo de Conocimiento'
description: Un asistente que no solo responde sobre tus documentos, sino que entiende quién es quién en tu familia sin que se lo digas y te avisa antes de que preguntes — corriendo 100% en el teléfono, sin nube.
publishDate: 'May 01 2025'
isFeatured: true
---

**Proyecto personal.** Un asistente que entiende tu vida documentada — no solo la guarda. Le subes un acta de nacimiento y él solo deduce que esa persona es tu mamá o tu hijo, sin que se lo digas. Le subes tu póliza de seguro y, meses después, te avisa que está por vencer sin que tengas que preguntar. Todo corriendo directamente en el teléfono, sin que un solo documento salga del dispositivo.

## El problema

Los asistentes con IA que existen dependen de la nube: tus documentos personales (identificaciones, pólizas, estados de cuenta) viajan a un servidor de terceros para poder consultarlos. Y casi todos son reactivos — esperan a que preguntes. Quise resolver ambas cosas: privacidad total y que el asistente tomara la iniciativa.

## Lo que construí

Un asistente que se hace cargo de los pendientes de tu vida documentada: sabe quién es quién en tu familia sin que se lo digas, te avisa antes de que algo importante venza, y encuentra el documento que necesitas en segundos — para que tú te enfoques en vivir el día, no en cargar con el papeleo.

Cuatro decisiones sostienen esto:

- **Relaciones que se deducen solas:** cuando subes un acta o una identificación, el sistema arma un mapa de quién es quién (mamá, hijo, pareja) cruzando los datos entre documentos — nadie llena un formulario diciendo "Ruth es mi mamá".
- **Avisos sin que preguntes:** un motor propio revisa las fechas de vigencia de tus documentos (seguros, identificaciones) y te avisa antes de que venzan, priorizando según qué tan cercana es esa persona para ti — diseñé una tabla de "cercanía" con base en literatura de psicología social (Dunbar, Kahn & Antonucci), ajustada a vínculos culturales mexicanos como el compadrazgo.
- **Todo corre en el teléfono, sin nube:** empecé con un prototipo de servidor para validar la idea rápido, y después migré todo —el modelo de lenguaje, el reconocimiento de texto y el grafo— para que corriera directamente en el dispositivo. Ningún documento sale del teléfono.
- **Un chat que no inventa datos sensibles:** los modelos de IA a veces "alucinan" — inventan o mezclan datos con seguridad. Para información delicada como CURP, RFC o fechas, la app primero calcula y verifica el dato exacto con código normal, y solo le pide al modelo que redacte la respuesta con ese dato ya confirmado. Lo comprobé con 20 preguntas reales sobre mis propios documentos, comparando cada respuesta contra el dato correcto.

## Stack técnico

Python · FastAPI · React Native (Expo) · TypeScript · llama.rn · docTR · sentence-transformers · SQLite · Skia · Jest / pytest

## Resultados

- Chat, extracción de documentos y avisos funcionando 100% en el teléfono, sin llamadas a servidor.
- Verificado en un dispositivo real con el servidor apagado por completo: documentos y relaciones cargando correctamente, y el chat respondiendo bien preguntas sensibles sobre datos personales.
- 22 suites de test (13 Python + 9 TypeScript) cubriendo la lógica de dominio crítica.
- Migración de arquitectura servidor → 100% on-device completada y verificada.
