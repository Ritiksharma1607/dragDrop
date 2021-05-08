








console.log("chaaal gya");




let imgBox = document.querySelector('.imgBox');
let whiteBoxes = document.getElementsByClassName('whiteBox');

imgBox.addEventListener('dragstart', (e) => {
    console.log("drag has beeN StArT");
    e.target.className += ' hold'

    setTimeout(() => {

        e.target.className += ' hide';


    }, 0);
});

imgBox.addEventListener('dragend', (e) => {
    console.log("drag has been EnD");
    e.target.className = 'imgBox'
});

for (whiteBox of whiteBoxes) {

    whiteBox.addEventListener('dragover', (e) => {

        console.log("dragOver has been triggered");
        e.preventDefault();
        
    });
    
    whiteBox.addEventListener('dragenter', (e) => {
        
        console.log("dragenter has been triggered");
        e.target.className+= ' dashed'
    });

    whiteBox.addEventListener('dragleave', (e) => {

        console.log("dragleave has been triggered");
        e.target.className='whiteBox'

    });

    whiteBox.addEventListener('drop', (e) => {

        console.log("drop dropp");
        e.target.append(imgBox);

    });


}



