const btnScrollToEdu = document.querySelector('.scroll-to');
const sectionEdu = document.querySelector('#section-1');
const btnScrollToContact = document.querySelector('.navi-button-contact');
const sectionProf = document.querySelector('.prof-container');
const sectionContact = document.querySelector('.contact-section');
const btnScrollToExp = document.querySelector('.navi-button-exp');
const sectionExpContainer = document.querySelectorAll('.exp-item');

btnScrollToEdu.addEventListener('click', function (e) {
  console.log(e);
  sectionEdu.scrollIntoView({ behavior: 'smooth' });
});

btnScrollToContact.addEventListener('click', function (e) {
  console.log(e);
  sectionContact.scrollIntoView({ behavior: 'smooth' });
});

btnScrollToExp.addEventListener('click', function (e) {
  console.log(e);
  sectionProf.scrollIntoView({ behavior: 'smooth' });
});

for (let i = 0; i < sectionExpContainer.length; i++) {
  sectionExpContainer[i].addEventListener('click', function () {
    console.log(sectionExpContainer[i]);
    sectionExpContainer[i].classList.toggle('open');
  });
  setTimeout(() => {
    sectionExpContainer[i].classList.remove('open');
  }, 10);
}
