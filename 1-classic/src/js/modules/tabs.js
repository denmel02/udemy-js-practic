const initTabs = (headerSelector, tabSelector, contentSelector, showClass) => {
    const header = document.querySelector(headerSelector);
    const tabs = document.querySelectorAll(tabSelector);
    const contents = document.querySelectorAll(contentSelector);

    console.log(header, tabs, contents)
    const resetTabs = () => {
        tabs.forEach((tab) => tab.classList.remove(showClass));
        contents.forEach((content) => {
            content.style.display = 'none';
        });
    };
    const showTab = (index = 0) => {
        const tabs = document.querySelectorAll(tabSelector);
        const contents = document.querySelectorAll(contentSelector);

        tabs[index].classList.add(showClass);
        contents[index].style.display = 'block';
    };;

    header.addEventListener('click', (event) => {
        const index = [...tabs].findIndex((tab) => tab.contains(event.target));

        if (index !== -1) {
            resetTabs();
            showTab(index);
        }
    });

    resetTabs();
    showTab();
};

export { initTabs };