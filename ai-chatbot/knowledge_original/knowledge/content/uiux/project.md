# Design Phase

### 🎯 Goal

The goal of this project is to evaluate your ability to create an **accessible**, **component-based**, and **responsive** user interface using UI design tools (Figma), semantic HTML structures, and accessibility best practices. You will design and test a simple blogging platform interface that complies with **WCAG guidelines** and supports users with diverse needs

Students will act as **UI/UX Designers** responsible for creating wireframes, high-fidelity prototypes, and a well-documented **design system** that includes reusable components, typography, color styles, and iconography. You will use tools like Figma and Google Docs to communicate your design intent. Your deliverables will directly inform developers who will later implement your designs

## 🎒 **Learning Goals**

1. Apply **WCAG accessibility principles** consistently across a shared **design system**
2. Build and document **reusable, accessible UI components** using tokens, variants, and clear interaction states
3. Structure UI using **semantic HTML and ARIA best practices**, ensuring the design system supports assistive technologies
4. Design for **responsive behavior across breakpoints**, defining layout rules and adaptive patterns in the design system
5. Test components and full-page designs using accessibility tools (e.g., **WAVE, Axe, screen readers**) and integrate findings into the system
6. Apply structured **Design Thinking** to real-world projects, using the design system as a central source of truth for collaboration between designers and developers

## 📋 **Requirements:**

- Conduct **accessibility-informed user research** (e.g., interviews, observations, usability testing).
- Define **2–3 inclusive personas**, including at least one with accessibility challenges (e.g., screen reader user, low-vision, keyboard-only).
- Map out clear **user flows** aligned with system use:
  - Viewing blog posts
  - Reading a full blog post
  - Submitting a blog post
  - Navigating via keyboard or screen reader
- **Establish and document a branding and UI design system** for your blogging platform in a centralized **Design System file**:
- **Branding System** (Documented in the Design System file):
  - Define the **platform name**, tone, and brand voice
  - Include visual identity assets: **color palette**, font pairings, imagery/mood board
  - Document how brand elements map to **WCAG-compliant color contrast** with examples and hex values
  - Showcase brand usage with annotated UI examples (e.g., headings, text links, primary CTAs)
- **Component-Based UI System** (Documented and organized in the Design System file):
  - Design and organize **reusable components**:
    - Buttons (default, hover, focus, disabled states)
    - Input fields (with labels, errors, helper text)
    - Blog preview cards
    - Navigation bars, sidebars, footers
    - Modals/tooltips (for submission, onboarding, or navigation tips)
  - Define component anatomy (e.g., spacing, padding, label placement)
  - Use **Figma variants, Auto Layout, and constraints** to make components responsive
  - Establish **naming conventions**, documentation, and usage guidelines for the developer handoff
- Design the following **core screens and UI sections**:
- **Login Page**
  - Email & password fields with labels
  - Show/hide password toggle
  - “Forgot password?” link
  - Error handling for invalid inputs
  - Accessible and keyboard-friendly
- **Signup Page**
  - Name, email, and password fields
  - Password rules/help text
  - Success and error messages(popups)
- **Forgot/Reset Password**
  - Email input for reset
  - Confirmation message ("Check your email")
  - Option to return to login
- **Home Screen**
  - Header(Nav Bar)
    - Keyboard and screen reader accessible
    - Includes skip links, visible focus indicators, ARIA roles as needed
    - Include logo, right side login button, profile icon, light/dark mode toggle
  - Blog feed using card components
  - Responsive grid layout
  - **Collapsible/expandable toggle sidebar**
    - Icons with labels (visible when expanded)
    - Highlight active section
    - Works on **mobile and desktop**
- **Blog Post Page**
  - Full article layout with semantic structure (headings, lists, quotes)
  - Clearly readable text, proper spacing, and structure for long-form content
- **Dashboard Page**
  - Allow users to v**iew, create, Update, and delete** blog posts or content.
  - Use **accessible form UIs** with:
    - Input validation
    - Helper text
    - Error states
- All UI elements (e.g., **input fields, buttons, dropdowns**) must be:
  - **Reused from your design system**
  - Styled consistently across screens
  - Accompanied by clear documentation in your design system file
