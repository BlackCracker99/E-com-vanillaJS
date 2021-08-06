    vanillaJS Amazona

1).Create Folder Structure
    1.create root folder as jsamazona
    2.add frontend and backend folder
    3.create src folder in frontend
    4.create index.html with heading jsamazona in src
    5.run npm init in frontend folder
    6.npm install live-server
    7.add start command as live-server src --verbose
    8.run npm start
    9.check result

2).Design Website
    1.create style.css
    2.link style.css to index.html
    3.create div.grid-container
    4.create header, main and footer
    5.style html, body
    6.style grid-container, header, main and footer

6).Create Node.JS Server
    1.run npm init in root jsamazona folder
    2.npm install express
    3.create server.js
    4.add start command as node backend/server.js
    5.require express
    6.move data.js from frontend to backend
    7.create route for /api/products
    8.return products in data.js
    9.run npm start

7).Load Products From Backend
    1.edit HomeScreen.js
    2.make render async
    3.fetch products from '/api/products' in render()
    4.make router() async and call await HomeScreen.render()
    5.use cors on backend
    6.check the result