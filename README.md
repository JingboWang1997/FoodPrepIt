# foodPrepIt
---
## Backend
### Set Up
- Install [python3](https://www.python.org/downloads/) and django `pip install django`
- Install rest framework: `pip install djangorestframework`
### Run
- `cd backend`
- Run `python manage.py runserver`
- Go to the link in the termial

### REST
| Rest API | Content | Description |
|---|---|---|
| | | |

### Modules
- foodPrepIt (settings & urls)
- dto (data transfer objects)
  - standardize object representations
- serializers
  - standardize json formats
- database (access db)
- service (logic)
- views (REST endpoints)

##### Dependencies
> DATABASE <--- SERVICE <--- VIEW <--- URL 

> DTO <--- SERVICE

> SERIALIZER <--- VIEW

---
---
## Frontend
### Set Up
- Install [node and npm](https://nodejs.org/en/download/)
### Run
- `cd frontend`
- Run `npm install` to install node_modules
- Run `npm start` --> should start a webpage

### Modules
- components
- screens (connection between componenets and app interface)
