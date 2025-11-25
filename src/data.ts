import dayjs from "dayjs";

// Frontend icons
import Html from "./assets/frontend/html.svg"
import Css from "./assets/frontend/css.svg"
import Js from "./assets/frontend/js.svg"
import React from "./assets/frontend/react.svg"
import ReactRouter from "./assets/frontend/react-router.svg"
import Tailwind from "./assets/frontend/tailwind.svg"
import Sass from "./assets/frontend/sass.svg"
import Less from "./assets/frontend/less.svg"
import StyledComponents from "./assets/frontend/styled-components.svg"

// Backend icons
import Graphql from "./assets/backend/graphql.svg"
import Php from "./assets/backend/php.svg"
import Postgresql from "./assets/backend/postgresql.svg"
import Ruby from "./assets/backend/ruby.svg"
import Rails from "./assets/backend/rails.svg"

export default {
  experience: (new Array(4)).fill("").map((_, i) => ({
    title: "Company " + i,
    fromDate: dayjs().add(i, "days"),
    toDate: dayjs().add(i, "days"),
    description: "Nice job :happy: " + i
  })),
  projects: (new Array(4)).fill("").map((_, i) =>( {
    name: "Project " + i,
    description: "Short description of the project " + i,
    technologies: (new Array(i)).fill("").map((_, j) => "Tech " + j)
  })),
  skills: [
    {
      title: "Frontend",
      skillList: [
        {
          name: "HTML",
          Icon: Html
        },
        {
          name: "CSS",
          Icon: Css
        },
        {
          name: "JavaScript",
          Icon: Js
        },
        {
          name: "React",
          Icon: React
        },
        {
          name: "React Router",
          Icon: ReactRouter
        },
        {
          name: "Tailwind CSS",
          Icon: Tailwind
        },
        {
          name: "Sass",
          Icon: Sass
        },
        {
          name: "Less",
          Icon: Less
        },
        {
          name: "Styled Components",
          Icon: StyledComponents
        }
      ]
    },
    {
      title: "Backend",
      skillList: [
        {
          name: "GraphQL",
          Icon: Graphql
        },
        {
          name: "PHP",
          Icon: Php
        },
        {
          name: "PostgreSQL",
          Icon: Postgresql
        },
        {
          name: "Ruby",
          Icon: Ruby
        },
        {
          name: "Rails",
          Icon: Rails
        }
      ]
    },
    {
      title: "Others",
      skillList: [

      ]
    }
  ]
}