# Gen AI Phase

### 🎯Goal

Build and integrate a fully orchestrated **agentic content generation system** using **CrewAI with a FastAPI backend** for your **Social Media Blog**. Your Crew orchestration should include agents for **topic research, content writing, and headline crafting**, all collaborating in real-time through CrewAI’s **planning and execution framework**. Together, they must generate a **high-quality, trend-aligned blog post** that’s not only **insightful and engaging** but also ready to go live, bringing automation and creativity together like never before.

> This is where storytelling meets intelligent collaboration. Your task isn’t just to generate a blog post, but to **engineer a team of AI agents** that think, write, and refine together crafting narratives that truly connect with your audience and reflect the voice of your brand.

### **🎒 Learning Goals**

- Understand and utilize CrewAI to define roles, tools, memory, and agent workflows.
- Understand the RAG system and how it aligns with crewAI.
- Utilize LLMs (e.g., Gemini, OpenAI) for automated content generation and task execution.
- An engineer structured collaborative prompts between agents.
- Dynamically generate content based on real-world trends or user-defined themes.
- Manage and document agentic interactions using reproducible, readable code.
- Deploy and test your multi-agent system in a live environment.
- Use **Git for collaborative development** with feature branches, pull requests, and code reviews

### **📋 Requirements**

Your **FastAPI backend for the agentic content generation system** must meet **all** of the following:

---

### **1. CrewAI Integration**

- Implement a fully functioning CrewAI system with role-specific agents: `TrendHunterAgent`, `WriterAgent`, `EditorAgent`, and `SummarizingAgent`
- Define agent roles, tools, memory configurations, and task workflows within the Crew orchestration framework
- Enable smooth coordination between agents using real-time task delegation, retries, and result passing
- Log all agent interactions, reasoning steps, and outputs for review and debugging

### **2. LLM Integration**

- Connect to an LLM (e.g., **Gemini**, **Groq**, or **OpenAI**) for content generation, rewriting, and summarization
- Configure LLM parameters (e.g., temperature, max_tokens) to ensure consistent tone and writing quality
- Ensure API calls are reliable, optimized, and handle rate limits or model-specific constraints
- Allow for model switching via environment configs to enable testing across providers

### **3. Vector Database & Topic Embedding**

- Use a vector database (e.g., **ChromaDB**, **FAISS**, or **Pinecone**) for storing and querying embedded topic chunks
- Build a chunking and embedding pipeline that enables contextual relevance in content generation
- Implement semantic similarity search to retrieve relevant examples, previous blog posts, or knowledge snippets

### **4. Retrieval-Augmented Generation (RAG)**

- Integrate RAG pipelines where agents retrieve supporting context from the vector store before content generation
- Support both user-defined and auto-discovered topics for dynamic RAG input
- Ensure fallback mechanisms when no relevant context is retrieved

### **5. Multi-Agent Content Workflow**

- Orchestrate agents for sequential collaboration:
  - `TrendHunterAgent`: Identifies trending or relevant blog topics
  - `WriterAgent`: Produces core content using structured prompts and context
  - `EditorAgent`: Refines tone, clarity, and structure
  - `SummarizingAgent`: Outputs meta descriptions and blog previews
- Use CrewAI’s `Crew` module for coordination, ensuring step-by-step execution and state management

### **6. Topic & Style Configuration**

- Support POST requests to `/api/generate-blog` with parameters including:
  - `topic` or `auto-generate-topic`
  - `tone` (e.g., casual, professional, witty)
  - `platform guidelines` or `target audience`
- Allow users to customize and control generation preferences

### **7. Logging & Transparency**

- Maintain detailed logs of agent decisions, inputs, outputs, and failed retries
- Display intermediate drafts, summaries, and reasoning steps for review
- Enable audit-friendly review of how each agent contributed to the final output

### **8. API & User Communication**

