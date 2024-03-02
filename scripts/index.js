const loadData = async () => {
        const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
        const data = await res.json();
        const contents = data.data;
        aiDisplayContents(contents);
    } 

const aiDisplayContents = contents =>{
    const datas = contents.tools;
//   console.log(datas);
  for(const data of datas){
    const img = data.image;
    const container = document.getElementById('ai-container');
   const div = document.createElement('div');
   div.classList = `card p-4 bg-base-100 shadow-xl`;
   div.innerHTML = `
   <figure><img src="${data.image}" alt="Shoes" /></figure>
   <div class="card-body">
     <h2 class="card-title">Shoes!</h2>
     <p>If a dog chews shoes whose shoes does he choose?</p>
     <div class="card-actions justify-end">
       <button class="btn btn-primary">Buy Now</button>
     </div>
   </div>
   `;
   container.appendChild(div);
    }
  }








loadData();