- Design an accessible, toggleable chatbot UI that :
  - Supports interactions like (e.g., **TrendHunter**, **Writer**, **Editor**, **Summarizer**), each with distinct icons or colors.
  - Includes features like:
    - Floating button or persistent widget
    - Screen reader & keyboard accessibility
    - Typing animations, quick replies, loading/fallback states
    - Light/dark mode support
  - Enables tasks like: searching trending topics, generating content, editing tone, and summarizing posts.
  - All components, styles, and behaviors must be documented in the **design system**.
- Ensure all UI elements:
  - Use **semantic HTML structure** (e.g., headings, lists, landmarks)
  - Are **keyboard-navigable** and screen reader-friendly
  - Include **visible focus indicators** and proper ARIA labels if needed
- Add **WCAG-compliant features**, such as:
  - Skip to content links
  - High contrast and readable text sizes
  - Descriptive alt text and aria-labels
  - No color-only indicators (e.g., not relying on red text alone for errors)
- Provide **sample accessibility test results**:
  - Screenshot automated audit (WAVE, Lighthouse)
  - Manual test notes (keyboard-only, zoom to 200%, screen reader summary)
- Create **low-fidelity wireframes** for each page first.
- Build a **high-fidelity clickable Figma prototype**:
  - Mobile and Desktop views (min.)
  - Demonstrate layout responsiveness across devices
- Use:
  - **Figma Auto Layout**, constraints, and **components**
  - Variants for buttons/forms
  - Labels and layers are consistently named and organized
- Include:
  - **Hover, tap, and focus states**
  - WCAG **self-audit** table (at least 10 checkpoints you tested and passed)
- Document your process clearly:
  - UX strategy and user research summary
  - Accessibility goals and constraints
  - Design system decisions (typography, color, layout)

### 🧭 From Research to Interface

With your empathy work, personas, and user flows complete, it’s time to bring your design to life. The next section outlines the required UI components you must include in your Figma prototype. Your final design should reflect user insights, demonstrate thoughtful layout choices, and maintain a consistent brand across desktop and mobile.

**Accessibility must be a core priority** in all design decisions, including color contrast, focus indicators, keyboard navigation, and screen reader compatibility. Designs should align with **WCAG 2.1** guidelines (AA level minimum).

This design will directly guide the development phase, so it must be completed and shared on time. Any delay or failure to deliver a high-quality, accessible design will hold the Designer accountable for impacting the team’s overall progress and performance.

### ✅ Required Sections

### **1. Header ( Navigation Bar)**

Ensure seamless access to key areas of the app.

- Navbar with platform logo, app name
- Auth buttons: Login / Signup (if not logged in)
- Profile dropdown (if logged in) → Must show accessible focus states
- Light/Dark mode toggle with animation
- Responsive collapse into hamburger menu on smaller viewports

**Interaction States:**

- Hover, focus, and active for all buttons
- Menu animation transitions
- Keyboard navigation and skip links

---

### **2. User Authentication Pages**

**Screens to Design:**

- Signup
- Login
- Password Reset

**Design Requirements:**

- Form fields with clear labels, errors, and helper text
- Accessible input focus indicators
- Use existing **Input + Button components** from Design System
- Responsive layout (centered form on mobile, side-by-side layout on desktop optional)
- Error & success message popup component

---

### **3. Collapsible Sidebar**

**Component Requirements:**

- Toggleable sidebar with slide-in/out animation
- Navigation links for:
  - Dashboard _(authenticated only)_
  - All Posts
  - My Posts _(authenticated only)_
  - Create Post _(authenticated only)_
- Highlight current page (active link style)
- Match color scheme (light/dark mode support)
- Use **icon + label** for each item

---

### **4. Blog Feed Section**

**Page Structure:**

- Blog cards are displayed in a responsive **grid or list layout**
- Cards include:
  - Title, featured image, and summary
  - Author name + avatar
  - Date, likes, and comment count
  - CTA button: "Read More"

**Card Component States:**

- Hover (lift or shadow effect)
- Focus on accessibility

**Other Features:**

- Pagination (button styles or infinite scroll indicators)
- Filtering UI (tags dropdown, most liked/recent toggle)

---

### **5. Single Blog Post Page & Comments**

**Layout:**

- Title, cover image, blog content (headings, paragraphs, quotes, images)
- Author info block
- Like button and tag chips
- **Comment thread** with:
  - At least 2 nested comment levels
  - Add Comment field (only if logged in)
  - Use consistent form components

**Accessibility:**

