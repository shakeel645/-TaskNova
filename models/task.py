from . import db

class Task(db.Model):

    id = db.Column(db.Integer, primary_key=True)

    title = db.Column(db.String(200), nullable=False)

    priority = db.Column(db.String(20), nullable=False)

    due_date = db.Column(db.String(50))

    completed = db.Column(db.Boolean, default=False)

    def __repr__(self):
        return f"<Task {self.title}>"