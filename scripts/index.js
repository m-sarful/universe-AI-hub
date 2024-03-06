const loadData = async () => {
  const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
  const data = await res.json();
  const contents = data.data;
  aiDisplayContents(contents);

}

const aiDisplayContents = contents => {
  const items = contents.tools
  items.splice(11, 1);
  items.splice(10, 1);
  items.splice(5, 1);
  // console.log(items)
  items.forEach(content => {
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
                        <button onclick="showModalContainer('${content.id}');my_modal_4.showModal()"><i class="fa-solid fa-arrow-right"></i></button>
                       </div>
                      </div>
                    </div>
      `
    container.appendChild(div);
  });
}


const showModalContainer = async (id) => {
  // console.log(id);
  const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
  const data = await res.json()
  // console.log(data);
  showDetails(data)
}

const showDetails = (content) => {
  console.log(content.data.accuracy.score*100)
  const description = document.getElementById('description');
  description.innerText = content.data.accuracy.description;

  const modalContainer = document.getElementById('features-container');
  modalContainer.innerHTML = `
 <h1 class="font-bold">Features</h1>
 <li>${content.data.features[1].feature_name}</li>
 <li>${content.data.features[2].feature_name}</li>
 <li>${content.data.features[3].feature_name}</li>
 `
  const integrationContainer = document.getElementById('integration-container');
  integrationContainer.innerHTML = `
 <h1 class="font-bold">Integration</h1>
  <li>${content.data.integrations[0]}</li>
  <li>${content.data.integrations[1]}</li>
  <li>${content.data.integrations[2]}</li>
 `
          const imageContainer = document.getElementById('image-container');
          imageContainer.innerHTML = `
          <img class="p-2 h-52" src="${content.data.image_link[0]}" alt="">
             <div class="absolute">
                <h1 class="relative text-white font-semibold left-[185px] lg:left-[362px] -top-[120px] bg-red-500 rounded p-1">${content.data.accuracy.score*100}% accuracy</h1>
            </div>
              <div class="p-4">
             <h1 class='text-xl font-bold'>${content.data.input_output_examples[0].input}</h1>
             <h4>${content.data.input_output_examples[0].output}</h4>
             </div>
          `

}


loadData();

