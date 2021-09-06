const tagElements = document.getElementById('created-tags');
const textArea = document.getElementById('input-area');

textArea.focus();

textArea.addEventListener('keyup', (x) => {
  // Function for returning the values of keys pressed
  creaionOfTags(x.target.value)

  if(x.key === 'Enter') {
    
    setTimeout(() => {

      x.target.value = '';

    }, 10);
    
    randomSelection();

  }

});

// Fucntion to create the tags fromthe text input.

function creaionOfTags(input) {


  // console.log(input);
  const separateTags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
  // console.log(separateTags);

  tagElements.innerHTML = '';
  
  separateTags.forEach(tag => {

    const tagElement = document.createElement('span')
    tagElement.classList.add ('tag');
    tagElement.innerText = tag;
    tagElements.appendChild(tagElement);


  }); 

}

// Fucntion to randomly run the ( randomTagPicker ) function + ( tagHighlight ) function for the selected random index of the tag + ( tagUnHighlight ) function to remove the highlight from the tag in intervals;

function randomSelection() {
  const timesRun = 30;

  const interval = setInterval(() => {

    const randomTag = randomTagPicker();
    tagHighlight(randomTag);

    setTimeout(() =>{

      tagUnHighlight(randomTag);

    }, 100);

  }, 100);

  setTimeout(() => {

    clearInterval(interval);

    setTimeout(() => {

      const randomTag = randomTagPicker();

      tagHighlight(randomTag);

    }, 100);

  }, timesRun * 100 );

}

// Function to select a random tag from the input text

function randomTagPicker () {

  const tags = document.querySelectorAll('.tag');

  return tags[Math.floor(Math.random() * tags.length)];

}

// Highlights the Random Tag selected

function tagHighlight(tag) {

  tag.classList.add('highlighted-tag');

}

// UnHighlights the Random Tag selected

function tagUnHighlight(tag) {

  tag.classList.remove('highlighted-tag');

}