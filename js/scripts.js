
const animalMap = {
  "2": "mufasa",
  "4": "panther",
  "6": "rabbit" ,
  "8": "cheetah"
}

const getAnimal = (animalNumber) => animalMap[animalNumber];


$(document).ready(function(){
  $("#pets").submit(function(){
    event.preventDefault();
    function pets () {
      $('.result-card').hide();

      var animal =  getAnimal($("#animal").val());

      var total = animal;
      console.log(total);
      $(`.${animal}`).fadeIn();

    }

    pets();

  });

});
