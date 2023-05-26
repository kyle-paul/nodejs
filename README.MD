# Build a website with nodejs and expressjs

## Code Structure
    .
    ├── nodemon.json
    ├── package-lock.json
    ├── package.json
    └── src
        ├── app
        │   ├── controllers
        │   │   ├── BookController.js
        │   │   ├── MLController.js
        │   │   └── SiteController.js
        │   └── models
        │       └── model.js
        ├── config
        │   └── db
        │       └── index.js
        ├── index.js
        ├── public
        │   ├── css
        │   │   └── app.css
        │   └── imgs
        │       ├── codeforces.jpg
        │       ├── diagram.jpg
        │       ├── google.jpg
        │       ├── kaggle.jpg
        │       ├── microsoft.jpg
        │       └── mvc.png
        ├── rescources
        │   ├── scss
        │   │   ├── _variables.scss
        │   │   └── app.scss
        │   └── views
        │       ├── books.hbs
        │       ├── home.hbs
        │       ├── layouts
        │       │   └── main.hbs
        │       ├── microsoft_cert.hbs
        │       ├── mlcontent
        │       │   └── show.hbs
        │       ├── partials
        │       │   ├── footer.hbs
        │       │   └── header.hbs
        │       └── search.hbs
        ├── routes
        │   ├── books.route.js
        │   ├── index.js
        │   ├── ml.route.js
        │   └── site.route.js
        └── util
            └── mongoose.js
