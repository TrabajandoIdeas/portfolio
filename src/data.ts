import dayjs from "dayjs";


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
  }))
}