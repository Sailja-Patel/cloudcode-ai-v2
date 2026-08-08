# CloudCode AI — Learning Notes

## Day 1

### Git

Git is a version control system that tracks changes in a project.

Important commands:

- `git init` — initialize a repository
- `git add` — stage changes
- `git commit` — create a snapshot
- `git push` — upload commits to a remote repository
- `git status` — see the current repository state
- `git remote` — manage remote repositories

### Frontend

CloudCode AI uses React with TypeScript.

The basic flow is:

Browser
→ index.html
→ main.tsx
→ App.tsx
→ UI

### Backend

CloudCode AI uses FastAPI with Python.

The backend exposes HTTP APIs that the React frontend will consume.

### Architecture

Frontend and backend are separate applications.

Frontend:
- User interface
- User interaction
- API requests

Backend:
- Business logic
- API endpoints
- Database
- Cloud services
- Code analysis

### Day 1 Result

Created the initial CloudCode AI project structure with:

- React frontend
- FastAPI backend
- Git repository
- GitHub remote repository