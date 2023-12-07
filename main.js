const mobileMenuIcon = document.getElementById(`mobile-menu`);
const closeModalIcon = document.getElementById(`close-modal-icon`);
const navModal = document.getElementById('mobile-nav-modal');

// Open Modal -- listen for click on menu icon
mobileMenuIcon.addEventListener('click', openModal)
// function to open modal if menu icon is clicked
function openModal(){
    // console.log(`you cliked the ${mobileMenuIcon}, broh`)
    navModal.style.display = 'block';

}


// Close Modal -- listen for click on 'x' icon
closeModalIcon.addEventListener('click', closeModal)

//  function that closes our modal from a click on 'x' icon
function closeModal(){
    // console.log(`you clicked the ${closeModalIcon}, broooh`)
    navModal.style.display = 'none';
}

window.addEventListener('click', windowClick)

function windowClick(event){
    console.log(`great job, you clicked the window, broh`)
   if ( event.target === navModal) {
    navModal.style.display = 'none';
   }
}