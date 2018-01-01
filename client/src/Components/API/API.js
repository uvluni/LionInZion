export default class API {

  async getItems() {
    try {
      let response = await fetch('http://localhost:9000/api/items');
      let items = await response.json();
      return items;
    } catch (error) {
      console.log(error);
    }
  }
}
