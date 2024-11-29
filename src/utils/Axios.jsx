import axios from "axios";


const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",

     headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTgxZDVhY2IzODkzMGM2MjkwYjJkZmM4OTA3NGUwYSIsIm5iZiI6MTczMjg5NDgyMi4zMTg2MDM4LCJzdWIiOiI2NzQ5NmM2YmU4MzU5NmQzNTMwMzFhZTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.IjDGf1uEoIcnc4H7GT96SrptP_b5wR14IOgUNmqAw8k'
      }
})
export default instance;