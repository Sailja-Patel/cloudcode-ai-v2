from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uuid

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class JobRequest(BaseModel):
    repository_url: str
    branch: str = "main"


@app.get("/")
def root():
    return {"message": "CloudCode AI API is running"}


@app.post("/jobs")
def create_job(job: JobRequest):
    job_id = str(uuid.uuid4())

    return {
        "job_id": job_id,
        "status": "queued"
    }