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
  experience:  [{
    title: "Freelancer - Fullstack Developer",
    fromDate: dayjs("Nov 2016"),
    toDate: dayjs("Aug 2019"),
    description: "Build statics sites, Wordpress sites and multiple apps to improve bussiness process productivity given digital solutions. Also done some work as IT",
    longDescription: "In this time I worked mostly with Autodetail, a small bussiness"
  },{
    title: "Sinaptia - Frontend Developer",
    fromDate: dayjs("Sep 2019"),
    toDate: dayjs("Aug 2025"),
    description: "Sinaptia works primary with Ruby on Rails. I joined as the main frontend specialist, implemented and\
      maintaining responsive, accessible, and performant UIs using modern JavaScript frameworks (like\
      React). Led migrations of legacy interfaces, built scalable frontend architectures, and collaborated\
      closely with backend developers to integrate APIs and optimize data flow. Also contributed to backend\
      tasks in Ruby on Rails when needed."
  }],
  projects: [],
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
    // {
    //   title: "Others",
    //   skillList: [
    //     {}
    //   ]
    // }
  ]
}