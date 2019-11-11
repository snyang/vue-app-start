# vuw-app-start

## Prepare Development Environment

- Clone the project
- 
- Install node: 12.12.0 +
- 
- Install global packages
```sh
npm install @vue/cli -g
npm install element-theme -g
```

- Project setup
```sh
npm install
```

## Development
### Launch server and client together

- Terminal 1: build and watch client
```sh
cd client
npm run watch
```

- Terminal 2: launch server
```sh
cd server
npm run watch
```
- Launch the application
Launch the application `http://localhost:9000/`

### Launch client only

- [Client] Compiles and hot-reloads for development
```sh
cd client
npm run serve
```

- Launch the application
Launch the application `http://localhost:8080/`

## More commands

### [Server] Start
```sh
cd server
npm run start
```

### [Server] Start and watch
```sh
cd server
npm run watch
```

### [Client] build and watch client
```sh
cd client
npm run watch
```

### [Client] Compiles and hot-reloads for development
```sh
npm run serve
```

### [Client] Compiles and minifies for production
```sh
npm run build
```

### [Client] Run your unit tests
```sh
npm run test:unit
```

### [Client] Lints files
```sh
npm run lint
```

## Conventions

### Coding Guidelines

- [Vue code style](https://cn.vuejs.org/v2/style-guide/)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- tab with 2 spaces width

#### Coding
- folder name: camelCase
- file name: camelCase
- class name: PascalCase
- page name: PascalCasePage.tsx
- folder: views, for pages
- element-ui
  - user Element.name for JSX tag. e.g. <Menu.name />
