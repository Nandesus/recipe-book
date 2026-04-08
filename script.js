// Данные рецептов (id, название, категория, краткое описание, ссылка на страницу, фото)
const recipesData = [
    {
        id: 1,
        title: "Овсяные панкейки с бананом",
        category: "Завтраки",
        shortDesc: "Нежные, без муки и сахара – идеальный завтрак за 10 минут.",
        image: "https://picsum.photos/id/459/400/300",
        link: "recipe1.html"
    },
    {
        id: 2,
        title: "Куриные котлеты с пюре",
        category: "Обеды",
        shortDesc: "Сочные котлеты из куриного филе + воздушное картофельное пюре.",
        image: "https://picsum.photos/id/127/400/300",
        link: "recipe2.html"
    },
    {
        id: 3,
        title: "Тыквенный суп с имбирем",
        category: "Супы",
        shortDesc: "Яркий, согревающий суп-пюре с ноткой имбиря и семечками.",
        image: "https://picsum.photos/id/160/400/300",
        link: "recipe3.html"
    },
    {
        id: 4,
        title: "Творожная запеканка",
        category: "Десерты",
        shortDesc: "Нежная, воздушная, как из детства. С изюмом и ванилью.",
        image: "https://picsum.photos/id/106/400/300",
        link: "recipe4.html"
    }
];

// Функция отрисовки карточек
function renderCards(filterCategory = "all") {
    const grid = document.getElementById("recipesGrid");
    if (!grid) return;

    let filtered = recipesData;
    if (filterCategory !== "all") {
        filtered = recipesData.filter(recipe => recipe.category === filterCategory);
    }

    if (filtered.length === 0) {
        grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:40px;">😕 Нет рецептов в этой категории</div>`;
        return;
    }

    const cardsHTML = filtered.map(recipe => `
        <a href="${recipe.link}" class="recipe-card">
            <img src="${recipe.image}" alt="${recipe.title}" class="card-img" loading="lazy">
            <div class="card-content">
                <div class="card-category">${recipe.category}</div>
                <h3 class="card-title">${recipe.title}</h3>
                <p class="card-desc">${recipe.shortDesc}</p>
            </div>
        </a>
    `).join('');

    grid.innerHTML = cardsHTML;
}

// Фильтрация при клике на кнопки
function setupFiltering() {
    const buttons = document.querySelectorAll(".filter-btn");
    if (!buttons.length) return;

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            // Обновить активный класс
            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter");
            renderCards(filterValue);
        });
    });
}

// Инициализация
document.addEventListener("DOMContentLoaded", () => {
    renderCards("all");
    setupFiltering();
});
