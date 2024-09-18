// import './style.css'
import './index.css'

const main = document.querySelector<HTMLDivElement>('#app');
const btn = document.getElementsByTagName('li') as HTMLCollection;

const toCopy = (btn: HTMLButtonElement, text: HTMLParagraphElement) => {

    btn.onclick = async () => {
        const textCopy = text.textContent?.trim()
        if (textCopy) {
            try {
                await navigator.clipboard.writeText(textCopy)
                alert("text success copy")
            } catch (error) {
                console.log(error);


            }
        }
    }
}

const getRender = (currentId: number): String | undefined => {
    if (main) {
        return main.innerHTML = `
    <h2 class="text-2xl mb-2">Get teams</h2>
    <p class="text-gray-500">
        Returns a list of all stored football teams.
    </p>
    <div class="py-4 px-4 my-4 bg-gray-400 rounded-md flex justify-between" >
        <p id="text-${currentId}">http://localhost:3000/teams</p>
        <button class="bg-gray-100 rounded-sm px-2" id="copy-${currentId}">copy</button>
    </div>
        `;
    }
}

const postRender = (currentId: number): String | undefined => {
    if (main) {
        return main.innerHTML = `
    <h2 class="text-2xl mb-2">Add a new team</h2>
    <p class="text-gray-500">Adds a new team to the database.</p>
    <div class="py-4 px-4 my-4 bg-gray-400 rounded-md flex justify-between" >
        <p id="text-${currentId}">http://localhost:3000/team</p>
        <button class="bg-gray-100 rounded-sm px-2" id="copy-${currentId}">copy</button>
    </div>
    <p>Method: POST</p>
    <p>Body: json</br>
    {
        "name": "Team Name"
    }
    </p>
    <p>Response: json</br>
    {
    "message": "Team successfully added",
    "team": {
      "id": 2,
      "name": "Team Name",
      "wins": 0,
      "losses": 0,
      "draws": 0
      "point": 0
    }
  }
    </p>
        `;
    }
    const btnToCopy = document.getElementById(`copy-${currentId}`) as HTMLButtonElement
    const textToCopy = document.getElementById(`text-${currentId}`) as HTMLParagraphElement
    toCopy(btnToCopy, textToCopy);
}

const putRender = (currentId: number): String | undefined => {
    if (main) {
        return main.innerHTML = `
    <h2 class="text-2xl mb-2">Update a team's statistics</h2>
    <p class="text-gray-500" id="text-${currentId}">
        Updates an existing team's information, including the number of wins, losses, draws and points.
    </p>
    <div class="py-4 px-4 my-4 bg-gray-400 rounded-md flex justify-between" >
        <p id="text-${currentId}">http://localhost:3000/team?id={id}</p>
        <button class="bg-gray-100 rounded-sm px-2" id="copy-${currentId}">copy</button>
    </div>
    <p>Method: POST</p>
    <p>Body: json</br>
    {
        "win": 1,
        "lose": 0,
        "draw": 0
    }
    </p>
    <p>Response: json</br>
    {
	"message": "Team success uptaded",
	"team": {
		"win": 1,
		"lose": 1,
		"draws": 2,
		"point": 5,
		"match": 4,
		"id": "29"
	    }
    }
    </p>
        `;
    }
    const btnToCopy = document.getElementById(`copy-${currentId}`) as HTMLButtonElement
    const textToCopy = document.getElementById(`text-${currentId}`) as HTMLParagraphElement
    toCopy(btnToCopy, textToCopy);
}

for (let elementActive in btn) {
    btn[elementActive].addEventListener('click', () => {
        const endpoint = btn[elementActive].textContent
        const currentId = parseInt(elementActive)
        switch (endpoint) {
            case "Get":
                getRender(currentId)
                break;
            case "Post":
                postRender(currentId);

                break;
            case "Put":
                putRender(currentId);
                break;
            default:
                break;
        }
        const btnToCopy = document?.getElementById(`copy-${currentId}`) as HTMLButtonElement
        const textToCopy = document?.getElementById(`text-${currentId}`) as HTMLParagraphElement
        toCopy(btnToCopy, textToCopy);
        console.log(btnToCopy);
    })
}


