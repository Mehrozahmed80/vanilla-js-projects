// window.addEventListener('load', function() {
//     var elements = document.getElementsByClassName("tab-btn");

//     Array.from(elements).forEach(function(element) {
//         element.addEventListener('click', function(event){

//             var lang = element.getAttribute('data-tab');
//             var image = element.getAttribute('data-tab-image');
//             myTabs(event, lang);
//             myTabImage(event, image);
//         });
//     });
// })



// function myTabs(event, lang) {
//     let tabContent = document.getElementsByClassName("description");
//     for (let i = 0; i < tabContent.length; i++) {
//         tabContent[i].style.display = "none";
//     }

//     let tabLinks = document.getElementsByClassName("tab-btn");
//     for (let i = 0; i < tabLinks.length; i++) {
//         tabLinks[i].classList.remove("active");
//     }

//     document.getElementById(lang).style.display = "block";
//     event.currentTarget.classList.add("active");
// }

// function myTabImage(event, imga) {
//     let tabPic = document.getElementsByClassName("photos");
//     for (let i = 0; i < tabPic.length; i++) {
//         tabPic[i].style.display = "none";
//     }

//     let tabZoom = document.getElementsByClassName("tab-btn"); 
//     for (let i = 0; i < tabZoom.length; i++) {
//         tabZoom[i].classList.remove("active");
//     }

//     document.getElementById(imga).style.display = "block";
//     event.currentTarget.classList.add("active");
// }




window.addEventListener('load', function () {
    document.querySelectorAll(".tab-btn").forEach(element => {
        element.addEventListener('click', function (event) {
            updateTab(event, element.getAttribute('data-tab'), ".description");
            updateTab(event, element.getAttribute('data-tab-image'), ".photos");
        });
    });
});

function updateTab(event, id, className) {
    document.querySelectorAll(className).forEach(el => el.style.display = "none");
    document.querySelectorAll(".tab-btn").forEach(el => el.classList.remove("active"));

    let target = document.getElementById(id);
    if (target) target.style.display = "block";

    event.currentTarget.classList.add("active");
}
