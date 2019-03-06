# foodPrepIt
---
## Backend
### Set Up
- Install [python3](https://www.python.org/downloads/) and django `pip install django`
- Install rest framework: `pip install djangorestframework`
- Install API request: `pip install requests`
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
- `npm install --save react react-dom`
- `npm install @material-ui/icons`
### Run
- `cd frontend`
- Run `npm install` to install node_modules
- Run `npm start` --> should start a webpage

### Modules
- components
- views (pack components in a particular way if needed)
- screens (connection between componenets and app interface)

---
---
## Data Sources
#### [Spoonacular API](https://spoonacular.com/food-api)
#### [Yummly API](https://developer.yummly.com/documentation)
#### [Edamam Recipe Search API](https://developer.edamam.com/edamam-docs-recipe-api)
#### [Recipe Puppy API](http://www.recipepuppy.com/about/api/)
#### [ReciPal API](https://www.recipal.com/api-docs#authentication)
#### [BigOven API](http://api2.bigoven.com/swagger/ui/index#/)

