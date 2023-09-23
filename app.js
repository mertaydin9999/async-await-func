import axios from "axios";

const getData = async (number) => {
  let userId = "";
  try {
    if (typeof number === "number") {
      userId = number;
      const [userResponse, postResponse] = await Promise.all([
        axios(`https://jsonplaceholder.typicode.com/users/${userId}`),
        axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`),
      ]);

      const userData = userResponse.data;
      const postData = postResponse.data;
      console.log("User Data:", userData);
      console.log("Post Data:", postData);
    } else {
      throw new Error("number bir sayi degillll");
    }
  } catch (error) {
    console.log(error.message);
  }
};

export default getData;