- Semantic structure for headings and content
- Focus state on comment form and the like button

---

### **6. Create/Edit/Delete Blog Post (Dashboard)**

**Pages to Design:**

- Dashboard overview
- Create Post page
- Edit Post form
- My Posts list

**Design Notes:**

- Use **rich text editor component** (or simulate markdown preview)
- Tags input with chips
- “Save draft” (optional)
- "Edit" and "Delete" buttons for each post (with confirmation modals)
- Form field validation designs

---

### **7.AI Assistant Interface (Multi-Agent Chatbot)**

**Component Requirements:**

- Floating chatbot button (bottom-right)
- Expandable chat window with:
  - Clear **agent attribution** in each message bubble (e.g. "✍️ WriterAgent", "🔍 TrendHunterAgent")
  - **Agent icons** or avatars to visually distinguish different roles
  - Message color coding or badges for each agent's responses
  - **Quick action buttons** or dropdown to select which agent to query (e.g., “Ask TrendHunter”, “Request Summary”)
  - Support for multi-turn interactions and agent handoff (e.g., TrendHunter ➝ Writer ➝ Editor ➝ Summarizer)
- Light and dark mode support
- **Accessibility:**
  - Focus traps
  - Keyboard navigation
  - ARIA live regions for screen readers
- Loading, error, and fallback states per agent
- Support for sample prompts (e.g., “📈 Find trending blog topics”, “✍️ Help me write an intro”, “🧹 Edit this paragraph”, “🧾 Summarize this post”)

---

### **Design System Additions:**

- **Agent-specific avatars/icons**
- **Message bubble variants** for each agent
- **Tag/badge components**: For agent roles, e.g. `role="WriterAgent"`
- **Quick reply button component**: Styled consistently and included in the design system
- **Color styles** to visually differentiate responses (e.g., blue for WriterAgent, green for TrendHunterAgent)

---

### **8. Design System File**

Must include the following, all well-labeled and organized:

- **Color Styles**
  - Primary, secondary, text, background, border, success, error
  - Accessible contrast pairs
- **Typography**
  - Font family
  - Heading sizes (H1–H6), paragraph, caption
  - Line height, font weight tokens
- **Spacing & Layout**
  - Spacing tokens (e.g., 4, 8, 16, 32)
  - Layout grid (e.g., 12-column grid)
  - Breakpoints (mobile, tablet, desktop)
- **Component Library**
  - Buttons (with variants: default, ghost, disabled, loading)
  - Inputs (text, password, textarea, tags)
  - Cards (blog preview, author info)
  - Navbar, sidebar, footer
  - Modal, tooltip, alert, toast
  - Chatbot widget
- **Icons & Assets**
  - Exported SVGs or linked icon library
  - Illustrations or placeholders

---

### **9. Responsive Design**

Ensure seamless experience across all devices.

- Define breakpoints for:
  - Mobile (≤640px)
  - Tablet (641–1024px)
  - Desktop (≥1025px)
- Responsiveness behavior:
  - The header condenses into a hamburger
  - Blog grid shifts from 3→2→1 column
  - Comments stack vertically
  - Buttons full-width on mobile
  - Create page remains form-friendly on mobile

## 🎯 **Objectives**

- Apply the full **Design Thinking** process to create a user-centered, research-driven **blogging platform** experience.
- Conduct and present actionable **user research insights** that directly inform UI design decisions and development priorities.
- Apply **WCAG 2.1 accessibility standards** to ensure inclusive, barrier-free experiences across all screens and components.
- Establish a documented **Design System** to unify design and development efforts, including:
  - **Branding guidelines** (typography, color palettes, tone of voice, iconography)
  - **Reusable, accessible components** (buttons, inputs, cards, navbars, modals, tooltips, sidebar, etc.)
  - **Interaction states**, component variants, and usage documentation for developer handoff
- Use **semantic HTML patterns** and ARIA best practices as a shared reference for dev implementation.
- Design a clear **visual hierarchy** and maintain strong **color contrast** and legible typography across all layouts and breakpoints.
- Define and prototype smooth **user flows** for key actions:
  - Browsing and filtering blog posts
  - Reading full articles
  - Submitting blogs
  - Navigating via keyboard/screen reader
  - Interacting with the **chatbot assistant**
