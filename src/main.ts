import './style.css'
import './index.css'
import { FormatOptions, prettyPrintJson } from "pretty-print-json"
import { getAllData, getData, postData, putData } from './exampleData';

const main = document.querySelector<HTMLDivElement>('#app');
const btn = document.getElementsByTagName('li') as HTMLCollection;


const toCopy = (btn: HTMLButtonElement, text: HTMLParagraphElement) => {

    btn.onclick = async () => {
        const textCopy = text.textContent?.trim()
        if (textCopy) {
            try {
                await navigator.clipboard.writeText(textCopy)
                btn.classList.add("bg-gray-500")
                setTimeout(() => {
                    btn.classList.remove("bg-gray-500")
                }, 500);
            } catch (error) {
                console.log(error);
            }
        }
    }
}

const printJson = async (data: any, req: any, resp: any) => {
    const options: FormatOptions = { trailingCommas: true }

    if (req && resp) {
        req.innerHTML = prettyPrintJson.toHtml(data[0], options);
        resp.innerHTML = prettyPrintJson.toHtml(data[1], options);
    } else {
        resp.innerHTML = prettyPrintJson.toHtml(data[0], options);
    }

}

const getAllRender = (currentId: number): String | undefined => {
    if (main) {
        return main.innerHTML = `
                            <h2 class="text-2xl mb-2">Get teams</h2>
                            <div class="flex flex-col gap-2">
                                <p class="text-gray-500">
                                    Returns a list of all stored football teams.
                                </p>
                                <p>URL:</p>
                                <div class="py-4 px-4 bg-gray-400 rounded-md flex justify-between" >
                                    <p id="text-${currentId}">http://localhost:3000/teams</p>
                                    <button class="bg-gray-100 rounded-sm px-2" id="copy-${currentId}">copy</button>
                                </div>
                                <p>Method: GET</p>
                                <p>Response:</p>
                                <pre id=response class="json-container"></pre>
                            </div>
            `;
    }
}

const getRender = (currentId: number): String | undefined => {
    if (main) {
        return main.innerHTML = `
    <h2 class="text-2xl mb-2">Get team</h2>
    <div class="flex flex-col gap-2">
        <p class="text-gray-500">
            Returns the details of a specific team.
        </p>
        <p>URL:</p>
        <div class="py-4 px-4 bg-gray-400 rounded-md flex justify-between" >
            <p id="text-${currentId}">http://localhost:3000/team?name={name}</p>
            <button class="bg-gray-100 rounded-sm px-2" id="copy-${currentId}">copy</button>
        </div>
        <p>URL Parameter:<br> <mark>\`name\`</mark> (string): The name of the team to retrieve</p>
        <p>Method: GET</p>
        <p>Response:</p>
        <pre id=response class="json-container"></pre>
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
    <p>Body:</p>
    <pre id=data class="json-container"></pre>
    <p>Response:</p>
    <pre id=response class=json-container></pre>

        `;

    }
}

const putRender = (currentId: number): String | undefined => {
    if (main) {
        return main.innerHTML = `
    <h2 class="text-2xl mb-2">Update a team's statistics</h2>
    <p class="text-gray-500">
        Updates an existing team's information, including the number of wins, losses, draws and points.
    </p>
    <div class="py-4 px-4 my-4 bg-gray-400 rounded-md flex justify-between" >
        <p id="text-${currentId}">http://localhost:3000/team?id={id}</p>
        <button class="bg-gray-100 rounded-sm px-2" id="copy-${currentId}">copy</button>
    </div>
    <p>Method: PUT</p>
    <p>Body:</p>
    <pre id=data class=json-container></pre>
    <p>Response:</p>
    <pre id=response class=json-container></pre>
        `;
    }

}

for (let elementActive in btn) {
    btn[elementActive].addEventListener('click', () => {
        const endpoint = btn[elementActive].textContent
        const currentId = parseInt(elementActive)
        switch (endpoint) {
            case "Get":
                getRender(currentId)
                break;
            case "Get_all":
                getAllRender(currentId)
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
        const dataRender = [getData, getAllData, postData, putData];
        const elemData = document.getElementById('data');
        const elemResponse = document.getElementById('response');
        printJson(dataRender[currentId], elemData, elemResponse);
    })
}


