# Requirements:
- python 3.6.3, node 8.9.1
- install python dependencies using the requirements file.
- `@angular/cli` `npm` package is also required. It has to be installed globally.

# Desc:
- api is the django app.
- ui is the angular app.

# Steps to run

1. Generates a `fake_cases.json` file: `python fake_data.py`.
2. Change directory to `api` folder.
3. Migrate: `python manage.py migrate`.
4. Import above json into django: `python manage.py loaddata fake_cases.json`.
5. Start the api server: `python manage.py runserver`.
6. After installing the dependencies of the angular app, run the app using `ng serve`.

# Current state:

## api
- there is a single endpoint for cases and only get requests works. [`/cases`, `/cases/<id>`]
- `mentioned_in` is right now a separate field. It needs to be generated using values from `mentiones`.

## ui
- displays a graph for cases, the hover function works.
- need to add year/month axis.
- position on year axis is calculated by taking the last two digits of the year. Need to modify this to reflect it's actual position.
- need to normalize year and month axis with the available window/canvas height.

PS: working on the improvements tonight.
