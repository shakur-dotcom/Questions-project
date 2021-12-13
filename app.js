//using selectors inside the element
// traversing the dom

const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     let question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });

const questions = document.querySelectorAll('.question');
console.log(questions);

questions.forEach(function(question) {
    let btn = question.querySelector('.question-btn');
    btn.addEventListener('click', function() {
        questions.forEach(function(item) {
            if (item !== question) {
                item.classList.remove('show-text');
            }
        })
        question.classList.toggle('show-text');
    })
})
