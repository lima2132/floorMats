'use strict'

document.addEventListener('DOMContentLoaded', function () {
	const btnForm = document.querySelector('.order__button')


	btnForm.addEventListener('click', () => {
		const filmLike = confirm('Вы точно хотите перейти?');
        let filmQues;
        if(filmLike){
             filmQues = confirm('Вам это не понравится, точно?');
        } 
        if(filmQues){
        }
	})
})
