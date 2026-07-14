# Component Tree
App
├── Header
├── TaskForm
└── Board
    ├── Column - To Do
    │   ├── Card
    │   └── Card
    ├── Column - In Progress
    │   └── Card
    └── Column - Done
        └── Card
```

# State Management

| Component | State | Reason |
|-----------|-------|--------|
| App | tasks | Central source of truth. All components need access to tasks |
| Header | None | Having a static title for the board |
| TaskForm | form inputs | Temporary state while creating a task |
| Board | None | Receives tasks via props and renders columns |
| Column | None | Filters and displays tasks by status |
| Card | None | Displays individual task data |

# Data Flow

          App (tasks state)
          /              \
     Header          TaskForm
                         |
                  Add New Task
                         |
                      Board
         ┌───────────┼───────────┐
         │           │           │
      To Do     In Progress     Done
         │           │           │
       Card        Card         Card

# Task Workflow

+--------+      Move Task      +-------------+      Move Task      +------+
| To Do  | ------------------> | In Progress | ------------------> | Done |
+--------+                     +-------------+                     +------+
