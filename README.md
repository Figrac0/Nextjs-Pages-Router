
# React Meetups – Next.js Pages Router + MongoDB

A full-stack meetup management application built on the **Next.js Pages Router**.  
The project demonstrates server-side rendering, static generation, clean routing, API endpoints, and secure MongoDB integration.

This system is structured to highlight classic Next.js architecture prior to the App Router.

---

## Project Preview

<p align="center">
  <img src="https://raw.githubusercontent.com/Figrac0/Nextjs-Pages-Router/main/screenshots/1.png" width="450"/><br/>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/Figrac0/Nextjs-Pages-Router/main/screenshots/2.png" width="450"/><br/>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/Figrac0/Nextjs-Pages-Router/main/screenshots/3.png" width="450"/><br/>
</p>

---

## Overview

The application allows users to:

- View all meetups retrieved from MongoDB  
- Add new meetups via a validated form  
- Navigate to individual meetup detail pages through dynamic routes  
- Benefit from optimized SEO through page-level metadata and pre-rendering  

All routing is implemented via the **Pages Router** (`pages/`), using file-based routing and Next.js data-fetching methods.

---

## Key Features

### MongoDB Atlas Integration

The project connects to MongoDB Atlas using the official `mongodb` driver.

Key aspects:

- All connections are handled server-side with `MongoClient`
- Secrets stored in `.env.local` and Vercel environment settings
- Automatic page regeneration via ISR (Incremental Static Regeneration)
- Dynamic loading of individual meetups using `ObjectId`

Database credentials are never exposed in the repository.

---

## Pages Router Architecture

The project intentionally uses the classic Pages Router to demonstrate:

- Traditional file-based routing under `pages/`
- API routes under `pages/api/`
- Dynamic routes under `pages/[meetupId]/`
- Global layout composition via `_app.js`
- SEO configuration using `<Head>` from `next/head`

This architecture keeps the UI, routing, and data-fetching layers clean and separated.

---

## Interesting Implementations

### 1. Dynamic Pre-Rendering with `getStaticProps` and `getStaticPaths`

- All meetups are pre-rendered at build time  
- Individual meetup detail pages are generated dynamically based on MongoDB IDs  
- Pages regenerate automatically using `revalidate` to keep content fresh  

### 2. API Routes for Server-Side Mutations

The route:

```

/api/new-meetup

```

Handles POST requests and writes securely to MongoDB.  
All database operations happen server-side, keeping credentials private.

### 3. Secure Environment Variable Setup

Credentials exist only in:

- `.env.local` (ignored by Git)  
- Vercel environment variables  

This prevents accidental exposure of sensitive keys.

### 4. Modular UI Component System

UI is built from isolated, reusable components:

- Cards  
- Lists  
- Meetup Items  
- Forms  
- Layout wrappers  

The structure is consistent and maintainable.

---



