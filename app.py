from flask import Flask, render_template, request, jsonify
from models import db
from models.task import Task

app = Flask(__name__)

# ===========================
# Database Configuration
# ===========================
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)

with app.app_context():
    db.create_all()

# ===========================
# Home Page
# ===========================
@app.route("/")
def home():
    return render_template("index.html")


# ===========================
# Get All Tasks
# ===========================
@app.route("/api/tasks", methods=["GET"])
def get_tasks():

    tasks = Task.query.all()

    data = []

    for task in tasks:
        data.append({
            "id": task.id,
            "title": task.title,
            "priority": task.priority,
            "due_date": task.due_date,
            "completed": task.completed
        })

    return jsonify(data)


# ===========================
# Add Task
# ===========================
@app.route("/api/tasks", methods=["POST"])
def add_task():

    data = request.get_json()

    task = Task(
        title=data["title"],
        priority=data["priority"],
        due_date=data["due_date"],
        completed=False
    )

    db.session.add(task)
    db.session.commit()

    return jsonify({
        "message": "Task Added Successfully"
    })


# ===========================
# Update Task
# ===========================
@app.route("/api/tasks/<int:id>", methods=["PUT"])
def update_task(id):

    task = Task.query.get_or_404(id)

    data = request.get_json()

    task.title = data["title"]
    task.priority = data["priority"]
    task.due_date = data["due_date"]
    task.completed = data["completed"]

    db.session.commit()

    return jsonify({
        "message": "Task Updated Successfully"
    })


# ===========================
# Delete Task
# ===========================
@app.route("/api/tasks/<int:id>", methods=["DELETE"])
def delete_task(id):

    task = Task.query.get_or_404(id)

    db.session.delete(task)

    db.session.commit()

    return jsonify({
        "message": "Task Deleted Successfully"
    })


# ===========================
# Run Server
# ===========================
if __name__ == "__main__":
    app.run(debug=True)