- Create a public REST endpoint (`/api/generate-blog`) to accept user inputs and return blog results
- Optionally support progress updates via WebSocket, polling, or async callbacks
- Return results in structured JSON format, including content, summary, and metadata

### **9. CORS Support & Security**

- Configure CORS for frontend integration without security vulnerabilities
- Implement rate limiting and request validation
- Add authentication/authorization if handling sensitive operations
- Ensure proper security for model files and prevent exposure in logs or responses

### **10. Error Handling & Resilience**

- Implement robust error handling for invalid inputs, API/model failures, and agent missteps
- Create fallback logic for unavailable topics, models, or RAG failures
- Provide descriptive error messages and graceful user experiences

### **11. Docker Containerization**

- Package the entire backend using Docker for reproducible deployments
- Handle model downloads, embeddings setup, and vector store initialization inside the container
- Include environment-based configuration for switching models, database URIs, and agent parameters

### **12. Deployment**

- Deploy the FastAPI app to a cloud platform (e.g., **Render**, **Railway**, **AWS**, or **GCP**)
- Implement rate limiting, authentication (if required), and secure configuration handling
- Ensure scalability, uptime monitoring, and logging in production

### **13. Postman/API Testing**

- Use **Postman** (or equivalent tool) to test all API endpoints after deployment
- Validate that all input combinations return expected blog post outputs, errors, and summaries
- Include example request and response schemas for reference

### **14. Frontend Connection**

- After deploying the containerized FastAPI backend, integrate it with the frontend application using minimal JavaScript (e.g., a simple `fetch()` ).

### **🎯 Objectives**

Your project will be evaluated on your ability to:

- **Architect and implement a modular agentic AI system** using **CrewAI**, where multiple agents collaborate through structured workflows to generate platform-appropriate blog content
- **Design intelligent, goal-driven agents** that coordinate effectively to produce engaging, coherent blog posts aligned with user-defined or trend-based topics
- **Build production-ready API endpoints** (e.g., `/api/generate-blog`) with robust input validation, secure access, and reliable error handling
- **Demonstrate transparent multi-agent reasoning and collaboration** by logging intermediate outputs and decisions from each agent for full traceability
- **Implement chain-of-thought prompting strategies** that simulate deep reasoning and structured content development
- **Use vector databases and embeddings effectively** with tools like ChromaDB or Pinecone, and containerize them for scalable, reproducible deployment
- **Show mastery of DevOps practices** by containerizing your system with Docker and deploying it to the cloud with proper environment configurations
- **Integrate optional real-time topic discovery** using APIs like Google Trends or Reddit to dynamically align blog content with current events
- **Maintain a clean and collaborative codebase** using GitHub, with clear commit history, well-documented pull requests, and a comprehensive README for setup and deployment instructions

> 🟨 **Bonus (+2 points): Add Swagger for Easy API Testing**

Make your API easier to use by **adding Swagger UI** with FastAPI. This gives a **simple web page where users and developers can see all your API endpoints, try them out, and understand how they work**—without needing extra tools. It helps others test your AI system quickly and makes your project more user-friendly.

### 🚦 How to Start (Workflow)

1. **Design and Organize Knowledge Base for Content Generation**
   - Define platform-specific content guidelines
   - Collect high-performing blog post examples and convert them into a vectorized dataset for embedding and retrieval
   - Categorize tone and style preferences (e.g., professional, witty, inspirational)
   - Prepare structured prompt templates for each agent (e.g., research, drafting, editing, summarizing)
   - Document formatting standards for each platform (e.g., ideal post length, title structure, content segmentation)
2. **Set Up Development Environment and Dependencies**
   - Create and activate a Python virtual environment using `venv` or `poetry`
   - Install necessary packages (`crewai`, `openai`, `langchain`, `fastapi`, `pydantic`, `uvicorn`)
   - Manage dependencies using `requirements.txt` or `pyproject.toml`
   - Set up environment variables (`.env`) for API credentials (e.g., OpenAI, Gemini)
