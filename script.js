// variable to show today's date
var today = moment();
$("#1a").text(today.format("MMMM Do, YYYY"));

// make a variable to show the day of the week
var dayWeek = today.format("[Today is] dddd")
$("#2a").text(dayWeek);

var plannerHour = moment().hour()
console.log (plannerHour);

var saveBtn = $(".saveBtn");

// querySelectors 
// functions for each button
// save buttons (addEventListener)
// retrieve stored data into textarea

// Hour 9
var text9 = document.querySelector("#text9");
var save9 = document.querySelector("#save-9");

text9.value = localStorage.getItem("textInput9");

function saveRow9() {
    localStorage.setItem("textInput9", text9.value);
    console.log("did save")
};
save9.addEventListener("click", saveRow9);


// Hour 10
var text10 = document.querySelector("#text10");
var save10 = document.querySelector("#save-10");

text10.value = localStorage.getItem("textInput10");

function saveRow10() {
    localStorage.setItem("textInput10", text10.value);
    console.log("did save")
};
save10.addEventListener("click", saveRow10);


// Hour 11
var text11 = document.querySelector("#text11");
var save11 = document.querySelector("#save-11");

text11.value = localStorage.getItem("textInput11");

function saveRow11() {
    localStorage.setItem("textInput11", text11.value);
    console.log("did save")
};
save11.addEventListener("click", saveRow11);

// Hour 12
var text12 = document.querySelector("#text12");
var save12 = document.querySelector("#save-12");

text12.value = localStorage.getItem("textInput12");

function saveRow12() {
    localStorage.setItem("textInput12", text12.value);
    console.log("did save")
};
save12.addEventListener("click", saveRow12);

// Hour 13
var text13 = document.querySelector("#text13");
var save13 = document.querySelector("#save-13");

text13.value = localStorage.getItem("textInput13");

function saveRow13() {
    localStorage.setItem("textInput13", text13.value);
    console.log("did save")
};
save13.addEventListener("click", saveRow13);

// Hour 14
var text14 = document.querySelector("#text14");
var save14 = document.querySelector("#save-14");

text14.value = localStorage.getItem("textInput14");

function saveRow14() {
    localStorage.setItem("textInput14", text14.value);
    console.log("did save")
};
save14.addEventListener("click", saveRow14);

// Hour 15
var text15 = document.querySelector("#text15");
var save15 = document.querySelector("#save-15");

text15.value = localStorage.getItem("textInput15");

function saveRow15() {
    localStorage.setItem("textInput15", text15.value);
    console.log("did save")
};
save15.addEventListener("click", saveRow15);

// Hour 16
var text16 = document.querySelector("#text16");
var save16 = document.querySelector("#save-16");

text16.value = localStorage.getItem("textInput16");

function saveRow16() {
    localStorage.setItem("textInput16", text16.value);
    console.log("did save")
};
save16.addEventListener("click", saveRow16);

// Hour 17
var text17 = document.querySelector("#text17");
var save17 = document.querySelector("#save-17");

text17.value = localStorage.getItem("textInput17");

function saveRow17() {
    localStorage.setItem("textInput17", text17.value);
    console.log("did save")
};
save17.addEventListener("click", saveRow17);


// needs a function that can add/remove classes for changing the style of the rows depending on the current hour
// when a certain hour passes, it turns grey.
// the current hour is red
// the upcoming hours are green
// https://api.jquery.com/jquery.each/
// https://www.w3schools.com/jquery/jquery_dom_remove.asp
$("div").each(function () {
    var hour = $(this).attr("id")
 
    if (parseInt(hour) < parseInt(plannerHour)) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
    } else if (parseInt(hour) === parseInt(plannerHour)) {
        $(this).addClass("present")
        $(this).removeClass("future");
        $(this).removeClass("past");
    } else if (parseInt(hour) > parseInt(plannerHour)) {
        $(this).addClass("future")
        $(this).removeClass("past");
        $(this).removeClass("present");
    }
});



// create function for removing data off local storage
// https://www.section.io/engineering-education/how-to-use-localstorage-with-javascript/
function clearStorage(){ //clears the entire localStorage
    localStorage.clear()
    location.reload();
    console.log("clear records");
}

clear.addEventListener("click", clearStorage)






/* Unused code
// listenerEvent saves textarea content to localStorage
// var timeLocal = DOM traversal to parent vaule of div #
// var textLocal = DOM traversal to value of textarea
// https://www.tiny.cloud/blog/javascript-localstorage/
// var time = $(this).parent().attr("id");

// parent = $(".saveBtn").parent();
/*
saveBtn.on("click", function() {
    var timeone = $(this).parent().attr("id");
    var text = $(this).siblings("description").val;
    console.log(timeone, text);
    localStorage.setItem(timeone, text);
    localStorage.getItem(timeone, text);
})
*/