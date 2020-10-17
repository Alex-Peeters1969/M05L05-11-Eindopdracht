const newLocal = `https://wincacademydatabase.firebaseio.com/alex/tasks`;
const apiUrl = newLocal;

const getData = async () => {
  try {
    const result = await fetch(`${apiUrl}.json`, { method: "GET" });
    const data = await result.json();
    const tasks = Object.keys(data).map((key) => ({ id: key, description: data[key].description,
      done: data[key].done,
    }));

    console.log("ID added", tasks);
    return tasks;
  } catch (error) {
    console.log(error);
  }
};

const postData = async (data) => {
  try {
    fetch(`${apiUrl}.json`, {method: "POST", headers:{"Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

      console.log("dit is data", data);
    } catch (error) {
      console.log(error);
    }
  };

function deleteData(data) {
  try {
    console.log("Dit is data in api", data);

    fetch(`${apiUrl}/${data}.json`, { method:"DELETE", headers:{ "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    console.log("dit is deleted data", data);
  } catch (error) {
    console.log(error);
  }
}