- Seamlessly integrate a persistent or pop-up **chatbot interface** into the layout, ensuring it's non-intrusive, fully accessible, and helpful to all users.
- Ensure all screens are fully **responsive** across mobile, tablet, and desktop devices.
  - Document layout variations and constraints clearly in the **Design System file**
- Deliver a **developer-aligned Figma prototype** using:
  - **Auto Layout**, responsive constraints, and structured layers
  - Named components with clear documentation and annotations
  - Variants for interactive elements and modals

---

### 🚦 Recommended **Workflow**

1. **Task Assignment & Planning**

- **Design System First:**
  - Set up a **shared design system** in Figma (color tokens, typography, grids, spacing, components).
  - Build **reusable components** (buttons, form fields, modals, cards, nav, chat UI) with variants and states.
  - Use **autolayout**, **naming conventions**, and **component documentation**.
  - Create a dedicated **“Design System” page** in your Figma file.
- **Screen & Flow Design:**
  - Organize work into **feature-based Figma pages** (e.g., `Auth Screens`, `Blog Feed`, `Chatbot UI`, `Dashboard`).
  - Design with **accessibility** (WCAG) and **mobile-first** principles in mind.
  - Ensure all components used are pulled from the design system.
- **AI-Enhanced Interfaces:**
  - Collaborate with AI/tech leads to:
    - Visualize CrewAI agent flows (e.g., trend detection UI, AI writing assistant, summarizer feedback)
    - Design chat interactions (typing states, quick replies, status messages)
    - Clarify how AI feedback appears visually (inline, modal, tooltip, etc.)
- **Tickets & Progress:**
  - For each feature or screen, create a **Linear design ticket** with:
    - Clear feature or page title
    - Links to related Figma frames
    - Checklist of subtasks (e.g., “Design login modal”, “Document button states”)
    - Tags (e.g., `UI`, `UX`, `Design System`, `AI UI`)
  - Update progress as you move through stages:
    - `In Progress` → `Review with Dev` → `Finalized`

**2. Definition Phase:**

- **Project Goals Document**
  - Define a clear mission that aligns user needs with content engagement and technical constraints.
  - Example: "Design a human-centered blogging platform that empowers users to write, explore, and engage with posts easily, while ensuring accessibility and ease of navigation."
- **User Personas**
  - Create 3-4 detailed personas grounded in your research.
    - Example 1: _James, 22, a student who reads blogs on tech and prefers dark mode and keyboard shortcuts._
    - Example 2: _Aisha, 29, is a casual writer who wants to quickly post and edit her blogs on the go._
    - Example 3: _Musa, 35, a visually impaired reader who relies on screen readers and prefers accessible layouts._

---

**3. Empathy Phase:**

- **User Research Summary**
  - Conduct surveys or interviews focused on:
    - What motivates users to write or read blogs?
    - What challenges do they face using blogging platforms?
    - How important is accessibility (e.g., keyboard navigation, color contrast)?
  - Summarize insights such as:
    _“Users are more likely to stay if they can customize reading modes and navigate posts efficiently.”_
- **Empathy Maps**
  - Create at least 2 empathy maps using: _Says, Thinks, Does, Feels_
    - Example:
      - _Says:_ “I hate when the font is too small or light.”
      - _Thinks:_ “I hope this site remembers my reading preferences.”
      - _Does:_ Scrolls quickly to look for the latest blogs.
      - _Feels:_ Confused when buttons aren’t labeled clearly for screen readers.

---

**4. Ideation Phase:**

- **Brainstorming Notes**
  - Explore layout ideas for homepage, blog creation, reading mode, and commenting.
  - Apply **WCAG principles,** including:
    - **Color Contrast:** Text must meet AA or AAA standards.
    - **Keyboard Navigation:** Ensure all buttons and inputs are reachable without a mouse.
    - **Descriptive Links and Headings:** Use clear, meaningful labels.
- **Feature Prioritization List**
  - Categorize features by impact and feasibility:
    - High: Responsive design, accessible post creation, alt text for images, readable blog layout.
    - Medium: Blog tags/filtering, light/dark theme toggle, chatbot integration.

---

**4. Storyboarding Phase:**

- **Paper Storyboards**
  - Sketch realistic user flows:
    - A user writes a blog → previews → posts it → receives comments.
    - A user lands on the homepage → filters posts → reads → uses the chatbot to find trending topics.
