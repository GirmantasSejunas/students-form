const studentForm = document.querySelector('form');
// const INITIAL_STUDENT_DATA =  [
//     {name: 'petras',
//     surname: 'petrauskas',
//     age: 15,
//     tel: 860011122,
//     email:'aaa@aaa.aa',
//     ItKnowledge: 4,
//     group: 'type11',
//     interest: 'C++',
//     },
//     {name: 'jonas',
//     surname: 'jonauskas',
//     age: 30,
//     tel: 860033344,
//     email:'bbb@bbb.bb',
//     ItKnowledge: 6,
//     group: 'type10',
//     interest: 'javascript',
//     },
//     {name: 'antanas',
//     surname: 'antanauskas',
//     age: 40,
//     tel: 860055566,
//     email:'ccc@ccc.cc',
//     ItKnowledge: 7,
//     group: 'type7',
//     interest: 'Python',
//     },
//     {name: 'algis',
//     surname: 'algaitis',
//     age: 55,
//     tel: 860077788,
//     email:'ddd@ddd.dd',
//     ItKnowledge: 2,
//     group: 'type10',
//     interest: ['C++, jacascript']
//     },
//     {name: 'saulius',
//     surname: 'saulaitis',
//     age: 60,
//     tel: 860099911,
//     email:'eee@eee.ee',
//     ItKnowledge: 9,
//     group: 'type15',
//     interest: ['C++, python']
//     }
// ]

// // ŠEŠTA UŽDUOTIS:
// // 1. Sukurti pradiniu duomenų masyvą, kuriame būtų bent 5 studentų duomenys (objektų formatu).
// // 2. Sukurti funkciją, kuri priima šiuos duomenis ir užkrovus puslapį į ekraną iškart išveda 
// // duomenis iš šio masyvo.

// function renderInitialData (students){
//     students.map(student => {

//         let studentName = student.name;
//         let studentSurname =student.surname;
//         let studentAge = student.age;
//         let studentPhone = student.tel;
//         let studentEmail = student.email;
//         let studentItKnowledge = student.ItKnowledge;
//         let studentGroup = student.group;
//         let interests = student.interest;


//         let studentsList = document.querySelector('#students-list');
//   let studentItem = document.createElement('div');
//   studentItem.classList.add('student-item');
//   let nameElement = document.createElement('p');
//   nameElement.innerHTML = `<strong>Name:</strong> ${studentName}`;
//   let surnameElement = document.createElement('p');
//   surnameElement.innerHTML = `<strong>Surname:</strong> ${studentSurname}`;
//   let ageElement = document.createElement('p');
//   ageElement.innerHTML = `<strong>Age:</strong> ${studentAge}`;
//   let phoneElement = document.createElement('p');
//   // phoneElement.innerHTML = `<strong>Phone:</strong> ${studentPhone}`;
//   phoneElement.innerHTML = `<strong>Phone:</strong> ****`;
//   let emailElement = document.createElement('p');
//   // emailElement.innerHTML = `<strong>Email:</strong> ${studentEmail}`;
//   emailElement.innerHTML = `<strong>Email:</strong> ****`;
//   let itKnowledgeElement = document.createElement('p');
//   itKnowledgeElement.innerHTML = `<strong>IT Knowledge:</strong> ${studentItKnowledge}`;
//   let groupElement = document.createElement('p');
//   groupElement.innerHTML = `<strong>Group:</strong> ${studentGroup}`;
//   let interestWrapperElement = document.createElement('div');
//   interestWrapperElement.classList.add('interest-wrapper');
//   let interestTitleElement = document.createElement('h4');
//   interestTitleElement.classList.add('interest-title');
//   interestTitleElement.textContent = 'Interests:';
//   let interestListElement = document.createElement('ul');
//   interestListElement.classList.add('interest-list');
//   interests.forEach(interest => {
//     let interestItemElement = document.createElement('li');
//     interestItemElement.textContent = interest.value;
//     interestListElement.append(interestItemElement);
//   });
//     })
// }

// renderInitialData(INITIAL_STUDENT_DATA )


