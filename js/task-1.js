const listWithId = document.querySelector(`#categories`);
const listWithLi = listWithId.querySelectorAll("li.item");
console.log(`Number of categories: ${listWithLi.length}`);
listWithLi.forEach((element) => {
    const title = element.querySelector("h2").textContent;
    console.log(`Category: ${title}`);
    const nestedLiCount = element.querySelectorAll("ul li").length;
    console.log(`Elements: ${nestedLiCount}`);
})