- **Storyboard Review**
  - Share and iterate based on peer feedback and accessibility reviews.

---

**6. Wireframing Phase:**

- **Low-Fidelity Wireframes** (mobile & desktop):
  - Homepage
  - Post creation page
  - Blog reading layout
  - Profile page
  - Chatbot interface
- **Digital Wireframes (Figma)**
  - Include annotations like:
    - _"This button is focusable via keyboard"_,
    - _"High contrast text for readability."_

---

**7. Synthesis Phase:**

- **Synthesized Insights Document**
  - Example: _"Users want quick access to trending blogs and expect clear visual cues. Accessibility needs such as screen-reader labels and proper contrast significantly improve their trust in the platform."_
- **Updated Wireframes**
  - Update based on test feedback, especially regarding:
    - Button visibility
    - Readable text
    - Accessible tab orders

---

**8. Visual Design Phase:**

- **Color Palette & Typography Guide**
  - Use accessible contrast ratios, font sizes (16px minimum), and avoid using color alone to convey meaning.
  - Use hierarchy for clarity (e.g., bold headlines, descriptive subheadings).
  - Example: “Choose a cool, calming color palette with at least 4.5:1 contrast for body text.”
- **Iconography & Images**
  - Use inclusive icons (e.g., neutral avatars) and ensure **alt text** is provided for all images.
  - Avoid clutter and support visual scanning with proper spacing and layout grouping.

---

**9. Prototyping Phase:**

- **Clickable Prototype (Figma)**
  - Include:
    - Homepage navigation
    - Blog creation and editing flow
    - Chatbot interaction
    - Light/dark mode toggle
    - Keyboard-navigable interface and screen reader labels (use Figma’s prototyping notes to simulate)

---

**10. Testing Phase:**

- **Usability Testing Report**
  - Observe how 3+ users:
    - Create and publish a post
    - Explore the blog feed
    - Use the chatbot
    - Switch accessibility settings (dark mode, zoom, keyboard nav)
  - Note friction points and WCAG violations (e.g., “Button lacks focus indicator”)

---

**11. Iteration & Reflection:**

- **Iteration Document**
  - Log updates like:
    - _"Replaced colored icons with labeled buttons to ensure better contrast and understanding."_
- **Reflection Document**
  - Discuss:
    - How accessibility principles shaped your design
    - What user insights surprised you
    - Lessons from testing and iteration
    - How you’d improve it with more time

---

### ⚖️ **RUBRIC - READ THIS CAREFULLY!**

<aside>

**This Rubric is how you will be graded for this phase, and here is how to use it** 👇

- For each row, find the one cell that matches your work exactly. All bullet points must be true for those points.
- If your work falls between two cells, take the lower score.
- You cannot earn partial credit. No cell = no points.
- If you’re ever in doubt, ask yourself: “Did I do everything listed in this cell?”
</aside>

