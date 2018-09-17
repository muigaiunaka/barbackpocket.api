# Cocktail API
A soon to be hosted GraphQL API for Cocktail data

## Table of Contents

* [Tech Used](#tech-used)
* [Directory Structure](#directory-structure)
* [Contributing](#contributing)

### Tech Used
* GraphQL, Apollo Server, Express, Node, Yarn, Mongoose, MongoDB
     
### Directory Structure

```coffee
├── graphqlserver
│   ├── controllers   -> mongodb controllers
│   ├── docs          -> documenting the api
│   ├── graphql       -> query language schemas resolvers
│       ├── resolvers -> resolve data for the graphql fields in the schemas
│       ├── schemas   -> the type defintions for the graphql data
│   ├── models        -> mongodb models schemas
│   ├── utils
│   ├── package.json
│   ├── server.js     -> running the app server
│   ├── yarn.lock       
```

### Contributing
To contribute, submit an issue