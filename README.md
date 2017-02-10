# ionic project
"Today to do list" made with ionic, you can add, remove and edit an activity

### Requirements
* nodejs
* npm
* cordova
* Java JDK
* install android studio or download android-tools

### Local run on web browser

```sh
$ ionic serve
```

### Emulate the app with an android device

```sh
$ ionic platform add android
```

```sh
$ ionic emulate android
```

# django-rest and ionic project


### Install in ionic_frontend's directory


### npm
```sh
$ npm install
```

#### Install Angular
```sh
$ npm install angular
```

#### Install angular-resource
```sh
$ npm install angular-resource --save
```

### Run Django
```sh
$ python manager.py makemigrations
```

```sh
$ python manager.py migrate
```

```sh
$ python manager.py runserver
```

#### Run shell and add data into database
```sh
$ python manager.py shell
```

```sh
from actividades.models import Actividades
actividad = Actividad(nombre='foo', descripcion='bar')
actividad.save()
```