| Criteria                                                                                                                                |                                                                                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                           |                                                                                                                                                                                                                                                                |                                                                                                                                                                                                                                            |                                                                                                                                                                                                                            |                                                                                                                                                                                                    |
| --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Design Thinking Flow(Includes user strategies, personas, empathy maps, journeys, user flows, prototyping, testing, and handoff) (6 max) | **6 Points:** Full Design Thinking cycle completed with depth, clarity, and user-centered insight. Rich user research (3+ diverse users), detailed empathy maps, clear user strategies, structured personas, emotional user journeys, functional user flows. Strong ideation. High-fidelity prototype using design system. Tested with users. Well-structured handoff with annotations and developer-ready assets. | **5 Points:** All phases completed with minor issues in clarity or consistency. Research solid (2–3 users), empathy maps and personas thoughtful. User flows mostly accurate. Prototype near-final with clear screens. Some testing done. Handoff mostly structured. | **4 Points:** Most phases present, but 1–2 areas lack depth (e.g. light research or vague ideation). Empathy maps or user flows may feel generic. Prototype mid-fidelity or lacking interactions. Minimal testing or missing annotations. | **3 Points:** Incomplete flow. Shallow research (1–2 users max). Personas/empathy maps weak. Prototype rough or not tied to user needs. Testing is minimal or missing. Developer handoff unclear.                                                              | **2 Points:** Attempt made, but content lacks logic or clarity. Personas, flows, and prototypes are either missing or poorly executed. Testing skipped. Handoff disorganized or not usable.                                                | **1 Points:** Major gaps across all phases. UX work is unclear, inconsistent, and lacks real user focus. No testable prototype. No collaboration readiness.                                                                | **0 Points:** No submission or completely off-topic work.                                                                                                                                          |
| **User Authentication** (6 max)                                                                                                         | **6 points:** Signup, Login, and Password Reset screens fully designed and implemented with accessible, clear layouts. Uses design system components (inputs, buttons, states). Responsive and WCAG-compliant.                                                                                                                                                                                                     | **5 points:** All 3 screens exist with consistent styling and partial validation or accessibility issues. Some minor deviation from design system standards.                                                                                                         | **4 points:** Basic design implemented; inconsistent spacing or colors. Validation/feedback UI is missing or poorly designed..                                                                                                            | **3 points:** One or more screens missing. Incomplete styling or confusing layout.                                                                                                                                                                             | **2 points:** Static mockups only, no working navigation or visual feedbac**k.**                                                                                                                                                           | **1 point:** Visual-only forms with placeholder elements, no navigation or structure                                                                                                                                       | **0 points:** No authentication system implemented.                                                                                                                                                |
| **3. Collapsible Sidebar** (5 max)                                                                                                      | **5 points:** Responsive, collapsible sidebar UI designed with clear hierarchy and consistent iconography. Smooth transitions, toggles properly. Aligns with design system.                                                                                                                                                                                                                                        | **4 points:** Sidebar designed with toggle but animation or accessibility partially missing. Icons or labels slightly inconsistent.                                                                                                                                  | **3 points:** Sidebar exists with navigation but lacks toggling or feels cluttered. Typography/hierarchy may be off.                                                                                                                      | **3 points:** Sidebar is static, always visible. Some links missing or mislabeled.                                                                                                                                                                             | **2 points:** Sidebar visually exists but lacks interaction. Poor layout or misaligned elements.                                                                                                                                           | **1 point:** Sidebar looks unstyled or broken, not functional.                                                                                                                                                             | **0 points:** Sidebar missing entirely.                                                                                                                                                            |
| **4. Blog Feed Section** (6 max)                                                                                                        | **6 points:** Blog feed displays posts with pagination. Blog cards include title, image, author, date, tags, likes, and comments count.                                                                                                                                                                                                                                                                            | **5 points:** Pagination incomplete or missing details in blog cards (e.g., _missing tags or likes_).                                                                                                                                                                | **4 points:** Blog cards exist but repetitive or lack proper spacing/structure. No loading skeletons.                                                                                                                                     | **3 points:** Blog feed uses placeholders or lacks styling polish. Details like author or tags missing**.**                                                                                                                                                    | **2 points:** Blog cards poorly styled or misaligned. Static content only                                                                                                                                                                  | **1 point:** Placeholder cards exist but unfinished design.                                                                                                                                                                | **0 points:** Blog feed missing entirely.                                                                                                                                                          |
| **5. Single Blog Post Page & Comments** (4 max)                                                                                         | **4 points:** Displays full blog content with author info, tags, and comments. Users can add comments if logged in. _Views increment on visit._                                                                                                                                                                                                                                                                    | **3 points:** Page present but missing comments section or view count increment.                                                                                                                                                                                     | **2 points:** Post visually exists but comments form or layout broken.                                                                                                                                                                    | **1 point:** Static layout with content placeholder, no interactivity**.**                                                                                                                                                                                     | **0 points:** Single blog post page missing entirely.                                                                                                                                                                                      | N/A                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                |
| **Create/Edit/Delete Blog Posts** (4 max)                                                                                               | **4 points:** Create/Edit/Delete interfaces follow consistent form layout, input styling, and error handling. Clear call-to-actions and safe interaction patterns (e.g., modals, toasts).                                                                                                                                                                                                                          | **3 points:** Create post works but edit/delete functionality missing or insecure. Create post UI styled, edit/delete UIs exist but have rough interactions (e.g., no modals or confirmation prompts).                                                               | **2 points:** Basic form layout exists, but buttons lack state handling. Some inconsistencies in field groupings or alignment.                                                                                                            | **1 point:** Forms visually broken, or no distinction between create/edit**.**                                                                                                                                                                                 | **0 points:** No design for blog management screens.                                                                                                                                                                                       | N/A                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                |
| Chatbot UI Design (4 max)                                                                                                               | **4 Points:** Fully integrated chatbot UI with accessible features: clear prompts, logical focus order, visible labels, screen reader support hints.                                                                                                                                                                                                                                                               | **3 Points:** Input fields and prompts present but may lack some accessibility enhancements.                                                                                                                                                                         | **2 points:** Chatbot layout present but minimal or missing some core elements.                                                                                                                                                           | **1 point:** Chat interface included but very basic and not styled.                                                                                                                                                                                            | **0 points:** No chatbot UI included.                                                                                                                                                                                                      | N/A                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                |
| Visual Design & Branding (5 max)                                                                                                        | **5 Points:** Consistent typography, spacing, and color with WCAG-compliant contrast. Layouts respect hierarchy, simplicity, readability.                                                                                                                                                                                                                                                                          | **4 Points:** Visual consistency strong, but a few contrast or spacing issues remain.                                                                                                                                                                                | **3 points:** Visual design present but lacks consistency or polish across screens.                                                                                                                                                       | **2 points:** Layouts are cluttered or fail to reflect brand clearly.                                                                                                                                                                                          | **1 point:** Branding is weak, visuals are unbalanced, or styles are generic.                                                                                                                                                              | **0 points:** No visual design or branding applied.                                                                                                                                                                        | N/A                                                                                                                                                                                                |
| Accessibility Compliance (6 max)                                                                                                        | **6 Points:** Follows WCAG 2.1 AA guidelines across all key user flows. Includes: alt text for all images/media, full keyboard navigability, contrast ratio checks, logical reading order, and semantic labels (e.g. ARIA roles, landmark regions). Dev handoff includes accessibility notes, e.g. aria-labels, skip links, alt descriptions.                                                                      | **5 Points:** Most WCAG 2.1 AA requirements met. Minor accessibility issues or inconsistent implementation in 1-2 flows or views (e.g. missing alt text or incomplete keyboard path). Most components are accessible, but not fully documented.                      | **4 Points:** Accessibility is addressed in some core views, but gaps exist e.g., inconsistent use of semantic tags, color contrast not checked everywhere, or incomplete screen reader support. Annotations for devs are partial.        | **3 Points:** Some accessibility considerations are present, but not consistent. For example: one view supports keyboard nav, but another doesn't. Alt text or roles are inconsistently applied. Little evidence of testing across devices or assistive tools. | **2 Points:** Attempt made to include accessibility, but major elements are missing or broken. Designs may include alt text or contrast checks in isolated areas, but overall not user-friendly for all. No dev handoff guidance included. | **1 Points:** Accessibility is superficially mentioned or represented with incorrect tags/approaches. Use of color, structure, and navigation shows lack of understanding of inclusive design. No dev-facing instructions. | **0 Points:** No accessibility considerations present. Designs are inaccessible : poor contrast, missing alt text, no semantic labels, no keyboard access, and no attempt at inclusive navigation. |
| Responsiveness (3 max)                                                                                                                  | **3 Points:** Responsive designs shown for mobile and desktop. Layouts adapt cleanly with reflowable content and touch-friendly elements.                                                                                                                                                                                                                                                                          | **2 Points:** Mobile layout present but responsiveness inconsistent or unclear.                                                                                                                                                                                      | **1 Points:** Attempted mobile version but not responsive or usable.                                                                                                                                                                      | N/A                                                                                                                                                                                                                                                            | N/A                                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                |
| Reusable Components (4 max)                                                                                                             | **4 Points:** Figma file uses components, variants, and naming structure consistently. Reusability is clear (e.g., buttons, cards, input fields). Developers can easily replicate UI patterns.                                                                                                                                                                                                                     | **3 Points:** Components used in most places, minor inconsistencies in naming or structure.                                                                                                                                                                          | **2 Points:** Some components used but not consistent or scalable.                                                                                                                                                                        | **1 Points:** UI manually copied across screens with no use of components.                                                                                                                                                                                     | N/A                                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                |
| Design System (4 max)                                                                                                                   | **4 Points:** A well-documented, consistent, and reusable design system is implemented. Includes tokens (colors, typography, spacing), components (buttons, forms, modals, etc.), states (hover, disabled), and responsive guidelines. Used consistently across the project.                                                                                                                                       | **3 Points:** Design system is mostly complete. Tokens and components are present but documentation is limited or inconsistent. Minor inconsistencies in usage across the product.                                                                                   | **2 Points**: Some components and styles exist, but they are not systematized or reused consistently. Lacks documentation or design tokens. Duplication or visual inconsistencies are present.                                            | **1 Point:** Design system attempted but is fragmented or incomplete. Components are hardcoded/styled ad hoc with no clear structure.                                                                                                                          | **0 Points:** No design system present. UI components are inconsistent and lack reusability                                                                                                                                                |                                                                                                                                                                                                                            |                                                                                                                                                                                                    |
| Handoff Quality (4 max)                                                                                                                 | **4 Points:** Figma organized with components, consistent naming, sectioning, accessibility labels (aria-labels, alt text). Easy for devs to interpret.                                                                                                                                                                                                                                                            | **3 Points:** Mostly structured, but lacks full componentization or clear dev notes.                                                                                                                                                                                 | **2 Points:** Partially labeled or unorganized file.                                                                                                                                                                                      | **1 Points:** Unusable or empty Figma file.                                                                                                                                                                                                                    | N/A                                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                |
| **Task Assignment & Planning** (2 max)                                                                                                  | **2 points:** Tasks are clearly divided and assigned. A **Linear board link is provided**, and each team member has **created a ticket** with a **clear checklist** for their task. Tickets are updated and reflect current progress.                                                                                                                                                                              | **1 point:** Linear link is provided, but **some tickets are missing, incomplete, or not updated** (e.g., no checklist or vague task description).                                                                                                                   | **0 points:** **Linear link is missing** or **no evidence** of task division and individual assignment.                                                                                                                                   | N/A                                                                                                                                                                                                                                                            | N/A                                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                        |                                                                                                                                                                                                    |
| Design Documentation (2 max)                                                                                                            | **2 Points:** Clear 200–300 word write-up explaining decisions, WCAG application, and how design meets user needs.                                                                                                                                                                                                                                                                                                 | **2 Points:** Vague or generic write-up with weak accessibility focus.                                                                                                                                                                                               | **1 Points:** No write-up submitted.                                                                                                                                                                                                      | N/A                                                                                                                                                                                                                                                            | N/A                                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                |

