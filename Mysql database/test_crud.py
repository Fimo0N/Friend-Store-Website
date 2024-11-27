from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import Base, User, Friend, Friendship

engine = create_engine('mysql+pymysql://user:password@localhost/friend_store')
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

# Create
new_user = User(username='test_user', password='test_pass', email='test@example.com')
session.add(new_user)
session.commit()

# Read
users = session.query(User).all()
print([user.username for user in users])

# Update
user_to_update = session.query(User).filter_by(username='test_user').first()
user_to_update.email = 'new_test@example.com'
session.commit()

# Delete
user_to_delete = session.query(User).filter_by(username='test_user').first()
session.delete(user_to_delete)
session.commit()
