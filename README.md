# React Meetups – Next.js Pages Router + MongoDB

A production-ready full-stack meetup management application built on the **Next.js Pages Router**.  
The project demonstrates classic Next.js architecture with server-side rendering, static generation, API routes, and a secure MongoDB Atlas integration.

This repository is designed to showcase best practices used *before* the introduction of the App Router.

---

<div align="center">

<h3>🎯 Quick Access - Click Below to Visit</h3>

<div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin: 30px 0;">

<a href="https://nextjs-pages-router-theta.vercel.app/" target="_blank" style="text-decoration: none;">
  <div style="background: linear-gradient(135deg, #667eea, #764ba2); padding: 15px 30px; border-radius: 12px; color: white; font-weight: bold; font-size: 18px; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3); transition: all 0.3s ease; border: 2px solid white;">
    🎬 Demo
  </div>
</a>

</div>

---

## 📸 Project Preview

<p align="center">
  <img src="https://raw.githubusercontent.com/Figrac0/Nextjs-Pages-Router/main/screenshots/1.png" width="450"/>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/Figrac0/Nextjs-Pages-Router/main/screenshots/2.png" width="450"/>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/Figrac0/Nextjs-Pages-Router/main/screenshots/3.png" width="450"/>
</p>

---

## 🚀 Overview

This application allows users to:

- Browse all meetups stored in MongoDB  
- Add new meetups via a fully validated form  
- Open individual meetup detail pages via dynamic routing  
- Benefit from optimized SEO through page-level `<Head>` metadata and static pre-rendering  

Routing is powered by the **Next.js Pages Router** (`pages/`), using SSR, SSG, and API routes.

---

## 🔑 Key Features

### ⚡ MongoDB Atlas Integration
Connected using the official `mongodb` driver.

Highlights:

- Secure server-side connection through `MongoClient`
- Credentials stored only in `.env.local` and Vercel environment variables
- ISR (Incremental Static Regeneration) keeps data fresh automatically
- Detail pages dynamically load documents through MongoDB `ObjectId`

No sensitive data is ever committed to the repository.

---

## 📁 Pages Router Architecture

This project intentionally showcases the classic Pages Router:

- File-based routing inside `pages/`
- API endpoints under `pages/api/`
- Dynamic routes under `pages/[meetupId]/`
- Application-wide layout and styles via `_app.js`
- SEO configuration using `<Head>` from `next/head`

This structure ensures clean separation of concerns: UI, routing, data fetching, and API logic.

---

## 🧩 Interesting Implementations

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



