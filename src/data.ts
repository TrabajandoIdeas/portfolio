import dayjs from "dayjs";

export default {
  experience: (new Array(4)).fill("").map((_, i) => ({
    title: "Company " + i,
    fromDate: dayjs().add(i, "days"),
    toDate: dayjs().add(i, "days"),
    description: "Nice job :happy: " + i
  }))
}