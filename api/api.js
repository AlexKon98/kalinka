class Api {
  static API_BASE_URL = 'https://kalinka.phuket.forsale';

  static async SSRrequest(url) {
    const req = this.API_BASE_URL + url;

    try {
      const data = await useFetch(req);
      return data;
    } catch (e) {
      throw e;
    }
  }

  static async dataTwice(url) {
    const req = this.API_BASE_URL + url;

    try {
      const data = await $fetch(req, {
        headers: getResponseHeader(['X - Total - Count'])
      });
      return data;
    } catch (e) {
      throw e;
    }
  }
};

export default Api;
