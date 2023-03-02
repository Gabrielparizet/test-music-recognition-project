testForm.onsubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(testForm);
  
    console.log("Form Data");
    for (let obj of formData) {
      console.log(obj);
    }
};