3. **Implement CrewAI Agent System**
   - Define at least four agents (e.g., `TrendHunterAgent`, `WriterAgent`, `EditorAgent`, `SummarizerAgent`)
   - Configure each agent with:
     - An assigned LLM (OpenAI, Gemini, etc.)
     - Relevant tools (if applicable)
     - Agent-specific memory and distinct objectives
   - Initialize a `Crew` object with a logical and sequential execution plan
4. **Engineer Prompt Templates and Agent Task Flow**
   - Design detailed and structured prompts tailored to each agent’s role and platform tone guidelines
   - Chain agent interactions to form a complete content pipeline (topic discovery → draft writing → editing → summarization)
   - Enable logging of agent decisions and reasoning (`verbose=True`) for transparency and debugging
5. **Implement Orchestrated Content Execution**
   - Build a central function `run_crew()` that:
     - Invokes `Crew.run()`
     - Captures each step’s intermediate output and logs
     - Returns the final blog post for publishing or further review
   - Validate and test the output structure and formatting
6. **Add Dynamic Topic Input System**
   - Allow content topic submission through:
     - Manual user input (`POST /generate-blog`)
     - Automated external APIs (e.g., Google Trends, Reddit)
   - Translate topic data into agent-compatible context using dynamic prompt injection
7. **Develop FastAPI Backend with Core APIs**
   - Organize backend with clean project structure
   - Implement main API endpoints:
     - `POST /api/generate-blog` → triggers the blog generation pipeline
     - `GET /api/logs/{session_id}` (optional) → retrieves agent logs for transparency
   - Define request and response models with validation (e.g., blog topic, platform, tone)
8. **Add Security, Error Handling, and Monitoring**
   - Sanitize and validate all incoming requests
   - Implement rate limiting and request throttling to prevent abuse
   - Configure CORS for seamless frontend-backend communication
   - Set up clear and user-friendly error messages
   - Integrate logging and performance monitoring tools for operational visibility
9. **Containerize with Docker and Prepare for Deployment**
   - Create a Dockerfile containing all project dependencies and configuration
   - Use Docker Compose for orchestrated local development and multi-service support
   - Securely manage environment variables and secrets
   - Test image builds and simulate local deployments
   - Prepare production-ready deployment files and configure persistent storage for models (if needed)
10. **Deploy Backend to Cloud Platform**

- Deploy the Dockerized backend to a cloud provider (Render, Railway, etc.)
- Set up production environment variables and connect necessary services (e.g., databases, APIs)
- Enable logging and uptime monitoring in production
- Test live endpoint functionality and end-to-end performance

**10. API Testing with Postman**

- Once the backend is deployed, test the chat endpoint using Postman or any other API testing tool. This helps confirm that the backend logic and routes respond correctly before connecting them to the frontend.

**11. Frontend Integration**

- Connect the deployed (and tested) FastAPI backend to the frontend using simple JavaScript. A basic `fetch()` request

**12. Setting Up and Using Git/GitHub Workflow**

To version control your project and collaborate efficiently, follow these steps:

1. **Initialize Git in your local project** by navigating to your project folder in the terminal and running:

   ```bash
   bash

   git init

   ```

