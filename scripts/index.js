const loadData = async () => {
    
        const res = await fetch('https://openapi.programming-hero.com/api/ai/tool/01');
        const data = await res.json();
        const aiContents = data.data;
        console.log(aiContents);
        // console.log(typeof aiContents);
        aiDisplayContents(aiContents);
    } 

const aiDisplayContents = aiContents => {
    const value = Object.values(aiContents);
    // const keys = Object.keys(aiContents);
    console.log(value[1]);
    // console.log(keys);
};

loadData();

