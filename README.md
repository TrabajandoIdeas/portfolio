# Porfolio

This project generate it's content from markdown files to multiple(WIP) modes of visualisations

## Get start the proyect

#### Prerequisites

- Bun installed

#### Steps

1. Run `bun run setup` to configure the project.

## Modes

The idea is with the exact same content source generate a diferents ways to show it. Not only for colours or shapes, more like a unique way to display that data and navigate throw the site.

Each mode should present their own chanllenge, using the same tools and frameworks, reducing to minimun the independt code that each mode requires. On top of that I like to use simple frameworks/libs, those how don't requires a extra level of abstraction like react or angular, but this is an optional condition 

The list are:

- [ ] Default: initial mode, just a simple and standard portfolio
- [ ] Simple: Minimalist, but trying to emulate the feel of paper.
- [ ] Console: This is the first tricky one, made the site works as a console, using commands to navigate thorw it. The bigest challenge here is define the convention to name the commands and how to show previous results without using an SPA approach.
- [ ] Rice: Similar to console but it is a linux rice. If you want more context take a look at this [Linux Subreddit](https://www.reddit.com/r/unixporn/) (it isn't porn, it is just a joke).
- [ ] P5 Menu: Based on [Persona 5](https://persona.atlus.com/p5r) menu design (the game not the linked site), this mode shows the content with flashy colors and fast and complex animations.

## Thechnologies

As mentioned before I want to keep this simple, in terms of how much tools and levels of abstractions this project requieres. For now I generate a static site.

With all of that in mind this will be my stack:

- Tailwind
- Bun: I never use if but looks like a good oportunity to try

## Other challenges

- I like to implement a markdown mapper from scratch