2. **Create a new repository on GitHub:**
   - Go to [GitHub](https://github.com/), click **"New"**.
   - Enter your repository name and details.
   - Do **not** initialize with a README if you already have files locally.
3. **Connect your local project to GitHub:**

   ```bash
   bash

   git remote add origin https://github.com/yourusername/your-repo-name.git

   ```

4. **Add your project files and commit:**

   ```bash
   bash

   git add .
   git commit -m "Initial commit with API endpoints and documentation"

   ```

5. **Push your code to GitHub:**

   ```bash
   bash

   git push -u origin main

   ```

   _(Change `main` if your default branch has a different name.)_

6. **Create new branches for features or fixes:**

   ```bash
   bash

   git checkout -b feature/new-endpoint

   ```

7. **Make changes, then stage and commit:**

   ```bash
   bash

   git add .
   git commit -m "Add /api/summarize endpoint"

   ```

8. **Push your branch to GitHub:**

   ```bash
   bash

   git push origin feature/new-endpoint

   ```

9. **Open a pull request on GitHub** to review and merge your feature branch into `main`.

### **RUBRIC - READ THIS CAREFULLY!**

<aside>
💡

**This Rubric is how you will be graded for this phase, and here is how to use it** 👇

- For each row, find the one cell that matches your work exactly. All bullet points must be true for those points.
- If your work falls between two cells, take the lower score.
- You cannot earn partial credit. No cell = no points.
- If you’re ever in doubt, ask yourself: “Did I do everything listed in this cell?”
</aside>

### RUBRIC

| **Criteria**                                                   |                                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                          |                                                                                                                                           |                                                                                                                              |                                                                                                                   |                                                                                                |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| **1. CrewAI Agent System Design (5 max)**                      | **5 points:**- Crew of **4+ well-defined agents** (TrendHunter, Writer, Editor, Summarizer)- Each agent has specific roles, tools, and memory configuration- Seamless orchestration using `Crew.run()`- Intermediate outputs passed logically and coherently- Full logging of reasoning, actions, and outputs | **4 points:**- Crew with minimal workflow issues- All 4 agents present; 1 may have unclear role or weak memory/tool config- Mostly logical communication- Logging present in most stages | **3 points:**- System works with only 3 agents- Minor issues in intermediate data passing- Partial or inconsistent logging                | **2 points:**- Only 2 agents clearly functional- Minimal orchestration, static steps- Disjointed outputs or unclear logs     | **1 point:**- Only 1 agent operational- No coordination or meaningful workflow- Limited or no logs                | **0 points:**- No CrewAI setup- No agents or orchestration                                     |
| **2. Prompt Engineering & Workflow Logic (5 max)**             | **5 points:**- Tailored prompts specific to each agent's role- Platform-specific tone/style (e.g., professional for LinkedIn)- Clear, interdependent prompts ensuring flow- Dynamic topic/user input integration                                                                                              | **4 points:**- Mostly structured prompts- Basic platform context- Workflow coherent with manual or API topic input                                                                       | **3 points:**- Basic prompts, somewhat generic- Partial workflow, some disjointed steps- Minimal context-aware prompts                    | **2 points:**- Weak prompt logic, copy-paste feel- Workflow unclear or broken at points- Little context tailoring            | **1 point:**- Bare prompts, no structured prompts- No clear workflow- No contextual or dynamic inputs             | **0 points:**- No prompts, no clear workflow- Agents operate independently or without guidance |
| **3. Output Quality & JSON Format (5 max)**                    | **5 points:**- Outputs well-structured JSON like `{"title":..., "content":..., "hashtags":...}`- Blog content is insightful, trend-relevant, and high quality- Consistent tone matching target platform- Engaging, readable, and polished                                                                     | **4 points:**- JSON valid with all fields- High-quality blog, slight genericity- tone/style mostly appropriate                                                                           | **3 points:**- JSON mostly valid but minor errors- Content complete but lacks engagement or relevance- Slight format/style issues         | **2 points:**- JSON incomplete or incorrect- Blog content weak, off-topic, or generic- Tone not aligned with target audience | **1 point:**- Invalid JSON or poorly formatted- Unstructured or overly generic content- Lacks platform tone/style | **0 points:**- No blog output- Invalid or blank responses- Content not usable                  |
| **4. Topic Input & Trends API (5 max)**                        | **5 points:**- Dynamic integration of real-world trend APIs (Google Trends, Twitter, Reddit)- Supports manual and auto-generated topics- Final blog reflects input relevance                                                                                                                                  | **4 points:**- Integrated at least one real trend API- Manual topic input supported- Relevant blog output                                                                                | **3 points:**- Static/hardcoded topics- Basic relevance- No real-time API, but fallback present                                           | **2 points:**- Topic selection is unclear or hardcoded- Minimal reflection of input in output                                | **1 point:**- Only hardcoded topics, no dynamic trend input- User influence limited                               | **0 points:**- No topic input or relevance logic                                               |
| **5. Agent Logging, Reasoning & Transparency (5 max)**         | **5 points:**- Each agent logs detailed reasoning processes- Outputs are traceable and transparent- Final logs provide complete decision trail- Facilitates debugging and review                                                                                                                              | **4 points:**- Logs most agents- Reasoning mostly clear- Useful for debugging- Some missing details                                                                                      | **3 points:**- Basic logs, missing key decision points- Partial traceability- Some outputs hard to follow                                 | **2 points:**- Vague or partial logs- Limited visibility into agent processes- Difficult to troubleshoot                     | **1 point:**- Minimal logs or generic logs- No detailed reasoning- Hard to debug                                  | **0 points:**- No agent logs- No transparency or traceability                                  |
| **6. Docker Implementation, Deployment & Integration (4 max)** | **4 points:**- Robust `Dockerfile` builds and runs without errors- Docker Compose or equivalent setup for local/cloud deployment- Clear README instructions for Docker workflows- Backend deployed in Docker, frontend integrated and functioning                                                             | **3 points:**- Docker mostly works with minor issues- Basic deployment instructions- Backend deployed, but minor frontend integration issues                                             | **2 points:**- Docker build/run errors present- Incomplete or unclear instructions- Backend runs locally but not deployed or fully tested | **1 point:**- Docker setup incomplete or untested- No successful container deployment or integration                         | **0 points:**- No Docker setup- No containerization or deployment process                                         | **N/A**                                                                                        |
| **7. Deployment & Live Accessibility (3 max)**                 | **3 points:**- Backend accessible via public URL- All API endpoints respond successfully- No server errors; model loads correctly                                                                                                                                                                             | **2 points:**- URL accessible, most endpoints working- Minor errors or missing docs                                                                                                      | **1 point:**- Deployment with significant issues- Many endpoints fail or responses error- Model or server not fully operational           | **0 points:**- Backend not accessible- No public URL or completely non-functional                                            | **N/A**                                                                                                           | **N/A**                                                                                        |
| **8. Git, GitHub, Collaboration (3 max)**                      | **3 points:**- Meaningful, descriptive commit messages- Use of 3+ branches (main + feature branches)- 4+ pull requests merged- Comprehensive README with setup, API docs, deployment guidance                                                                                                                 | **2 points:**- 3-4 commits with decent messages- 2+ branches- 2 pull requests merged- README covers most core elements                                                                   | **1 point:**- 1-2 commits- Only main branch- No pull requests- Basic or missing documentation                                             | **0 points:**- No version control or collaboration evidence- No meaningful documentation                                     | **N/A**                                                                                                           | **N/A**                                                                                        |
| **9. Bonus (+2)**                                              | **2 points:**- Advanced features (e.g., custom agent orchestration, complex RAG pipelines)- Optimizations for performance, reliability, or usability                                                                                                                                                          | **1 point:**- Some minor enhancements, documentation improvements                                                                                                                        | **0 points:**- No bonus features implemented                                                                                              |                                                                                                                              |                                                                                                                   |                                                                                                |

✅**Scoring Summary**

- **Maximum points: 37**
- **Pass mark for AI Integration phase (80%):** 29.6/37

### 🚩 Common Mistakes to Avoid

- **Shallow CrewAI usage:** Defining agents but not leveraging structured collaboration via `Crew.run()`, memory scopes, or agent-to-agent communication.
- **No platform tone adaptation:** Creating content that doesn’t align with platform norms (e.g., too casual for LinkedIn, too dry for X/Twitter).
- **Disconnected agent outputs:** Agents operate in silos, resulting in broken logic between topic selection, writing, and editing stages.
- **Missing reasoning/logs:** Not capturing or exposing agent logs, making debugging and traceability difficult.
- **Invalid or incomplete JSON:** Output doesn't follow the required format (`title`, `content`, `hashtags`) or fields are missing/broken.
- **No topic input flexibility:** Hardcoding the topic or not supporting user-defined themes or API-driven trend inputs.
- **Weak or broken collaboration flow:** Agents overwrite or ignore previous outputs instead of enhancing them.
- **No final polish or summarization:** Omitting the SummarizerAgent leads to raw, unrefined content.
- **Deployment issues:** Not deploying a working `/api/generate-blog` endpoint or leaving it inaccessible from a frontend.
- **No error handling:** Skipping checks for invalid topic inputs, model failures, or API issues.
- **Insecure API usage:** Exposing OpenAI/Gemini keys in code, logs, or version control, or missing CORS configuration.
- **No throttling or abuse protection:** Allowing unlimited requests to generation endpoint with no delay or protection.
- **Unreadable logs or silent failures:** Not printing/logging each agent's decisions or suppressing useful error messages.
- **No collaboration or Git hygiene:** Submitting with few or no commits, no branches, and no README instructions.
- **Lack of modularity:** Writing monolithic scripts instead of separating agents, prompts, and API logic into clean modules.
- **Ignoring test coverage:** Not simulating multiple blog generations or testing edge cases like malformed input or empty API response.
- **No documentation:** Failing to describe how the system works, how to run it, or how to extend it with new agents.
- **Unclear tone or engagement:** Generated blog content is bland, irrelevant, or not optimized for real-world readers.
- **No ethical moderation:** Not filtering potentially harmful or inappropriate content from trending topics or user inputs.
- **Poor prompt engineering:** Using vague, one-size-fits-all prompts without tailoring them to agent roles (e.g., no tone/style input for EditorAgent).

### ✅ Self-Check Before You Submit

- [ ] **All 4 agents** (`TrendHunter`, `Writer`, `Editor`, `Summarizer`) are clearly defined with roles, goals, tools, and memory
- [ ] **CrewAI workflow** is properly orchestrated using `Crew.run()` and agents build upon each other’s outputs
- [ ] **Prompt templates** are customized per agent, reflecting platform-specific tone (e.g., LinkedIn vs X)
- [ ] **Topic input** works dynamically via user input or APIs (e.g., Google Trends, Reddit)
- [ ] **The final blog post** is returned in valid JSON format with `title`, `content`, and `hashtags`
- [ ] **Agent reasoning logs** are printed and traceable for each step in the workflow
- [ ] **Blog content** is trend-aligned, engaging, and suitable for real readers on selected platforms
- [ ] **FastAPI backend** is fully functional and exposes `/api/generate-blog` endpoint
- [ ] **API endpoint** accepts user topic input, validates requests, and handles errors gracefully
- [ ] **Output quality** includes platform-appropriate tone, structure, and length
- [ ] **Security measures** are in place: API keys stored in `.env`, no exposed credentials in code or logs
- [ ] **CORS configuration** allows frontend to access the backend without issues
- [ ] **Docker containerization** builds and runs the backend with correct environment configuration
- [ ] **Cloud deployment** is successful and backend is accessible via public URL
- [ ] **Frontend integration** (optional) is tested and communicates with the backend correctly
- [ ] **GitHub repository** includes meaningful commits, branches, PRs, and complete README with API usage and deployment steps
- [ ] **Performance** is acceptable: agent flow executes quickly and efficiently
- [ ] **Throttling or rate limiting** is implemented to prevent abuse on generation endpoint
- [ ] **System handles edge cases** like empty topic, invalid input, or external API failures
- [ ] **Ethical safeguards** are considered: trending topics are filtered and content is moderated for safety
