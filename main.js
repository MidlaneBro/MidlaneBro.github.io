var urls;
var content;
var index;

var urls1 = [
    "img/42.jpg",
    "img/1531136831-3573261798_wn.jpg",
    "img/06.jpg",
    "img/20170428-024258_U3260_M274289_5146.jpg",
    "img/160013497767985_P4317388.jpg",
    "img/IMG_9151.JPG",
    "img/1598261954170.jpg"
];

var content1 = [
    "信義國小",
    "三興國小",
    "龍山國中",
    "建國高中",
    "台灣大學",
    "中華民國陸軍",
    "創意電子實習"
];

var urls3 = [
    "img/35348030_2490163154342597_6668732803523280896_o.jpg",
    "img/92491357_1005356573194921_6527888619590385664_n.jpg",
    "img/ASR.jpg",
    "img/83206327_561813567851883_4320003248778903552_n.jpg",
    "img/121287928_1023387918074895_7759989098101837029_n.jpg"
];

var content3 = [
    "電資入門設計與實作:自走車",
    "數位電路實驗：卡拉ok機",
    "數位語音處理專題研究：語音辨識系統",
    "光電導論：簡易雷射通訊系統",
    "MakeNTU：熱水器恆溫控制與計時系統"
];

var urls4 = [
    "img/1549604658969.jpg",
    "img/received_1075296555907039.jpeg",
    "img/1501726805298.jpg",
    "img/received_557867931358059.jpeg",
    "img/1565964741338.jpg",
    "img/DSC00481.JPG"
];

var content4 = [
    "全家去海南島玩",
    "高中同學們",
    "美國波士頓行",
    "與大學好朋友爬孝子山",
    "當兵同梯好夥伴",
    "德瑞行"
];

var image = document.getElementById("display");
var source = document.getElementById("source")
var prev = document.getElementById("previous");
var next = document.getElementById("next");
var buttons= document.getElementsByClassName("head_button");
var container = document.getElementById("right_body");
var title = document.getElementsByClassName("image-viewer__title")[0];
var viewer = document.getElementsByClassName("image-viewer__main")[0];

function previousImage(){
    if(index===0){
        return;
    }
    if(index===urls.length-1){
        next.classList.remove("disabled");
    }
    index--;
    image.src = "";
    image.src = urls[index];
    source.innerText = content[index];
    if(index===0){
        prev.classList.add("disabled");
    }
}

function nextImage(){
    if(index===urls.length-1){
        return;
    }
    if(index===0){
        prev.classList.remove("disabled");
    }
    index++;
    image.src = "";
    image.src = urls[index];
    source.innerText = content[index];
    if(index===urls.length-1){
        next.classList.add("disabled");
    }
}

function init(){
    container.innerHTML = "<h1 class=\"image-viewer__title\">基本資料</h1><ul id=\"basic\"><li>綽號：鐘憲哥</li><li>年紀：21歲</li><li>學校：國立臺灣大學</li><li>系所：電機工程學系</li><li>星座：牡羊座</li><li>血型：A型</li></ul>";
}

buttons[0].addEventListener('click',()=>{
    container.innerHTML = "<h1 class=\"image-viewer__title\">基本資料</h1><ul id=\"basic\"><li>綽號：鐘憲哥</li><li>年紀：21歲</li><li>學校：國立臺灣大學</li><li>系所：電機工程學系</li><li>星座：牡羊座</li><li>血型：A型</li></ul>";
})

buttons[1].addEventListener('click',()=>{
    container.innerHTML = "";
    title.innerText = "學經歷";
    container.appendChild(title);
    urls = urls1;
    content = content1;
    index = 0;
    image.src = urls[index];
    source.innerText = content[index];
    prev.classList.add("disabled");
    next.classList.remove("disabled");
    container.appendChild(viewer);
})

buttons[2].addEventListener('click',()=>{
    container.innerHTML = "<h1 class=\"image-viewer__title\">專長</h1><ul id=\"prof\"><li>judge & decide</li><li>acquire knowledge</li><li>coding and cooperate</li><li>keep curiosity</li><li>yield idea</li></ul>";
})

buttons[3].addEventListener('click',()=>{
    container.innerHTML = "";
    title.innerText = "學習成果";
    container.appendChild(title);
    urls = urls3;
    content = content3;
    index = 0;
    image.src = urls[index];
    source.innerText = content[index];
    prev.classList.add("disabled");
    next.classList.remove("disabled");
    container.appendChild(viewer);
})

buttons[4].addEventListener('click',()=>{
    container.innerHTML = "";
    title.innerText = "生活照片";
    container.appendChild(title);
    urls = urls4;
    content = content4;
    index = 0;
    image.src = urls[index];
    source.innerText = content[index];
    prev.classList.add("disabled");
    next.classList.remove("disabled");
    container.appendChild(viewer);
})

init();