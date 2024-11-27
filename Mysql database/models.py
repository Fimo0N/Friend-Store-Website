from sqlalchemy import Column, Integer, String, Text, DateTime, Enum, ForeignKey, Date
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()

class Friend(Base):
    __tablename__ = 'Friend'

    id = Column(Integer, primary_key=True)
    name = Column(String(255), nullable=False)
    role = Column(String(255))
    description = Column(Text)
    gender = Column(String(50))
    img_url = Column(String(2083))
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class User(Base):
    __tablename__ = 'User'

    user_id = Column(Integer, primary_key=True)
    username = Column(String(255), unique=True, nullable=False)
    password = Column(String(255), nullable=False)
    email = Column(String(255), unique=True, nullable=False)

class Friendship(Base):
    __tablename__ = 'Friendship'

    friendship_id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('User.user_id'), nullable=False)
    friend_id = Column(Integer, ForeignKey('Friend.id'), nullable=False)
    friendship_date = Column(Date, nullable=False)
    status = Column(Enum('pending', 'accepted', 'rejected'), default='pending')
