const API_BASE_URL = 'https://acmutdprojects.slack.com/archives/D07NE929JER/p1730256087101239';
import axios from 'axios';

// Create a new day
async function createDay(date) {
  try {
    const response = await axios.get(`${API_BASE_URL}/${date}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching item:", error);
  }
}

// // Create a new item
// async function createItem(item) {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/items`, item, {
//       headers: { 'Content-Type': 'application/json' },
//     });
//     console.log("Item created:", response.data);
//     return response.data;
//   } catch (error) {
//     console.error("Error creating item:", error);
//   }
// }

// // Delete an item by ID
// async function deleteItem(id) {
//   try {
//     const response = await axios.delete(`${API_BASE_URL}/items/${id}`);
//     console.log("Item deleted:", response.data);
//     return response.data;
//   } catch (error) {
//     console.error("Error deleting item:", error);
//   }
// }
