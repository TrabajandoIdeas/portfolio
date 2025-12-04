import dayjs from "dayjs";

import mainData from "./data";

export default {
  experience:  [{
      title: "Freelancer - Fullstack Developer",
      fromDate: dayjs("Nov 2016"),
      toDate: dayjs("Aug 2019"),
      description: "Construí sitios estáticos, sitios en Wordpress y múltiples aplicaciones para mejorar la productividad de los procesos de negocio mediante soluciones digitales. También hice algunas tareas como IT (tecnologías de la información).",
      longDescription: "In this time I worked mostly with Autodetail, a small bussiness"
    },{
      title: "Sinaptia - Frontend Developer",
      fromDate: dayjs("Sep 2019"),
      toDate: dayjs("Aug 2025"),
      description: "Sinaptia trabaja principalmente con Ruby on Rails. Entré como el especialista principal de frontend e implementé y mantuve interfaces de usuario (UIs) responsive, accesibles y de alto rendimiento usando frameworks de JavaScript modernos (como React). Lideré migraciones de interfaces heredadas, construí arquitecturas de frontend escalables, y colaboré estrechamente con los desarrolladores de backend para integrar APIs y optimizar el flujo de datos. También contribuí en tareas de backend con Ruby on Rails cuando hizo falta."
    }],
  projects: [],
  skills: mainData.skills
}