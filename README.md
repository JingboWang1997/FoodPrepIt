# foodPrepIt
---
## Backend
### Set Up
- pip install -r requirements.txt
- python manage.py migrate
### Run
- `cd backend`
- Run `python manage.py runserver`
- Go to the link in the termial

### Modules
- foodPrepIt (settings & urls)
- dto (data transfer objects)
  - standardize object representations
- serializers
  - standardize json formats
- database (functions to retrieve)
- service (all business logic: filters, cache)
- views (packaging return data for REST endpoints)

##### Dependencies
> DATABASE <--- SERVICE <--- VIEW <--- URL 

> DTO <--- SERVICE

> SERIALIZER <--- VIEW

---
---
## Frontend
### Set Up
- Install [node and npm](https://nodejs.org/en/download/)
- Run `npm install` to install node_modules

### Run
- `cd frontend`
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

