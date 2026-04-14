# Lumina

![Lumina tech stack](./lumina-techstack.png)

Lumina is a stargazing companion built around a simple idea: when the sky is doing something beautiful, finding it should feel exciting instead of complicated. The app brings together celestial events, weather-aware planning, and community astronomy experiences so users can spend less time piecing information together and more time looking up.

## The Story

Lumina was designed for people who love the night sky, whether they are longtime astronomy fans or just getting curious. Instead of making users bounce between scattered weather tools, event calendars, and astronomy sites, Lumina tries to turn all of that into one guided experience.

The result is a mobile app concept that helps people:

- discover notable celestial events
- spot better nights for stargazing
- browse astronomy-related social events
- move from curiosity to planning in one place

## What Lives In This Repo

This branch now brings the project much closer to a fullstack shape.

- The frontend comes from the Expo and Amplify app work in `origin/frontend_merge`.
- The backend keeps the event-ingestion and recommendation scripts that were added on top of `main`.
- The overall project now reads as one connected product instead of isolated backend-only files.

In practice, that means the repo includes:

- a mobile app shell with screens for onboarding, home, calendar, events, profile, and sign-in
- backend scripts for celestial event updates, social event ingestion, and recommendation logic
- Amplify configuration that shows how authentication and cloud-connected app features were intended to fit together

## Why The Project Still Matters

Even though the original AWS account was closed, the project is not lost.

The repo still contains the structure, code, and cloud configuration patterns needed to rebuild Lumina in a new AWS account. A fresh setup would need new secrets, new deployments, and some manual reconnecting, but the important part is still here: the product logic, the app flow, and the architecture blueprint.

## The Experience We Were Building

Lumina aims to feel less like a dashboard and more like a guide for nights under the stars.

- The app opens with a visual, story-driven mobile experience.
- The calendar and event screens help users understand what is happening in the sky.
- The backend layers in the practical side: what events exist, what social opportunities are nearby, and which nights are worth recommending.
- Together, those pieces turn astronomy from “interesting information” into “something you can actually act on.”

## Fullstack Merge Notes

This branch uses `origin/frontend_merge` as the main frontend base. The other branches were reviewed, but they were better treated as comparison material than as the new foundation:

- `origin/mercedes_xiong4.0` is close to the same app line, but it removes some backend-related Amplify resources
- `origin/shriya_kalyan` is a different Expo Router structure and would have added unnecessary migration work

That makes this branch the clearest path toward a single fullstack project: mobile app experience in the frontend, event logic in the backend, and a rebuildable AWS story in the middle.

## Team

- Frontend: Mercedes Xiong, Shriya Kalyan
- Backend: Bilal Tulek, Tanishq Akasapu

## Rebuild Note

If Lumina is brought back in a new AWS account, the next step is not starting from scratch. It is reconnecting what already exists here: the app, the cloud wiring, the backend logic, and the product vision.
