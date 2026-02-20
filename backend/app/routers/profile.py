from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.file import UploadedFile
from app.services.profiler import profile_dataset

router = APIRouter()


@router.get("/profile/{file_id}")
def get_profile(file_id: int, db: Session = Depends(get_db)):
    db_file = db.query(UploadedFile).filter(UploadedFile.id == file_id).first()

    if not db_file:
        raise HTTPException(status_code=404, detail="File not found")

    profile = profile_dataset(db_file.filepath)

    return profile