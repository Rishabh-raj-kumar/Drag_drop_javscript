const dropZone = document.querySelector(".drop-zone");
const dropZonePrompt = document.querySelector(".drop-zone_prompt");
const InputElement = document.querySelector(".drop-zone__input");

let img = document.querySelector('.img');
let information = document.querySelector('.info-box p');

dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
});

dropZone.addEventListener('click',(e) =>{
    InputElement.click();
})

InputElement.addEventListener('change',(e) =>{
    console.log(InputElement.files);

    updatePhotu(InputElement.files[0]);
})

dropZone.addEventListener("drop", (e) => {
  e.preventDefault();

  [...e.dataTransfer.files].forEach((files, i) => {
    console.log(`${files.name}`);

    const name = files.name;
    if(name.includes('.png')){
        console.log('Image file')
    }

    updatePhotu(files);
  });
});

function updatePhotu(file){

    information.textContent = file.name;

    if(file.type.startsWith('image/')){
        const reader = new FileReader();
        
        reader.readAsDataURL(file)
        reader.onload = () =>{
           img.src = reader.result;
        }
    }
}