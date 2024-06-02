class Api {
  static API_BASE_URL = 'https://kalinka.phuket.forsale';

  static async dataTwice(url) {
    const req = API_BASE_URL + url;

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
