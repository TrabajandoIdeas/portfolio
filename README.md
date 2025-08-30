# Portfolio

This project generates its content from markdown files to multiple (WIP) modes of visualizations

## Getting Started with the Project

#### Prerequisites

- Bun installed

#### Steps

1. Run `bun run setup` to configure the project.
2. Run `bun run build` to generate HTML files from markdown content.
3. Open `build/index.html` in your browser to view the generated site.

#### Available Scripts

- `bun run setup` - Configure environment variables
- `bun run build` - Build the static site from markdown files
- `bun run dev` - Build and watch for changes (development mode)

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
- Bun: I never used it but looks like a good opportunity to try


## Other challenges

- I would like to implement a markdown mapper from scratch