## 🚩 **Common Mistakes Designers Should Avoid**

- Skipping meaningful user research and relying on assumptions instead of insights from real users.
- Creating shallow or generic personas and empathy maps that don’t reflect actual user behavior or accessibility needs.
- Overcomplicating layouts or using excessive decorative elements that reduce usability.
- Designing only for desktop and neglecting responsive behavior across mobile and tablet devices.
- Using inconsistent visual branding, mixing fonts, colors, spacing, or icon styles.
- Failing to meet accessibility standards, e.g., low contrast, missing alt text, lack of keyboard navigation, poor reading order.
- Building unrealistic or disconnected user flows that don’t align with how users interact with the blog platform.
- Designing a chatbot that feels visually or functionally disconnected from the rest of the site.
- Leaving Figma files cluttered, unstructured, or lacking components and documentation makes handoff difficult.
- Skipping usability testing and iteration, ignoring valuable peer or user feedback.

---

## ✅ **Designer Self-Check Before Submission**

- [ ] I conducted real user research and documented actionable insights from interviews or surveys.
- [ ] My personas and empathy maps are original, clearly structured, and reflect the real needs of blog readers and writers.
- [ ] My user flows represent realistic tasks like creating a post, exploring trending blogs, commenting, or managing a user profile.
- [ ] I’ve designed mobile-first wireframes for all required screens, then extended to desktop views.
- [ ] My interactive prototype in Figma covers core features, includes hover/tap/focus states, and works smoothly on both mobile and desktop.
- [ ] My visual system, colors, typography, and layout are consistent and support clarity and brand identity.
- [ ] I followed WCAG 2.1 AA guidelines: high color contrast, alt text, keyboard navigability, semantic structure, and focus indicators.
- [ ] I included a clear, styled chatbot section with example prompts and integrated it seamlessly into the app interface.
- [ ] I used reusable components (e.g., buttons, cards, navbars, comment boxes) and organized them into a Figma component library.
- [ ] My Figma file is clean and handoff-ready: well-labeled frames, nested components, and clear flow logic.
- [ ] I’ve written and included a UX strategy summary (200-300 words) explaining major design decisions.
- [ ] I tested my prototype with peers or users and made iterations based on feedback.
