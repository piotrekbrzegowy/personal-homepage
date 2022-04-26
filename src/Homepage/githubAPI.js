import axios from "axios";

const githubAPIBaseURL = "https://api.github.com";
const username = "piotrekbrzegowy";

export const getRepositories = async() => {
    try {
        const response = await axios.get(`${githubAPIBaseURL}/users/${username}/repos?sort=created`);
        return response.data;
    } catch(error) {
        console.error(error);
    }
};
