import shocase from './images/shocase.PNG'
import gamehub from './images/gamehub.PNG'
import uspostalprinting from './images/us-postal-printing.PNG'

const projects = [
    {
        id: 1,
        title: 'ShoCase',
        description: 'ShoCase™ is a full stack web application that serves as a social media platform for sharing anime reccomendations through a playlist format. The user is able to make playlists of 4 animes, comment on other users playlists, and save playlists within their liked page. The project utilizes an Express backend, RESTFUL api, mySQL database, and a third party API.',
        imagePath: shocase,
        imageAlt: 'Image of Shocase Application',
        link: 'https://shocase.herokuapp.com/',
        github: 'https://github.com/Bfunk54/ShoCase',
        technologies: 'MVC, Express.js, MySQL + Sequelize, Handlebars.js, Materialize.css'
    },
    {
        id: 2,
        title: 'Gamehub',
        description: 'We connected 3 APIs via JavaScript to power our Game Hub application. The Game Hub allows a user to search for games by title and they will be presented with data regarding their search as well as a link to shop for similar products on Amazon. The user can then watch a popular video from YouTube related to that game search. The user can also search by console and will be presented with the latest information regarding their search.',
        imagePath: gamehub,
        imageAlt: 'Image of Gamehub Application',
        link: 'https://sbullocks.github.io/Game-Hub/',
        github: 'https://github.com/sbullocks/Game-Hub',
        technologies: 'HTML, CSS, JavaScript, JQuery, Fetch/Third-party APIs'
    },
    {
        id: 3,
        title: 'US-Postal-Printing',
        description: 'This is a full-stack application built for "Us-Postal-Printing" in West Palm Beach Florida. It was our final project as part of our bootcamp and we were able to implement full CRUD using the MERN stack to build this application in only 1 week! My primary focus in the development of this application was the user dashboard and programming it to implement crud with graphQL, Apollo Client/Server, as well as working with the back end typedefs and resolvers. I learned so much throughout building this application and my team worked great together!',
        imagePath: uspostalprinting,
        imageAlt: 'Image of US-Postal-Printing Application',
        link: 'https://us-postal-printing.herokuapp.com/',
        github: 'https://github.com/Mateo-Wallace/US-Postal-Printing',
        technologies: 'HTML, CSS, JavaScript, Express.js, React.js, Material.ui, GraphQL, MongoDB + Mongoose'
    },
]

export default projects;