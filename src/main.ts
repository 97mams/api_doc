// import './style.css'
import './index.css'

const main = document.querySelector<HTMLDivElement>('#app');
const btn = document.getElementsByTagName('li') as HTMLCollection;

const toCopy = (btn: HTMLButtonElement, text: HTMLParagraphElement) => {
    btn.oncopy = () => {
        text.textContent?.trim()

    }
}

if (main) {
    for (let elementActive in btn) {
        btn[elementActive].addEventListener('click', () => {
            main.innerHTML = `
            <h2 class="text-2xl mb-2">Get teams</h2>
            <p class="text-gray-500" id="text-${elementActive}">
                Returns a list of all stored football teams.
            </p>
            <div class="py-4 px-4 my-4 bg-gray-400 rounded-md flex justify-between" >
                <p>http://localhost:3000/teams</p>
                <button class="bg-gray-100 rounded-sm px-2" id="copy-${elementActive}">copy</button>
            </div>
                `;
            const btnToCopy = document.getElementById(`copy-${elementActive}`) as HTMLButtonElement
            const textToCopy = document.getElementById(`text-${elementActive}`) as HTMLParagraphElement
            toCopy(btnToCopy, textToCopy);
        })
    }

}
