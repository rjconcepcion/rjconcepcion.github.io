class Nagivate {

    menuLinks: NodeListOf<Element> | null;
    contents: NodeListOf<Element> | null;
    contentsHeight: Array<any>;
    currentPage: string;

    constructor() {
        this.menuLinks = document.querySelectorAll('ul li a');
        this.contents = document.querySelectorAll('div.contents section');
        this.contentsHeight = [];
        this.assignEvents();
        this.prepareContents();
        this.currentPage = (window.location.hash == '') ? '#home' : window.location.hash;
        this.showLinkContent(this.currentPage);
        this.resizeWindow();
        //this.loader(1,this.removeLoader);

    }

    assignEvents(): void {
        let _this = this;
        this.menuLinks!.forEach(function(item: Element, i){
            item.addEventListener("click", ( e ) => {
                let hash = (<any> e.srcElement).hash;
                _this.currentPage = hash;
                _this.showLinkContent(hash);
                _this.setActiveMenu(e);
            });
        });
    }

    setActiveMenu(e: any): void {
        document.querySelectorAll('ul li.active')[0].classList.remove('active');
        (<any> e.srcElement).parentNode.classList.add('active');
    }

    showLinkContent(sectionID: string): void {
        const contentArea: HTMLElement | null = document.querySelector(sectionID);
        let existingOpen = document.querySelectorAll('.contents .open-sesame-seed')[0];
        if(existingOpen != undefined){
            existingOpen.classList.remove('open-sesame-seed');
            this.closeContent(existingOpen);
        }
        contentArea!.classList.add('open-sesame-seed');
        contentArea!.style.height = this.contentsHeight[<any> sectionID.substr(1)] + "px";
        contentArea!.style.opacity = '1';
    }

    resizeWindow(): void {
        let _this = this;
        window.onresize = ()=>{
            this.contents!.forEach(function(section: any, i){
                (<any> section).removeAttribute('style');
                _this.closeContent(section);                
            });
            this.showLinkContent(this.currentPage);
        }
    }

    prepareContents(): void {
        let _this = this;
        this.contents!.forEach(function(section: any, i){      
            _this.closeContent(section);
        });
    }

    closeContent(section: any) {
        this.contentsHeight[section.getAttribute('id')] = section.scrollHeight;
        section.classList.add('trn');
        section.style.height = 0;
        section.style.opacity = 0;
    }

    loader(limit: number = -1, callback: any): void {
        let loader = ['|','/','─','\\'];
        let ctr = 0;
        let remainder = 0;
        let interval = setInterval(()=>{
            document.querySelector("#loader")!.textContent = loader[ctr];
            if(ctr > 2){
                ctr = -1;
            }
            ctr++;
            remainder++;
            if(remainder === limit){
                clearInterval(interval);
                callback();
            }
        },150);
    }
    removeLoader(): void {
        document.getElementById("loader")!.style.opacity = "0";
        document.getElementById("loader")!.style.zIndex = "-1";
    }
    showLoader(): void {
        document.getElementById("loader")!.style.opacity = "1";
        document.getElementById("loader")!.style.zIndex = "1";
    }
}
let navigate = new Nagivate();


class Gallery {

    showDetailsBtn: NodeListOf<Element> | null;

    constructor() {
        this.showDetailsBtn = document.querySelectorAll('[data-show-details]');
        this.showDetails();
    }

    showDetails(): void {
        let _this = this;
        this.showDetailsBtn!.forEach(function(item: Element, i){
            item.addEventListener("click", ( e ) => {
                let parentContainer = (<any> e.srcElement).parentNode.parentNode;
                let btnDelay = setTimeout(()=>{
                    (<any> e.srcElement).classList.toggle('opened');
                    clearTimeout(btnDelay);
                },400);
                parentContainer.style.transition = "all .5s";
                parentContainer.classList.toggle('opened')
                
            });
        });

    }

}
let gallery = new Gallery();

class Email {

    data: {
        to: string,
        subject: string,
        html: string,
        sendername: string
    }

    constructor() {
        this.data = {
            to : 'rbrtjhncncpcn@gmail.com',
            subject : 'PORTFOLIO EMAIL - ',
            html: 'Test content',
            sendername : ''
        }
        this.submitForm();




    }

    submitForm(): void {
        let _this = this;
        document.getElementById("send")!.addEventListener("click", function(){
            _this.data.sendername = (<any> document.querySelector('[name="name"]')).value;
            _this.data.html = "<b>"+ (<any> document.querySelector('[name="email"]')).value + "</b>: " + (<any> document.getElementById("msg")).value;
            _this.send();
        });
    }

    send(): void {
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState != 1 && this.readyState != 4) {
                alert("theres an issue, can't send");
            }
        });
        xhr.open("POST", "https://rjconcepcion-c089.restdb.io/mail");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("x-apikey", "5de9d7ef4658275ac9dc2394");        
        xhr.send(JSON.stringify(this.data));
    }

}
let email = new Email();