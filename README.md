# Portfolio

This project generates its content from markdown files to multiple (WIP) modes of visualizations

## How to run the project

### Prerequisites

- Node **lts/iron** (20.19.5)

### Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

### Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

### Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

### Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

### Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Modes

The idea is to use the exact same content source to generate different ways to show it. Not only for colors or shapes, but more like a unique way to display that data and navigate through the site.

Each mode should present its own challenge, using the same tools and frameworks, reducing to minimum the independent code that each mode requires. On top of that I like to use simple frameworks/libs, those that don't require an extra level of abstraction like React or Angular, but this is an optional condition

The list are:

- [ ] Default: initial mode, just a simple and standard portfolio
- [ ] Simple: Minimalist, but trying to emulate the feel of paper.
- [ ] Console: This is the first tricky one, make the site work as a console, using commands to navigate through it. The biggest challenge here is to define the convention to name the commands and how to show previous results without using an SPA approach.
- [ ] Rice: Similar to console but it is a linux rice. If you want more context take a look at this [Linux Subreddit](https://www.reddit.com/r/unixporn/) (it isn't porn, it is just a joke).
- [ ] P5 Menu: Based on [Persona 5](https://persona.atlus.com/p5r) menu design (the game not the linked site), this mode shows the content with flashy colors and fast and complex animations.

## Technologies

As mentioned before I want to keep this simple, in terms of how many tools and levels of abstractions this project requires. For now I generate a static site.

With all of that in mind this will be my stack:

- Tailwind
- Angular: first time using it, let's see how it goes.


## Other challenges

- I would like to implement a markdown mapper from scratch
