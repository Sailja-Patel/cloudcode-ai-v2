from fastapi import FastAPI

app = FastAPI(title="CloudCode AI API")


@app.get("/")
def root():
    return {
        "message": "CloudCode AI API is running"
    }