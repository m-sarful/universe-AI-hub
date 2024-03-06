const loadData = async () => {
        const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
        const data = await res.json();
        const contents = data.data;
        aiDisplayContents(contents);
       
    } 

   const aiDisplayContents = contents =>{
    const items = contents.tools
    delete items[5];
    delete items[10];
    console.log(items)
    items.forEach(content =>{
      console.log(content);
      const container = document.getElementById('ai-container');
      const div = document.createElement('div');
      div.classList = `card w-96 bg-base-100 shadow-xl`
      div.innerHTML = `
      <figure><img class="p-4" src="${content.image}" alt="Shoes" /></figure>
                    <div class="card-body">
                      <h2 class="card-title">Features</h2>
                      <ul class="text-gray-400">
                        <li>1. ${content.features[0]}</li>
                        <li>2. ${content.features[1]}</li>
                        <li>3. ${content.features[2]}</li>
                      </ul>
                      <div class="mt-4">
                          <hr>
                          <div>
                       <h1 class="text-2xl font-bold">${content.name}</h1>
                       <p><i class="fa-solid fa-calendar-days"></i> ${content.published_in}</p>
                       </div>
                       <div class="flex justify-end">
                        <button><i class="fa-solid fa-arrow-right"></i></button>
                       </div>
                      </div>
                    </div>
      `

      container.appendChild(div);
    })
   }






loadData();

