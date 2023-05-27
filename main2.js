// DINAMIC DOM
$(document).ready(function () {
    const cardData = [{
        items: [{
                text: "Universidad UTE -ARCHITECT",
                subitems: ["2015-2020", "Urban Architect with transversal competences in architectural-urban design and planning", ],
            },
            {
                text: "Coursera & Google- JUNIOR SUPPORT IT",
                subitems: ["2021", "Google Information Technology Support."],
            },
            {
                text: "FUNDACIÓ ESPLAI ICT- FULLSTACK DEVELOPER",
                subitems: [
                    "2023",
                    "Programming Fundamentals Bootcamp (HTML,CSS,JavaScript),Python,Machine Learning & AI",
                ],
            },
        ],
    }];

    const cardContainer = document.querySelector(".education");

    cardData.forEach((card) => {
        card.items.forEach((item) => {
            const listItem = document.createElement("ul");
            listItem.textContent = item.text;
            listItem.classList.add("items");

            const subList = document.createElement("li");
            subList.classList.add("subitems");

            item.subitems.forEach((subitem) => {
                const subListItem = document.createElement("ul");
                subListItem.textContent = subitem;
                subList.appendChild(subListItem);
            });

            listItem.appendChild(subList);
            cardContainer.appendChild(listItem);
        });
    });

})