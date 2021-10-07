import axios from "axios";

const baseUrl = "http://localhost:3000/";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  employeeAction(url = baseUrl + "api/") {
    return {
      fetchAll: () => axios.get(url + "all"),
      //fetchById: id => axios.get(url + id),
      create: (newRecord) => axios.post(url, newRecord),
      update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
      delete: (id) => axios.delete(url + id),
    };
  },
};