const itKnowledgeInputElement = document.querySelector('#student-it-knowledge');
const itKnowledgeOutputElement = document.querySelector('#it-knowledge-output');
itKnowledgeInputElement.addEventListener('input', (event) => {
  // console.log(itKnowledgeInputElement.value)
  // console.log(event.target.value);
  itKnowledgeOutputElement.textContent = event.target.value;
});
studentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let studentName = document.querySelector('#student-name').value;
  let studentSurname = document.getElementById('student-surname').value;
  // let studentAge = studentForm.querySelector('#student-age').value;
  let studentAge = event.target.querySelector('#student-age').value;
  let studentPhone = studentForm.querySelector('[name="phone"]').value;
  let studentEmail = event.target.elements.email.value;
  let studentItKnowledge = event.target.elements['it-knowledge'].value;
  // let studentGroup = document.querySelector('input[name="group"]:checked');
  let studentGroup = event.target.elements.group.value;
  let interests = document.querySelectorAll('input[name="interest"]:checked');
  // let studentNameInput = document.querySelector('#student-name');
  // studentNameInput.style.borderColor = '';
  // let inputErrorMessage = document.querySelector('.input-error-message');
  // if (inputErrorMessage) {
  //   inputErrorMessage.remove();
  // }
  // if (!studentName) {
  //   let alertText = 'Ne visi laukeliai užpildyti.';
  //   alertMessage(alertText, 'error-alert');
  //   studentNameInput.style.borderColor = 'red';
  //   let inputError = document.createElement('span');
  //   inputError.textContent = 'Šis laukelis yra privalomas';
  //   inputError.classList.add('input-error-message');
  //   studentNameInput.after(inputError);
  //   return;
  // }
  document.querySelectorAll('.input-error-message').forEach(input => input.remove());
  let requiredInputs = document.querySelectorAll('input.required');
  let validForm = true;
  requiredInputs.forEach(input => {
    input.classList.remove('input-error');
    if (!input.value) {
      validForm = false;
      let alertText = 'Ne visi laukeliai užpildyti.';
      alertMessage(alertText, 'error-alert');
      input.classList.add('input-error');
      let inputError = document.createElement('span');
      inputError.textContent = 'Šis laukelis yra privalomas';
      inputError.classList.add('input-error-message');
      input.after(inputError);
    }
  })
  if (!validForm) {
    return;
  }
  let studentsList = document.querySelector('#students-list');
  let studentItem = document.createElement('div');
  studentItem.classList.add('student-item');
  let nameElement = document.createElement('p');
  nameElement.innerHTML = `<strong>Name:</strong> ${studentName}`;
  let surnameElement = document.createElement('p');
  surnameElement.innerHTML = `<strong>Surname:</strong> ${studentSurname}`;
  let ageElement = document.createElement('p');
  ageElement.innerHTML = `<strong>Age:</strong> ${studentAge}`;
  let phoneElement = document.createElement('p');
  // phoneElement.innerHTML = `<strong>Phone:</strong> ${studentPhone}`;
  phoneElement.innerHTML = `<strong>Phone:</strong> ****`;
  let emailElement = document.createElement('p');
  // emailElement.innerHTML = `<strong>Email:</strong> ${studentEmail}`;
  emailElement.innerHTML = `<strong>Email:</strong> ****`;
  let itKnowledgeElement = document.createElement('p');
  itKnowledgeElement.innerHTML = `<strong>IT Knowledge:</strong> ${studentItKnowledge}`;
  let groupElement = document.createElement('p');
  groupElement.innerHTML = `<strong>Group:</strong> ${studentGroup}`;
  let interestWrapperElement = document.createElement('div');
  interestWrapperElement.classList.add('interest-wrapper');
  let interestTitleElement = document.createElement('h4');
  interestTitleElement.classList.add('interest-title');
  interestTitleElement.textContent = 'Interests:';
  let interestListElement = document.createElement('ul');
  interestListElement.classList.add('interest-list');
  interests.forEach(interest => {
    let interestItemElement = document.createElement('li');
    interestItemElement.textContent = interest.value;
    interestListElement.append(interestItemElement);
  });
  interestWrapperElement.append(interestTitleElement, interestListElement);
  let privateInfoButton = document.createElement('button');
  privateInfoButton.textContent = 'Rodyti asmens duomenis';

  let removedStudent = document.createElement('button')
removedStudent.textContent = 'istrinti studenta'

removedStudent.addEventListener('click', ()=> {
    studentItem.remove()
    let alertText = `Student removed (${studentName} ${studentSurname})`;
    alertMessage(alertText);
 } )

 let changeStudent = document.createElement('button')
 changeStudent.textContent = 'redaguoti studenta'

 changeStudent.addEventListener('click', ()=> {

 })



  // let hiddenData = true;
  // privateInfoButton.addEventListener('click', () => {
  //   if (hiddenData) {
  //     phoneElement.innerHTML = `<strong>Phone:</strong> ${studentPhone}`;
  //     emailElement.innerHTML = `<strong>Email:</strong> ${studentEmail}`;
  //     privateInfoButton.textContent = 'Slėpti asmens duomenis';
  //   } else {      
  //     phoneElement.innerHTML = `<strong>Phone:</strong> ****`;
  //     emailElement.innerHTML = `<strong>Email:</strong> ****`;
  //     privateInfoButton.textContent = 'Rodyti asmens duomenis';
  //   }
  //   hiddenData = !hiddenData;
  // });
  privateInfoButton.addEventListener('click', () => {
    if (!privateInfoButton.classList.contains('hide')) {
      phoneElement.innerHTML = `<strong>Phone:</strong> ${studentPhone}`;
      emailElement.innerHTML = `<strong>Email:</strong> ${studentEmail}`;
      privateInfoButton.textContent = 'Slėpti asmens duomenis';
    } else {      
      phoneElement.innerHTML = `<strong>Phone:</strong> ****`;
      emailElement.innerHTML = `<strong>Email:</strong> ****`;
      privateInfoButton.textContent = 'Rodyti asmens duomenis';
    }
    privateInfoButton.classList.toggle('hide');
  });
  studentItem.append(nameElement, surnameElement, ageElement, phoneElement, emailElement, itKnowledgeElement, groupElement, interestWrapperElement, privateInfoButton, removedStudent, changeStudent);
  studentsList.prepend(studentItem);
  // studentForm.reset();
  event.target.reset();
  let alertText = `Student created (${studentName} ${studentSurname})`;
  alertMessage(alertText);
});
function alertMessage(text, elementClass = '') {
  const alertElement = document.querySelector('#alert');
  alertElement.textContent = text;
  if (elementClass) {
    alertElement.classList.add(elementClass);
  }
  setTimeout(() => {
    alertElement.textContent = '';
    alertElement.classList.remove(elementClass);
  }, 5000);
}


// PENKTA UŽDUOTIS (studento ištrynimas):
// 1. Prie kiekvieno sukurto studento elemento pridėti mygtuką „Ištrinti studentą".
// 2. Paspaudus šį mygtuką, studento elementas yra ištrinamas.
// 3. Ištrynus studentą, turi iššokti <span> elementas, kuris informuoja apie studento ištrynimą:
//  „Studentas (Vardas Pavardė) sėkmingai ištrintas.". Šis span elementas dingsta po 5 sekundžių.
