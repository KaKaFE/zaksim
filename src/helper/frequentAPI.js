// 자주쓰는 작심 리스트를 DB에 GET하는 함수
export const getFrequent = async () => {
  const response = await fetch(
    "https://zaksim-haru-default-rtdb.firebaseio.com/frequent_jaksim.json"
  );

  const data = await response.json();

  const frequentList = [];

  for (const key in data) {
    frequentList.push({
      id: key,
      jaksim: data[key].jaksim,
      feature: data[key].feature,
    });
  } // fetch로 받아온 data를 빈배열에 객체로 만들어서 넣어줘야함

  return frequentList;
};

// 자주쓰는 작심을 DB에 POST하는 함수, 인자로 DB에 넣을 data 객체가 필요함
export const saveFrequent = async (data) => {
  await fetch(
    "https://zaksim-haru-default-rtdb.firebaseio.com/frequent_jaksim.json",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log("Success", data);
    })
    .catch((error) => console.log("Error:", error));
};

// 작심 투데이를 DB에서 DELETE 하는 함수, 인자로 DB에서 삭제할 id(key값)이 필요
export const deleteFrequent = async (id) => {
  await fetch(
    `https://zaksim-haru-default-rtdb.firebaseio.com/frequent_jaksim/${id}.json`,
    {
      method: "DELETE",
    }
  )
    .then(() => {
      console.log("Delete Success");
    })
    .catch((error) => console.log("Error:", error));
};
