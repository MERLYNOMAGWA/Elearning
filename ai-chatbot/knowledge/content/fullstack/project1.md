# Web Dev Phase

## 🎯 **Goals**

Take the Figma design of the Social Blogging App and bring it to life with clean, reusable code. Build a responsive, accessible frontend using **React.js** and **Tailwind CSS**, and connect it to a secure backend powered by **Node.js**, **Express.js**, and **MongoDB**. Ensure all features work seamlessly, including authentication, blog and comment management, and integration with the AI chatbot API, to deliver a polished, deployment-ready application.

This is not a template or a mock-up; this is a real, coded product. Build like someone might use it tomorrow.

## 🎒 **Learning Goals**

By completing this project, you will:

- Strengthen your skills in **React.js** by building reusable components and managing application state with props and hooks.
- Apply **Tailwind CSS (or plain CSS)** to create responsive, accessible, and visually appealing user interfaces.
- Develop RESTful APIs using **Node.js** and **Express.js**, handling CRUD operations for blogs, users, and comments.
- Integrate **MongoDB (via Mongoose)** to design and interact with a NoSQL database.
- Implement secure **authentication and authorization** using **JWT** and **bcrypt** for user management.
- Connect the frontend to an **external AI chatbot API** for real-time interactions.
- Practice deploying a **full-stack application** with **Vercel (frontend)**, **Render or Railway (backend)**, and **MongoDB Atlas (database)**.
- Collaborate effectively in a team using **Git and GitHub workflows** (branching, pull requests, code reviews).

## 📋 **Technical Requirements**

Your finished website **must explicitly include** the following elements, structured for clarity, responsiveness, and interactivity.

### **1. Header (Navbar)**

