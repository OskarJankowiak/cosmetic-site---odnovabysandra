
// animation when page is loading
$(window).on("load",function(){
    $(".loader-wrapper").delay(200).fadeOut("slow");
});


// Strings and Objects from HTML code
const DOM_strings = { 
    hamburger: '.hamburger',
    nav: '.menu',
    offerBTN: 'main--btn',
    offerSection: '.offer--section',
    offerClicker: 'offer--clicker',
    btnGallery: 'btn-2',
    aboutMeSection: '.about--me',
    aboutSectionText: 'aboutP',
    gallerySection: '.gallery',
    galleryBTN: 'gallery-btn',
    contactSection: '.contact',
    btnContact: 'btn-2',
    meTitle: 'me-title',
    contactTile: '.contact-title',
    contactBTN_menu: 'contactBtn-menu',



    getObjects() {

        return DOM_objects = {
            hamburgerDOM: document.querySelector(this.hamburger),
            navDOM: document.querySelector(this.nav),
            offerBtnDom: document.getElementById(this.offerBTN),
            offerSectionDOM: document.querySelector(this.offerSection),
            offerClickerDOM: document.getElementById(this.offerClicker),
            btnGalleryDOM: document.getElementById(this.btnGallery),
            aboutMeSectionDOM: document.querySelector(this.aboutMeSectionDOM),
            aboutPDOM: document.getElementById(this.aboutSectionText),
            gallerySectionDOM: document.querySelector(this.gallerySection),
            galleryBTN: document.getElementById(this.galleryBTN),
            contactSectionDOM: document.querySelector(this.contactSection),
            btnContactDOM: document.getElementById(this.btnContact),
            meTitleDOM: document.getElementById(this.meTitle),
            contactTitleDOM: document.querySelector(this.contactTitle),
            contactBTN_menu: document.getElementById(this.contactBTN_menu),


        }
    }
};

DOM_strings.getObjects();

// Show/hide navbar and animation hamburger icon
let handleClick = () => {

    DOM_objects.hamburgerDOM.classList.toggle('hamburger--active');
    DOM_objects.navDOM.classList.toggle('menu--active');
    
        
};

// smooth scroll to any DOM element
function smoothScroll(element,duration) {
    const target = document.getElementById(element) || document.querySelector(element);
    const navbarHeight = document.querySelector('.menu').height;
    let targetPosition = target.getBoundingClientRect().top - (window.innerHeight / 10);
    let startPosition = window.pageYOffset;
    let distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let run = ease (timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0,run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease (t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    };

    requestAnimationFrame(animation);


}

// scroll to DOM element
function scrollIntoView(element) {
     const scrollToEL = element.scrollIntoView(true);
    
}

// hide navigation
function navHider() {
    const sidebar = DOM_objects.navDOM;
    const hamburger = DOM_objects.hamburgerDOM;
    let sidebarClass = sidebar.className;
    let hamburgerClass = hamburger.className;

    if (sidebarClass && hamburgerClass) {
        sidebar.classList.remove("menu--active")
        hamburger.classList.remove("hamburger--active")
    }
};



// add/remove animation when gallery is on scroll 
function animeGallery() {
    const sliderDives = document.querySelectorAll('.content-gallery');
    const sliderDivesArr = [...sliderDives];
    sliderDivesArr.forEach(sliderDiv => {


        const divHeight = window.innerHeight * 0.5;

        // position scroll at half of Div
        const slideInAt = (window.scrollY + window.innerHeight) - divHeight/2

        // bottom of the div
        const divBottom= sliderDiv.offsetTop + divHeight;
        // scroll position is 
        const isHalfShown = slideInAt > sliderDiv.offsetTop;
        // scroll position number is smaller than bottom of Div
        const isNotScrolledPast = window.scrollY < divBottom;

            if (isHalfShown && isNotScrolledPast) {
                sliderDiv.classList.add('active-content');
            } else {
                sliderDiv.classList.remove('active-content');
      }
    });
  }

// slide and show BTN
function showBTN() {
    const btn = DOM_objects['btnContactDOM'];
    let scrolledWindow = window.innerHeight + window.scrollY;
    const btnFromTop = btn.offsetTop;

    if(scrolledWindow > btnFromTop) {
        btn.classList.add('contact-btn-active');
    }


};


function animeContactSection() {
    const contactFormList = document.querySelectorAll('.contact-content');
    const contactContainer = document.querySelector('.contact');
    const contactTitleDOM = document.querySelector('.contact-title');

    let scrolledWindow = window.scrollY + window.innerHeight;

    let halfContainer = contactContainer.offsetTop + 250;

    const scrollOverContainer = scrolledWindow > halfContainer;


    contactFormList.forEach(contact => {
        if(scrollOverContainer) {
            contact.classList.add('contact-content-active');
        } else{
            contact.classList.remove('contact-content-active');
        }
        
    });
}

const clickerEvents = {
    hamburgerClick: DOM_objects.hamburgerDOM.addEventListener('click', handleClick),

    btnMainPage: DOM_objects.offerBtnDom.addEventListener('click', function(){
        navHider();
        scrollIntoView(DOM_objects.offerSectionDOM);
        
    }),

    nav_offerBtn:DOM_objects.offerClickerDOM.addEventListener('click', function(){
        navHider();
        scrollIntoView(DOM_objects.offerSectionDOM);
        }),

    galleryBtn:DOM_objects.galleryBTN.addEventListener('click', function() {
        navHider();
        scrollIntoView(DOM_objects.gallerySectionDOM);
    }),

    contactBTN_click: DOM_objects.btnContactDOM.addEventListener('click', function(){
        navHider();
        scrollIntoView(DOM_objects.contactSectionDOM);
    }),
    contactBTN2_click: DOM_objects.contactBTN_menu.addEventListener('click', function() {
        navHider();
        scrollIntoView(DOM_objects.contactSectionDOM);
    })
};

const scrollEvents = {
    galleryScroll: window.addEventListener('scroll', animeGallery),
    aboutMeScroll: window.addEventListener('scroll', showBTN),
    contactScroll: window.addEventListener('scroll',animeContactSection)

};




