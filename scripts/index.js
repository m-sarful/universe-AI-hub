const loadData = async () => {
    
        const res = await fetch('https://openapi.programming-hero.com/api/ai/tool/01');
        const data = await res.json();
        const aiContents = data.data;
        console.log(aiContents.id);
        console.log(aiContents);
        
        // console.log(typeof aiContents);
        aiDisplayContents(aiContents);
    } 

const aiDisplayContents = aiContents => {
    // for(const item in aiContents){
    //     console.log(item)
    // }
    const value = Object.values(aiContents);
    console.log(value);
    const id = value[6][0].input;
    const img = value[5][0];
   const container = document.getElementById('phone-container');
   const containerDiv = document.createElement('div');
   container.innerHTML = `
   <h1>${value[6][0].input}</h1>
   <img src="${value[5][0]}" alt="">
   
   `


    // const id = value[1];
    console.log(id);

}

loadData();

