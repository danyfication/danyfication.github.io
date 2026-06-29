const gridreview = document.getElementById("tudo")
const tabContainer = document.getElementById("qualReview")

const categories = {
    games: {
        label: "Jogos",
        script: "gamesReviews.js",
        style: "gamesReviews.css",
        renderer: null
    },
    books: {
        label: "Livros",
        script: "booksReviews.js",
        style: "booksReviews.css",
        renderer: null
    },
    music: {
        label: "Músicas",
        script: "musicReviews.js",
        style: "musicReviews.css",
        renderer: null
    }
}

function loadCategoryScript(categoryKey) {
    return new Promise((resolve) => {
        const category = categories[categoryKey]
        if (!category) return resolve()

        if (category.renderer) return resolve()

        const existingScript = document.querySelector(`script[data-category="${categoryKey}"]`)
        if (existingScript) {
            category.renderer = window["render" + categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1) + "Reviews"]
            return resolve()
        }

        const script = document.createElement("script")
        script.src = category.script
        script.dataset.category = categoryKey
        script.onload = () => {
            category.renderer = window["render" + categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1) + "Reviews"]
            resolve()
        }
        document.body.appendChild(script)
    })
}

function setActiveTab(categoryKey) {
    document.querySelectorAll('.tab-button').forEach((button) => {
        button.classList.toggle('active', button.dataset.category === categoryKey)
    })
}

function loadCategory(categoryKey) {
    const category = categories[categoryKey]
    if (!category) return

    loadCategoryScript(categoryKey).then(() => {
        if (!category.renderer) return

        gridreview.innerHTML = ""
        category.renderer(gridreview)
        setActiveTab(categoryKey)

        const currentStyle = document.getElementById('category-style')
        if (currentStyle) {
            currentStyle.remove()
        }

        const link = document.createElement('link')
        link.id = 'category-style'
        link.rel = 'stylesheet'
        link.href = category.style
        document.head.appendChild(link)
    })
}

function createTabs() {
    Object.entries(categories).forEach(([key, category]) => {
        const button = document.createElement('button')
        button.className = 'tab-button'
        button.dataset.category = key
        button.textContent = category.label
        button.addEventListener('click', () => loadCategory(key))
        tabContainer.appendChild(button)
    })
}

createTabs()
loadCategory('games')
