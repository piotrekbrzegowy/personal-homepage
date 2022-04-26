import axios from "axios";

export const getRepositories = async(path) => {
        const response = await axios.get(path);
        return response.data;
};
