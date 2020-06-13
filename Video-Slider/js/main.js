
const img_list = document.querySelectorAll('img');
const slider = document.getElementById("slider");
const toogle = document.getElementById('toogle');

// Add click listener and id for each img
for (let index = 0; index < img_list.length; index++) {
    const element = img_list[index];
    element.id = index;
    element.addEventListener("click", function(e){                    
        slider.src = "./videos/video"+e.target.id+".mp4";
        slider.setAttribute('data_id', e.target.id);
    })
}
// Play the next video
// If prefer loop video, just add "loop" into video label
slider.addEventListener("ended", function(e){
    let newId = (parseInt(e.target.getAttribute('data_id'))+1)%img_list.length;
    slider.setAttribute('data_id', newId);
    slider.src = "./videos/video"+newId+".mp4";
})
/*
    Toogle Thumbnails img controller
*/
toogle.addEventListener("click", function(){
    const src = new String(this.src);
    if(src.search('down') !== -1){
        for(const [index, img] of Object.entries(img_list)){
            img.style.animation = "cover 1s linear";
            img.style.visibility = "hidden";
        }                    
        this.src = './images/arrow_up.png';
    }
    else{
        for(const [index, img] of Object.entries(img_list)){
            img.style.animation = "uncover 0.5s linear";
            img.style.visibility = "visible";
        }                    
        this.src = './images/arrow_down.png';
    }
})