- **Frontend:**
  - Create a **responsive navbar** with:
    - Logo
    - Right-side buttons:
      - Login/Signup (when not authenticated).
      - Profile icon (when logged in leads to Dashboard (find dashboard details below on point 6).
      - Light/Dark mode toggle.
- **Backend:**
  - Build a route `GET /api/auth/user` to return user details from the JWT token.
  - Middleware `authMiddleware`: Check if a JWT exists in headers and verify it.
  - **Test:** Ensure the profile dropdown only appears when the JWT is valid.

### **2. User Authentication**

Users should be able to sign up and log in.

- **Frontend:**
  - Create **three separate pages** in React:
    - **Signup Page:** A form for new users to register.
    - **Login Page:** A form for existing users to log in.
    - **Password Reset Page:** A form to request a password reset (basic version).
  - Use React Router to navigate between these pages.
  - Redirect users to the Dashboard after successful signup/login.
  - Success and error messages(popups)
- **Backend:**
  - Create REST routes:
    - `POST /api/auth/signup`: Hash passwords using **bcrypt** and store in MongoDB.
    - `POST /api/auth/login`: Verify user credentials, issue a **JWT token**, and return it.
    - `POST /api/auth/reset-password`: Handle password reset logic (basic version).
  - **Test:**
    - Prevent duplicate users.
    - Return error messages for invalid login attempts.

### **3. Collapsible Sidebar**

The sidebar provides navigation and is toggled via a hamburger icon.

- **Frontend:**
  - Build a sidebar component that slides in/out from the left.
  - Sections inside the sidebar:
    - Dashboard _(only for logged-in users)_
    - All Posts
    - Create Post _(only for logged-in users)_
    - My Posts
  - Use **React Context** to manage sidebar state globally.
- **Backend:**
  - Secure “Dashboard”, “My Posts”, and “Create Post” routes with **JWT middleware**.
  - **Test:** Users without a token should be redirected to Login.

### **4. Blog Feed Section**

This is the main content of the homepage where users see all blog posts.

- **Frontend:**
  - Display blog posts cards in a **grid or list view** with pagination.
  - Each blog card should include:
    - Title, summary, image, author name and avatar, date, and like and comment count.
    - A “Read More” button that links to the Single Blog Post page.
- **Backend:**
  - API:
    - `GET /api/posts?page=1&limit=10`: Fetch posts with pagination.
    - Use MongoDB aggregation to include author details from the `users` collection.
  - **Test:** Query params handling for pagination

### **5. Single Blog Post Page & Comments**

When a user clicks on a blog card, they see the full post content with comments.

- **Frontend:**
  - Show blog title, Image, content, date, and likes.
  - Below the post, display comments and a text box to add a new comment (if logged in).
- **Backend:**
  - API:
    - `GET /api/posts/:id`: Fetch blog post by ID, including author and comments.
    - `POST /api/posts/:id/comments`: Add a comment to the blog post (JWT required).
    - Increment the `views` field each time the post is viewed.
  - **Test:** Error handling for invalid IDs.

### **6. Create/Edit/Delete Blog Posts (User Dashboard)**

Logged-in users can create, edit, and delete their blog posts.

- **Frontend:**
  - Build a simple text area.
  - Add forms for editing existing posts and deleting posts.
  - Show “My Posts” with options to edit or delete each.
- **Backend:**
  - API:
    - `POST /api/posts`: Create a new blog post (JWT required).
    - `PUT /api/posts/:id`: Edit a blog post (only if the user is the owner).
    - `DELETE /api/posts/:id`: Delete a blog post (only if the user is the owner).

### **8. AI Chatbot Integration (External API)**

Enhance user experience with an AI chatbot.

- **Frontend:**
  - Create a floating chatbot button or widget that users can open on any page.
- **Backend:**
  - Connect the frontend directly to the **AI Bot API endpoint** provided by the **GEN AI Specialist**.
  - **Test:** Ensure smooth API calls and handle errors gracefully.

### **9. Git & GitHub**

- Use Git for version control (`git init`, `git add`, `commit`, `push`) with clear, semantic commit messages (e.g., `feat: added feedback form validation`).
- Work in branches for each development phase: dev branch, AI branch, then merge.
- Push code to GitHub frequently and maintain a clean commit history.
- Create pull requests for merging changes and conduct code reviews.
- Collaborate effectively as a team through proper branching, PR discussions, and merge conflict resolution.
- Include a complete `README.md` with all the team member names and roles, project description, features, technologies used, and deployment link.

### **10. Deployment**

- **Frontend Deployment:**
  - Deploy React frontend on **Vercel** or **Netlify**.
- **Backend Deployment:**
  - Deploy Node.js API to **Render**, **Railway**, or Vercel (serverless).
  - Host MongoDB on **MongoDB Atlas**.
- **Final Integration:**
  - Set environment variables for production.
  - Test full-stack workflows before sharing the deployed app link.

## 🚦 How to start (**Workflow)**

### **1. Design Review**

- **Goal:** Understand the app’s UI/UX design and prepare for implementation.
- **Task:**
  - Review the Figma prototypes provided by the UI/UX designers.
  - Discuss the overall design system (colors, typography, reusable components).
  - Identify UI components to build (e.g., header, blog cards, forms).
  - Note accessibility and responsive design requirements.
- **Deliverable:** A shared understanding of the design and a checklist of components for development.

### **2. Project Overview**

- **Goal:** Gain a clear understanding of the app features and backend APIs.
- **Task:**
  - Go through the **Social Blogging App requirements** as a team.
  - Map out frontend routes and how they interact with the backend.
- **Deliverable:** A written frontend plan mapping routes and components to API endpoints.

### **3. Task Assignment & Planning**

- **Goal:** Divide tasks among team members and plan the development phases.
- **Task:**
  - Split frontend into **feature branches** (e.g., `feature/header`, `feature/auth-forms`, `feature/blog-feed`).
  - Assign developers to work on specific sections and components.
  - Decide on **Git workflow** (branching, pull requests, reviews).
  - Create a **Linear ticket** for the task assigned to you
  - Add a **checklist within the ticket** outlining your subtasks.
  - Mark tasks as complete as you work through them.
- **Deliverable:** Each team member should submit a **linear board** having **their Linear ticket URL** showing:
  - Their assigned task
  - A detailed checklist
  - Updated progress status

### **4. Project Setup**

- **Goal:** Set up the frontend and backend codebases and prepare for collaboration.
- **Task:**
  - Frontend:
    - Initialize React project (`vite` or `create-react-app`) and configure **Tailwind CSS**.
    - Set up React Router for page navigation.
    - Create a folder structure (`components/`, `pages/`, `utils/`).
  - Backend:
    - Initialize Node.js + Express project.
    - Connect to **MongoDB Atlas** using Mongoose.
    - Set up environment variables with `.env`.
  - Configure `.gitignore` and push the base project to GitHub.
- **Deliverable:** A clean, functional base project structure for frontend and backend in GitHub.

### **5. Development Phase (Core App Features)**

### **User Authentication**

- **Goal:** Allow users to securely sign up, log in, and manage sessions.
- **Task:**
  - Frontend: Build **Signup, Login, and Password Reset as separate pages**.
  - Backend:
    - Create REST routes for signup, login, and password reset.
    - Use bcrypt for password hashing and JWT for session tokens.
  - Test the authentication flow end-to-end.
- **Deliverable:** Users can create accounts, log in, and access protected routes.

### **Header and Sidebar Navigation**

- **Goal:** Provide a consistent navigation experience.
- **Task:**
  - Build a **responsive header** (logo, nav links, profile dropdown, light/dark toggle).
  - Add a **collapsible sidebar** with links:
    - Dashboard
    - All Posts
    - Create Post
    - My Posts
  - Secure sidebar routes using JWT middleware.
- **Deliverable:** Fully functional navigation system that updates dynamically based on authentication state.

### **Blog Feed and Single Post**

- **Goal:** Display blogs and allow users to view details of individual posts.
- **Task:**
  - Frontend:
    - Build a Blog Feed page with pagination and a search bar.
    - Build a Single Blog Post page with a comments section.
  - Backend:
    - `GET /api/posts` for blog listing (with pagination).
    - `GET /api/posts/:id` for fetching a single blog (increment view count).
  - Test error handling for invalid post IDs.
- **Deliverable:** Users can browse and read blogs.

### **CRUD Operations (User Dashboard)**

- **Goal:** Allow users to create, edit, and delete their blog posts.
- **Task:**
  - Frontend: Create a **rich text editor** for post creation.
  - Backend:
    - Protected routes for:
      - `POST /api/posts` (create blog).
      - `PUT /api/posts/:id` (edit blog).
      - `DELETE /api/posts/:id` (delete blog).
    - Only post owners can edit/delete their posts.
- **Deliverable:** Authenticated users can manage their blogs.

### **AI Chatbot Integration**

- **Goal:** Enhance user experience with an AI chatbot.
- **Task:**
  - Frontend: Build a floating chatbot button or widget that opens on user click.
  - Connect the widget to the provided **AI Bot API**.
  - Ensure API keys are secured in environment variables.
- **Deliverable:** Users can chat with the AI assistant for content recommendations.

### **6. Testing & Debugging**

- **Goal:** Ensure the app works reliably across all devices and scenarios.
- **Task:**
  - Test all API endpoints with Postman.
  - Frontend: Test components on different screen sizes for responsiveness.
  - Implement basic error handling and user feedback (toasts, alerts).
- **Deliverable:** A polished, bug-free application.

### **7. Deployment**

- **Goal:** Deploy the app to make it accessible online.
- **Task:**
  - Frontend: Deploy to **Vercel** or **Netlify**.
  - Backend: Deploy API to **Render**, **Railway**, or Vercel serverless.
  - Database: Ensure MongoDB Atlas connection is configured for production.
- **Deliverable:** A live, production-ready Social Blogging App.

## ⚖️ **Rubric**

<aside>
💡

**This Rubric is how you will be graded for this phase, and here is how to use it.** 👇

- For each row, find the one cell that matches your work exactly. All bullet points must be true for those points.
- If your work falls between two cells, take the lower score.
- You cannot earn partial credit. No cell = no points.
- If you’re ever in doubt, ask yourself: “Did I do everything listed in this cell?”
</aside>

| **Criteria**                                    |                                                                                                                                                                                                                                           |                                                                                                                                                    |                                                                                                                         |                                                                                                                                                           |                                                                                                                                      |                                                                                                                    |                                                     |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------- |
| **1. Header (Navbar)** (3 max)                  | **3 points:** Fully responsive navbar with logo, login/signup (unauthenticated), profile dropdown (authenticated), and dark/light toggle. _Example: profile dropdown fetches user data via GET /api/auth/user._                           | **2 points:** One feature missing (e.g., _dropdown doesn’t open or dark/light toggle incomplete_). Navbar mostly works but lacks polish.           | **1 point:** Navbar present but missing multiple features or static links only (e.g., _no dropdown or no toggle_).      | **0 points:** Navbar missing entirely.                                                                                                                    | N/A                                                                                                                                  | N/A                                                                                                                | N/A                                                 |
| **2. User Authentication** (6 max)              | **6 points:** Fully functional **Signup**, **Login**, and **Password Reset** pages as separate routes. Forms validated, API integrated, JWT issued & securely stored, redirects to Dashboard, and handles errors (e.g., duplicate users). | **5 points:** One page missing or incomplete validation (e.g., _no password reset flow or weak validation_).                                       | **4 points:** Basic forms exist but fail to connect properly to backend APIs or no redirects.                           | **3 points:** Only Signup/Login forms exist (_Password Reset missing_). Forms are static or dummy, backend routes incomplete (e.g., no password hashing). | **2 points:** Forms created but **non-functional** (_inputs exist but submit doesn’t work_). No backend routes or JWT handling.      | **1 point:** Forms exist visually but **incomplete** (_buttons not wired up, no API_).                             | **0 points:** No authentication system implemented. |
| **3. Collapsible Sidebar** (5 max)              | **5 points:** Sidebar toggles correctly and includes Dashboard, All Posts, Create Post, My Posts. JWT middleware protects routes.                                                                                                         | **4 points:** Sidebar functional but missing links or JWT protection.                                                                              | **3 points:** Sidebar present but not collapsible or lacks important features (e.g., _no Dashboard link_).              | **3 points:** Sidebar exists but **not collapsible** (always visible). Important links missing (_e.g., Dashboard link absent_).                           | **2 points:** Sidebar created but **static** (no toggle function). Links are present but not wired to routes or no state management. | **1 point:** Sidebar exists visually but **non-functional** (_toggle button does nothing or links don’t navigate_) | **0 points:** Sidebar missing entirely.             |
| **4. Blog Feed Section** (6 max)                | **6 points:** Blog feed displays posts with pagination. Blog cards include title, image, author, date, tags, likes, and comments count.                                                                                                   | **5 points:** Pagination incomplete or missing details in blog cards (e.g., _missing tags or likes_).                                              | **4 points:** Blog feed present but no pagination; static data used instead of API calls.                               | **3 points:** Blog feed displays but uses **dummy/static data** only; cards are missing multiple details (e.g., _no author or tags shown_).               | **2 points:** Blog feed exists visually but **non-functional** (e.g., _posts don’t render dynamically or no data fetching_).         | **1 point:** Blog feed section exists but is **completely static** (e.g., hardcoded HTML, no React components).    | **0 points:** Blog feed missing entirely.           |
| **5. Single Blog Post Page & Comments** (4 max) | **4 points:** Displays full blog content with author info, tags, and comments. Users can add comments if logged in. _Views increment on visit._                                                                                           | **3 points:** Page present but missing comments section or view count increment.                                                                   | **2 points:** Page exists but no API integration; static content only.                                                  | **1 point:** Page exists visually but is **non-functional** (_e.g., post details missing, links broken, no interactivity or routing_).                    | **0 points:** Single blog post page missing entirely.                                                                                | N/A                                                                                                                | N/A                                                 |
| **6. Create/Edit/Delete Blog Posts** (4 max)    | **4 points:** Users can create, edit, and delete posts (protected by JWT). Only owners can edit/delete their posts.                                                                                                                       | **3 points:** Create post works but edit/delete functionality missing or insecure.                                                                 | **2 points:** Basic forms exist but no API connection; no role-based access.                                            | **1 point:** Page exists visually but is **non-functional** (_e.g., post details missing, links broken, no interactivity or routing_).                    | **0 points:** CRUD functionality missing entirely.                                                                                   | N/A                                                                                                                | N/A                                                 |
| **7. AI Chatbot Integration** (3 max)           | **3 points:** Floating chatbot widget connects to AI API and returns responses. _Example: Suggests blogs when prompted._                                                                                                                  | **2 points:** Widget present but no API integration; dummy responses shown.                                                                        | **1 point:** Widget exists but non-functional.                                                                          | **0 points:** No chatbot implemented.                                                                                                                     | N/A                                                                                                                                  | N/A                                                                                                                | N/A                                                 |
| **8. Git & GitHub Workflow** (2 max)            | **2 points:** Clean Git history, semantic commits (e.g., _feat: add login form_), PRs for all features, and a complete [README.md](http://readme.md/).                                                                                    | **1 point:** Git used but with poor commit messages or no PRs.                                                                                     | **0 points:** No Git/GitHub usage evident.                                                                              | N/A                                                                                                                                                       | N/A                                                                                                                                  | N/A                                                                                                                | N/A                                                 |
| **9. Task Assignment & Planning** (2 max)       | **2 points:** Tasks are clearly divided and assigned. A **Linear board link is provided**, and each team member has **created a ticket** with a **clear checklist** for their task. Tickets are updated and reflect current progress.     | **1 point:** Linear link is provided, but **some tickets are missing, incomplete, or not updated** (e.g., no checklist or vague task description). | **0 points:** **Linear link is missing** or **no evidence** of task division and individual assignment.                 | N/A                                                                                                                                                       | N/A                                                                                                                                  | N/A                                                                                                                |                                                     |
| **9. Deployment** (2 max)                       | **2 points:** Frontend deployed on Vercel/Netlify, backend deployed on Render/Railway, and MongoDB Atlas configured.                                                                                                                      | **1 point:** Only frontend or backend deployed; environment variables not configured properly.                                                     | **0 points:** Project not deployed.                                                                                     | N/A                                                                                                                                                       | N/A                                                                                                                                  | N/A                                                                                                                |                                                     |
| **10. Backend Routing & Structure** (3 max)     | **3 points:** All routes follow **RESTful standards**, are well-named (`/api/posts/:id`, etc.), and separated into **modular folders** (`routes`, `controllers`). Middleware like `auth.js` is used appropriately and consistently.       | **2 points:** Most routes functional and named logically. Folder structure exists but inconsistent. Middleware exists but is not fully integrated. | **1 points:** Routes are present but scattered. Folder structure not modular. Middleware missing or poorly implemented. | **0 points:** No backend routes or structure defined.                                                                                                     | N/A                                                                                                                                  | N/A                                                                                                                | N/A                                                 |
| **11. Database Schema Design (3 max)**          | **3 points:** MongoDB schemas for `User`, `Post`, and `Comment` are clearly defined with **field types**, **validations**, and **references** (e.g., `ref: 'User'`). Uses timestamps, array fields, and relationships properly.           | **2 points:** Models exist with required fields. Some validation used, but saw relationships are unclear or inconsistent.                          | **1 point:** Minimal schema present. No validation or references. Fields are incomplete or wrong type.                  | **0 points:** No schema defined or only placeholders.                                                                                                     | N/A                                                                                                                                  | N/A                                                                                                                | N/A                                                 |
| **12. API Integration** (**3 max**)             | **3 points:** External API (e.g., OpenAI, Cohere) is integrated, **functioning properly**, and uses **secure keys**, error handling, and clean controller logic. Responses are parsed and displayed meaningfully.                         | **2 points:** API is integrated but with limited functionality or no key protection. Error handling is minimal.                                    | **1 point:** Attempted integration but **not functional** or produces errors. No error handling.                        | **0 points:** No API integration attempted.                                                                                                               | N/A                                                                                                                                  | N/A                                                                                                                | N/A                                                 |

### ✅ **Scoring Summary**

- **Maximum points: 44**
- **Pass mark (80%):** 35/44

## 🚩 **Common Mistakes to Avoid**

- Forgetting to **secure backend routes** with JWT middleware (e.g., users can access "Create Post" without logging in).
- Not validating forms on the frontend (e.g., allowing empty email/password fields).
- Hardcoding data instead of fetching dynamically from the API.
- Storing JWT tokens insecurely (e.g., in plain `localStorage` without considering XSS).
- Failing to test the app on **mobile and smaller screens** (non-responsive design).
- Missing error handling for API calls (e.g., no user feedback when login fails).
- Forgetting to add `.env` for API keys and exposing sensitive credentials on GitHub.
- Forgetting to update the README file with project instructions and team details.
- Not merging branches properly on GitHub (merge conflicts left unresolved).

## ✅ **Self-Check Before Submission**

- [ ] All **frontend pages and components** are responsive on mobile and desktop.
- [ ] User Authentication (**Signup/Login/Password Reset**) works correctly with API integration.
- [ ] Sidebar toggles properly and navigation links are functional.
- [ ] Blog feed dynamically loads posts from the backend with pagination.
- [ ] Single Blog Post page displays all required details, and comments work for logged-in users.
- [ ] Create/Edit/Delete posts work only for logged-in users (tested role-based access).
- [ ] AI Chatbot widget connects to the API and responds as expected.
- [ ] JWT tokens are stored securely and expire as expected.
- [ ] Backend deployed on Render/Railway, and frontend deployed on Vercel/Netlify with **MongoDB Atlas** connected.
- [ ] README file includes team members, project overview, setup instructions, and deployed links.
- [ ] Final code pushed to GitHub with clear commit messages and no sensitive data exposed.
