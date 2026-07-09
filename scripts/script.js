console.log("This is for testing the browser console.");

lucide.createIcons();

const modalOverlay = document.querySelector(".modal-overlay");
const openTriggers = document.querySelectorAll(".open-modal");
const closeTrigger = document.querySelector(".modal-close");
const tripInput = document.querySelector("#tripInput");
const findStaysBtn = document.querySelector("#findStaysBtn");
const chips = document.querySelectorAll(".chip");

function openModal(){
    modalOverlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
    tripInput.focus();
}

function closeModal(){
    modalOverlay.classList.remove("is-open");
    document.body.style.overflow = "";
}

openTriggers.forEach(function(trigger){
    trigger.addEventListener("click", openModal);
});

closeTrigger.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", function(event){
    if(event.target === modalOverlay){
        closeModal();
    }
});

document.addEventListener("keydown", function(event){
    if(event.key === "Escape" && modalOverlay.classList.contains("is-open")){
        closeModal();
    }
});


tripInput.addEventListener("input", function () {
    if (tripInput.value.trim().length === 0) {
        findStaysBtn.disabled = true;
    } else {
        findStaysBtn.disabled = false;
    }
});



chips.forEach(function(chip){
    chip.addEventListener("click", function(){
        chips.forEach(function(item){
            item.classList.remove("is-selected");
        });
        chip.classList.add("is-selected");
        tripInput.value = chip.dataset.sample;
        tripInput.dispatchEvent(new Event("input"));
    });
});

findStaysBtn.addEventListener("click", function(){
    findStaysBtn.disabled = true;
    findStaysBtn.innerHTML = "<i data-lucide=\"loader-circle\" class=\"spin-icon\"></i> Finding stays...";
    lucide.createIcons();
});