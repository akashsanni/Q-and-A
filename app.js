//using selectors inside the element
// traversing the dom


// const plusIcon = document.querySelector('.plus-icon')
// const minusIcon = document.querySelector('.minus-icon')
// const question = document.querySelector('.question')
// const questionText = document.querySelector(".question-text")

// plusIcon.addEventListener('click',function(){
//     // console.log('plus is clicked!')
//     question.classList.add('show-text')
//     question.classList.remove('minus-icon')
//     console.log(questionText.children[1])
//     // question.nextElementSibling.add('show-text')
//     questionText.children[1].add('show-text')
//     questionText.children[1].classList.remove('minus-icon')


// })

// minusIcon.addEventListener('click',function(){
//     // console.log('minus is clicked!')
//     question.classList.remove('show-text')
//     question.nextElementSibling.classList.remove('show-text') 
// })

// const questionText = document.querySelector('.question-text')
// console.log(questionText.previousElementSibling)


//by traversing the DOM

const questionBtn = document.querySelectorAll('.question-btn')

questionBtn.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const targetParent = e.currentTarget.parentElement.parentElement
        // console.log(targetParent)
        targetParent.classList.toggle('show-text')
    })
})

