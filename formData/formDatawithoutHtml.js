const formData = new FormData();
formData.append('name', 'Shubham Singh Kshatriya');
formData.append('age', 21);

console.log("Form Data");
for (let obj of formData) {
  console.log(obj);
}