function setEventListeners() {
    setMobileNavEventListeners();
    setCollapsibleEventListeners();
    setTabBarItemEventListeners();
    setLiToggleEventListeners();
    setBackFwdNavHeaderCartQtyEventListener();
}
function setMobileNavEventListeners() {
    let mobileNavMenuItems = document.getElementById('mobile-nav').querySelectorAll('.menu-item');
    mobileNavMenuItems.forEach(function (elem) {
        elem.addEventListener('click', toggleSelected);
    });
}
function collapsibleEventListener() {
    this.classList.toggle('active');
    let content = this.nextElementSibling;
    if (this.classList.contains('active')) {
        content.style.display = this.dataset.collapseDisplay || 'block';
    }
    else {
        content.style.display = 'none';
    }
}
function setCollapsibleEventListeners() {
    let coll = document.getElementsByClassName('collapsible');
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener('click', collapsibleEventListener);
    }
}
function liSelectedToggle() {
    if (!this.classList.contains('selected')) {
        let listItems = this.parentNode.getElementsByTagName('li');
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].classList.remove('selected');
        }
        this.classList.add('selected');
    }
}
function setLiToggleEventListeners() {
    let lis = document.querySelectorAll('ul.li-toggles li');
    for (let i = 0; i < lis.length; i++) {
        lis[i].addEventListener('click', liSelectedToggle);
    }
}
function setTabBarItemEventListeners() {
    let tabItems = document.getElementsByClassName('tab-bar-item');
    for (let i = 0; i < tabItems.length; i++) {
        tabItems[i].addEventListener('click', function () { tabSwitch(tabItems[i]); });
    }
}
function setBackFwdNavHeaderCartQtyEventListener() {
    window.addEventListener('pageshow', function (event) {
        if (event.persisted || performance.getEntriesByType("navigation")[0].type === 'back_forward') {
            const locStorQty = localStorage.getItem('cart_qty');
            const headerQtySpans = document.querySelectorAll('span.header-cart-qty');
            const headerQty = headerQtySpans[0].innerText;
            if (locStorQty && locStorQty !== headerQty) {
                for (const spanElem of headerQtySpans) {
                    spanElem.innerText = locStorQty;
                }
            }
        }
    });
}
function checkLocalStorageForCartQty() {
    // checks if user has 'cart_qty' variable set in localStorage. if not, sets it using whatever
    // value was sent down by the server in the '#header-cart-qty-desktop' span element in the header.
    //(this would usually be an entrance to a new session with no Cart object assigned and for which
    // this function has not yet run, but could also be an authenticated user who logged in on a new
    // browser or in an incognito window, or a user who manually removed the value through their
    // browser's dev tools.)
    if (localStorage.getItem('cart_qty') === null) {
        const cartQty = document.getElementById('header-cart-qty-desktop').innerText;
        localStorage.setItem('cart_qty', cartQty);
    }
}
function tabSwitch(tabItem) {
    if (!tabItem.classList.contains('selected')) {
        let tabBar = tabItem.closest('.tab-bar');
        let tabBarItems = tabBar.getElementsByClassName('tab-bar-item');
        for (let i = 0; i < tabBarItems.length; i++) {
            tabBarItems[i].classList.remove('selected');
        }
        tabItem.classList.add('selected');
    }
}
function closeX(elem) {
    let parent = elem.parentNode;
    parent.style.display = 'none';
}
function closeModal() {
    let modalElem = document.getElementById('modal-block');
    modalElem.remove();
}
function closeModalAndRefresh() {
    closeModal();
    location.reload();
}
function tireSearchFormSwitch(tabItem, displayType = 'flex') {
    let tireSearchForms = document.getElementsByClassName('tire-search-form'); // https://stackoverflow.com/a/58773720/3250386
    for (let i = 0; i < tireSearchForms.length; i++) {
        tireSearchForms[i].style.display = 'none';
    }
    switch (tabItem.id) {
        case 'vehicle-search-tab':
            document.getElementById('vehicle-search-form').style.display = displayType;
            break;
        case 'size-search-tab':
            document.getElementById('size-search-form').style.display = displayType;
            break;
        case 'brand-search-tab':
            document.getElementById('brand-search-form').style.display = displayType;
    }
}
function toggleMobileMenuDisplay() {
    let menu = document.getElementById('mobile-nav');
    if (window.getComputedStyle(menu).display === 'none') {
        menu.style.display = 'flex';
    }
    else {
        menu.style.display = 'none';
    }
}
function toggleSelected() {
    this.classList.toggle('selected');
}
function parentByTag(elem, tagName) {
    tagName = tagName.toLowerCase();
    while (elem && elem.parentNode) {
        elem = elem.parentNode;
        if (elem.tagName && elem.tagName.toLowerCase() === tagName) {
            return elem;
        }
    }
    return null;
}
function blankOption(displayName) {
    return '<option value="" selected>' + displayName + '</option>';
}
function clearDependentSelectElems(formElem, containerClass = '') {
    let containerElem;
    if (containerClass) {
        containerElem = formElem.closest('.' + containerClass);
    }
    else {
        // let containerElem = parentByTag(formElem, 'form');
        containerElem = formElem.closest('form');
    }
    let primaryCascadeRank = formElem.dataset.cascadeRank;
    let selectElems = containerElem.getElementsByTagName('select');
    for (let i = 0; i < selectElems.length; i++) {
        let elem = selectElems[i];
        if (elem.dataset.cascadeRank > (primaryCascadeRank + 1)) {
            let options = elem.getElementsByTagName('option');
            let displayName = options[0].innerText;
            elem.innerHTML = blankOption(displayName);
        }
    }
}
function navigateToPage(pageNum) {
    let searchParams = new URLSearchParams(window.location.search);
    searchParams.set('page', pageNum);
    window.location.search = searchParams.toString();
}
function loadingGifOn() {
    // TODO: Remove once analytics loading gifs have been replaced
    document.getElementById('loading').style.display = 'block';
}
function loadingGifOff() {
    // TODO: Remove once analytics loading gifs have been replaced
    document.getElementById('loading').style.display = 'none';
}
function loadingGifsOn(ids = []) {
    // pass an array of ids (as CSS selector strings) to only enable specific `.loading-gif` elements
    // if not passed, all `.loading-gif` elements will be enabled
    let elems;
    if (ids.length > 0) {
        const idsStr = ids.join(', ');
        elems = document.querySelectorAll(idsStr);
    }
    else {
        elems = document.querySelectorAll('.loading-gif');
    }
    for (const elem of elems) {
        elem.style.display = 'flex';
    }
}
function loadingGifsOff() {
    const elems = document.querySelectorAll('.loading-gif');
    for (const elem of elems) {
        elem.style.display = 'none';
    }
}
function setGbbMinHeights() {
    let gbbCards = document.getElementsByClassName('gbb-card');
    let tallestHeight = 0;
    let i;
    let height;
    for (i = 0; i < gbbCards.length; i++) {
        height = gbbCards[i].clientHeight;
        if (height > tallestHeight) {
            tallestHeight = height;
        }
    }
    for (i = 0; i < gbbCards.length; i++) {
        gbbCards[i].style.minHeight = tallestHeight.toString() + 'px';
    }
}
function disableZeroCatalogFilterInputs() {
    let inputs = document.querySelectorAll('#catalog-filters input');
    for (let i = 0; i < inputs.length; i++) {
        let input = inputs[i];
        if (input.value === '') {
            input.setAttribute('disabled', '');
            document.querySelector("label[for=" + input.id + ']').classList.add('disabled');
        }
    }
}
function setCatalogFilterScrollTops() {
    let elems = document.querySelectorAll('.filter-body[style="display: block;"]');
    for (let i = 0; i < elems.length; i++) {
        elems[i].scrollTop = 0;
    }
}
function startAppointmentHoldTimer(durationSeconds, displayElem) {
    let secondsLeft = durationSeconds, minutes, seconds;
    let interval = setInterval(function () {
        minutes = Math.floor(secondsLeft / 60);
        seconds = secondsLeft % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        displayElem.innerText = minutes + ':' + seconds;
        if (--secondsLeft < 0) {
            clearInterval(interval);
            let form = document.getElementById('cancel');
            let originInput = form.querySelector('input[name="origin"]');
            originInput.value = 'timeout';
            form.submit();
        }
    }, 1000);
}
function startRedirectTimer(durationSeconds, redirectUrl, displayElem) {
    let secondsLeft = durationSeconds;
    let interval = setInterval(function () {
        if (displayElem) {
            displayElem.innerText = secondsLeft;
        }
        if (--secondsLeft < 0) {
            clearInterval(interval);
            window.location.replace(redirectUrl);
        }
    }, 1000);
}
function redirect(url) {
    window.location.replace(url);
}
function post(path, params, csrf, method = 'post') {
    const form = document.createElement('form');
    form.method = method;
    form.action = path;
    for (const key in params) {
        if (params.hasOwnProperty(key)) {
            const hiddenField = document.createElement('input');
            hiddenField.type = 'hidden';
            hiddenField.name = key;
            hiddenField.value = params[key];
            form.appendChild(hiddenField);
        }
    }
    document.body.appendChild(form);
    form.submit();
}