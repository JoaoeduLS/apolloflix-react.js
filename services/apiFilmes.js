import axios from "axios";

const apiFilmes = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGFiODU1NzA5YjMzMDI0NDQ4ZDAwZGM4MTkwNjNjNCIsInN1YiI6IjY0MzVkZWNjNjUxZmNmMDBmMjZkOGJkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4ih8_mYlITUoLw8K3dZHntQzu2d8ug1TXjAzYaOMWGs",
  },
});

export default apiFilmes;
