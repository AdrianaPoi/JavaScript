import axios from "axios";

const baseUrl = "http://localhost:3000/";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  employeeAction(url = baseUrl + "api/") {
    return {
      fetchAll: () => axios.get(url + "all"),
      create: (newRecord) => axios.post(url + "new", newRecord),
      update: (updatedRecord) => axios.put(url + "edit", updatedRecord),
      delete: (id) => axios.delete(url + "delete/" + id),
    };
  },
};
