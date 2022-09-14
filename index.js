//获取搜索按钮
const btn = document.querySelector(".sou2");
//获取下拉框，方便后期判断用户选择的搜索平台
const point = document.querySelector("select");
//获取input框
const texts = document.querySelector("#text");

//将所有平台的搜索关键字端，存入数组
const arr = [
  "wd",
  "q",
  "s?ie=utf-8&fr=none&src=home_placeholder&ssid=&q",
  "web?query",
  "s?q",
  "keyword",
];

//搜索按钮被点击以后要做的事情
btn.onclick = function () {
  //获取下拉框用户选中的内容
  const p = point.value;
  //获取输入框中，用户输入放入内容
  const text = texts.value;
  //声明一个空字符串
  let wow = "";

  if (p.includes("bing")) {
    wow = "?" + arr[1] + "=" + text;
  }
  if (p.includes("baidu")) {
    wow = "?" + arr[0] + "=" + text;
  }
  if (p.includes("so.com")) {
    wow = arr[2] + "=" + text;
  }
  if (p.includes("sogou")) {
    wow = arr[3] + "=" + text;
  }
  if (p.includes("quark")) {
    wow = arr[4] + "=" + text;
  }
  if (p.includes("github")) {
    wow = "?" + arr[1] + "=" + text;
  }
  if (p.includes("bilibili")) {
    wow = "?" + arr[5] + "=" + text;
  }

  if (p.includes("haiantv")) {
    wow = "/" + text + "/";
    alert("该搜索比较缓慢，请您耐心等待");
  }
  console.log(p + wow);

  window.location.href = p + wow;
};

//当用户点击确定（enter）键后，让搜索按钮模拟被点击
document.onkeyup = function (e) {
  if (e.key == "Enter") {
    btn.click();
  }
};

function caidan() {
  let a = document.getElementById("candan");
  let b = document.getElementById("minbox");
  if (b.style.display === "none") {
    b.style.display = "block";
  } else {
    b.style.display = "none";
  }
}
function caidan1() {
  let a = document.getElementById("candan1");
  let b = document.getElementById("minbox1");
  if (b.style.display === "none") {
    b.style.display = "block";
  } else {
    b.style.display = "none";
  }
}
