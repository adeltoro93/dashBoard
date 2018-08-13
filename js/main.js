var user = {
  name: "Alex DelToro",
  image: "img/alex.jpg",
  progress: 0.55
}

var courseArr = [{
  title: "Calculus 1",
  subject: "Mathematics"
}, {
  title: "Cognitive psychology",
  subject: "Psychology"
}, {
  title: "Biological Anthropology",
  subject: "Anthropology"
}];

var activityArr = [{
  title: "Module 3.4",
  subject: "Psych 3b"
}, {
  title:"New forum ",
  subject: "Math2a"
}, {
  title:"Test available ",
  subject: "Anthro12"
}];

var accountArr = [{
  title: "Enrolled since: ",
  subject: "Active fall 2017"
}, {
  title: "Enrolled staus: ",
  subject: "Active student"
}, {
  title: "Major: ",
  subject: "Undergrad Psychology"
}];

function setUser(user, image, name, id) {
      image.src = user.image;
      image.alt = user.name;
      name.innerText = user.name;
      id.innerText = "User #:" + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) +Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);
  }
  setUser(user, document.getElementById("userImg"), document.getElementById("username"), document.getElementById("userId"));

  function formatTime(time) {
        if(time < 10) {
          return "0" + time;
        } else {
          return time;
        }
  }

  function getTime() {
      var now = new Date();
      var hours = formatTime(now.getHours());
      var minutes = formatTime(now.getMinutes());
      var seconds = formatTime(now.getSeconds());
      var month = formatTime(now.getMonth());
      var date = formatTime(now.getDate());
      var year = now.getFullYear()- 2000;
      return month + "/" + date + "/" + year + "    |    " + hours + ":" + minutes + ":" + seconds
  }

  function setTime(el)  {
    el.style.whiteSpace = "pre"
    el.innerText = getTime();
    var elem = el;
    setTimeout(function() {
      return setTime(elem);
    }, 1000)
  }
  setTime(document.getElementById("time"));

function setActive(arr, title, list, str) {
    title.innerText = str
    list.innerHTML = "";
      for(var i = 0; arr.length; i++){
        list.innerHTML += "<li><h4>" + arr[i].title + "</h4><p>" + arr[i].subject + "</p></li>"
      }
    }

  setActive(courseArr, document.getElementById("active-title"), document.getElementById("active-list"), "My Course: ")

  function setProgress(user, bar, percent) {
    bar.style.width = user.progress * 100 + "%";
    percent.innerText = user.progress * 100 + "%";
  }
  setProgress(user, document.getElementById("progress-inner"), document.getElementById("progress-percent"))
  // the Impure function
  function showCourses() {
	setActive(courseArr, document.getElementById("active-title"), document.getElementById("active-list"), "My Courses: ")
}
function showActivity() {
	setActive(activityArr, document.getElementById("active-title"), document.getElementById("active-list"), "My Recent Activity: ")
}
function showAccount() {
	setActive(accountArr, document.getElementById("active-title"), document.getElementById("active-list"), "My Account: ")
}
