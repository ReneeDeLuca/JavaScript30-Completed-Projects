// add event listener on checkbox and on shift key down, when one box is checked, and shift key down, on next check box, select all checkboxes between original checked box and second checked box. 

const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e){
    //check if shift key is down
    // AND check that they are checking it (not unchecking)
    let inBetween = false;
    if(e.shiftKey && this.checked){
        //loop over every checkbox
        checkboxes.forEach(checkbox => {
            if(checkbox === this || checkbox === lastChecked){
                inBetween = !inBetween;
            }
            if(inBetween){
                checkbox.checked = true;
            }
        })
    }
    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));