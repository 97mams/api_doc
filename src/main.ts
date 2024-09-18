// import './style.css'
import './index.css'

const main = document.querySelector<HTMLDivElement>('#app');
const btn = document.getElementsByTagName('li') as HTMLCollection;

const toCopy = (btn: HTMLButtonElement, text: HTMLParagraphElement) => {
    btn.onclick = () => {
        const textCopy = text.textContent?.trim()
        document.execCommand('copy', true, textCopy)
        alert("copy")
    }
}

const getRender = (curentId: number): String | undefined => {
    if (main) {
        return main.innerHTML = `
    <h2 class="text-2xl mb-2">Get teams</h2>
    <p class="text-gray-500" id="text-${curentId}">
        Returns a list of all stored football teams.
    </p>
    <div class="py-4 px-4 my-4 bg-gray-400 rounded-md flex justify-between" >
        <p>http://localhost:3000/teams</p>
        <button class="bg-gray-100 rounded-sm px-2" id="copy-${curentId}">copy</button>
    </div>
        `;
    }
    const btnToCopy = document.getElementById(`copy-${curentId}`) as HTMLButtonElement
    const textToCopy = document.getElementById(`text-${curentId}`) as HTMLParagraphElement
    toCopy(btnToCopy, textToCopy);
}

for (let elementActive in btn) {
    btn[elementActive].addEventListener('click', () => {
        const endpoint = btn[elementActive].textContent
        const curentId = parseInt(elementActive)

        switch (endpoint) {
            case "Get":
                getRender(curentId)
                break;
            case "Post":
                console.log(endpoint);

                break;
            case "Put":
                console.log(endpoint);
                break;
            default:
                break;
        }
    })
}


