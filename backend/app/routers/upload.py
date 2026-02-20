import os
from fastapi import APIRouter, UploadFile, File, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.file import UploadedFile
from app.services.profiler import profile_dataset

router = APIRouter()

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)



@router.post("/upload")
async def upload_file(file: UploadFile = File(...), db: Session = Depends(get_db)):
    file_location = os.path.join(UPLOAD_DIR, file.filename)

    with open(file_location, "wb") as f:
        content = await file.read()
        f.write(content)

    db_file = UploadedFile(
        filename=file.filename,
        filepath=file_location,
        filesize=len(content)
    )

    db.add(db_file)
    db.commit()
    db.refresh(db_file)

    profile = profile_dataset(file_location)



    return {
        "id": db_file.id,
        "filename": db_file.filename,
        "size": db_file.filesize,
        "profile": profile
    }
