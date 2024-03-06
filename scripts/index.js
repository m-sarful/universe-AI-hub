const loadData = async () => {
        const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
        const data = await res.json();
        const contents = data.data;
        aiDisplayContents(contents);
       
    } 

   const aiDisplayContents = contents =>{
    const items = contents.tools
   items.splice(10, 1);
   items.splice(5, 1);
    // console.log(items)
    items.forEach(content =>{
      // console.log(content);
      const container = document.getElementById('ai-container');
      const modalContainer = document.getElementById('modal-container');
      const div = document.createElement('div');
      div.classList = `card w-96 bg-base-100 shadow-xl`
      div.innerHTML = `
      <figure><img class="p-4" src="${content.image}" alt="Shoes" /></figure>
      <div class="absolute">
      <h1 class="relative left-[275px] text-white top-4 bg-red-500 rounded">94% accuracy</h1>
  </div>
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
                        <button onclick="showModalContainer('${content.id}')"><i class="fa-solid fa-arrow-right"></i></button>
                       </div>
                      </div>
                    </div>
      `
      container.appendChild(div);
    });
   }


 const showModalContainer = async(id) =>{
  // console.log(id);
  const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
  const data = await res.json()
  // console.log(data);
  showDetails(data)
 }

 const showDetails = (content) =>{
  console.log(content.data.id)
  const modalContainer = document.getElementById('modal-container');
  const modalDiv = document.createElement('div');
  modalDiv.innerHTML = `
  <dialog id="my_modal" class="modal">
  <div class="modal-box w-11/12 max-w-5xl">
    <form method="dialog">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <div class="flex flex-col lg:flex-row justify-between gap-4 mt-8">
        <div class="border border-red-500 w-full lg:w-1/2 bg-pink-100 p-2">
            <h1 class="text-xl font-bold">ChatGPT is an AI-powered chatbot platform that uses OpenAI's GPT technology to simulate human conversation.</h1>
            <div class="flex flex-col lg:flex-row justify-between gap-2 p-2">
                <button class="btn text-green-600 font-bold">$10/ <br> month <br> Basic</button>
                <button class="btn text-orange-300 font-bold">$50/ <br> month <br> Pro</button>
                <button class="btn text-red-600 font-bold">Contact <br> us <br> Enterprise</button>
            </div>
            <div class="mt-4 flex flex-col lg:flex-row justify-between gap-2 p-2">
                <div class="w-1/2">
                    <h1 class="font-bold">Features</h1>
                    <li>${content.data.id}</li>
                    <li></li>
                    <li></li>
                </div>
                <div class="w-1/2">
                    <h1 class="font-bold">Integration</h1>
                    <li>this is my first heading heading heading heading</li>
                    <li></li>
                    <li></li>
                </div>
            </div>
        </div>
        <div class="border border-green-500 w-full lg:w-1/2 flex flex-col justify-center">
             <img class="p-2 h-52" src="download.png" alt="">
             <div class="absolute">
                <h1 class="relative text-white font-semibold left-[185px] lg:left-[362px] -top-[120px] bg-red-500 rounded p-1">94% accuracy</h1>
            </div>
              <div class="p-4">
             <h1 class='text-xl font-bold'>question</h1>
             <h4>answer</h4>
             </div>
        </div>
    </div>
  </div>
 </dialog> 
  `

  modalContainer.appendChild(modalDiv);

  my_modal.showModal();
}


loadData();

