let hobbies = ["cooking", "football", "cricket", "gym"];
var myHobbie = document.getElementById("hob");

for (let i = 0; i < hobbies.length; i++) {
  let a = document.createElement("div");
  a.innerHTML = hobbies[i];
  myHobbie.appendChild(a);
}

function addHobbie() {
  let newHobbie = document.getElementById("add").value;
  if (newHobbie) {
    hobbies.push(newHobbie);
    updateHobbie();
  }
}

function deleteHobbie() {
  let deleted = document.getElementById("delete").value;
  let j = hobbies.indexOf(deleted);
  if (j !== -1) {
    hobbies.splice(j, 1);
    updateHobbie();
  }
}

function updateHobbie() {
  myHobbie.innerHTML = "";
  for (let i = 0; i < hobbies.length; i++) {
    let a = document.createElement("div");
    a.innerHTML = hobbies[i];
    myHobbie.appendChild(a);
  }
}
