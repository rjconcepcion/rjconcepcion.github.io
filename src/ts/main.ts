class Nagivate {

    menuLinks: NodeListOf<Element> | null;
    contents: NodeListOf<Element> | null;
    contentsHeight: Array<any>;
    currentPage: string;
    loaderTimeout: number;

    constructor() {
        this.loaderTimeout = 0;
        this.menuLinks = document.querySelectorAll('ul li a');
        this.contents = document.querySelectorAll('div.contents section');
        this.contentsHeight = [];
        this.assignEvents();
        this.prepareContents();
        this.currentPage = (window.location.hash == '') ? '#home' : window.location.hash;
        this.showLinkContent(this.currentPage);
        this.resizeWindow();
        this.loader(15,this.removeLoader);
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
        this.showLoader();
        let _this = this;
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
            if(remainder === limit || this.loaderTimeout == -2){
                clearInterval(interval);
                callback();
                this.loaderTimeout = 0;
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
    testing(): void {
        console.log("test navigate");
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
    formErr: Array<string>;
    thankYouMsg: Array<string>;

    constructor() {
        this.data = {
            to : 'rbrtjhncncpcn@gmail.com',
            subject : '',
            html: 'Test content',
            sendername : ''
        }
        this.formErr = [];
        this.thankYouMsg = [
            'Nice message, very touching.',
            'Thanks, what an epic message.',
            'That message is so sweet! thanks.',
        ]
        this.submitForm();
    }

    someValidation(): boolean {
        
        let name = (<any> document.querySelector('[name="name"]')).value;
        let email = (<any> document.querySelector('[name="email"]')).value;
        let message = (<any> document.getElementById("msg")).value;
        let errorCtr: number = 0;
        let err: Array<string> = [];

        if(!name.replace(/\s/g,'')){
            err[errorCtr] = "Nickname invalid!";
            errorCtr++;
        }
        if(!email.replace(/\s/g,'')){
            err[errorCtr] = "Email address invalid!";
            errorCtr++;
        }else if(!this._validateEmail(email)){
            err[errorCtr] = "Email address format invalid!";
            errorCtr++;
        }
        if(!message.replace(/\s/g,'')){
            err[errorCtr] = "Message invalid!";
            errorCtr++;
        }        
        if(errorCtr){
            this.formErr = err;
            return false;
        }
        this.data.subject = "PORTFOLIO EMAIL - " + email;
        this.data.sendername = name;
        this.data.html = email + ": " + message;
        return true;
    }

    submitForm(): void {
        let _this = this;
        document.getElementById("send")!.addEventListener("click", function(){
            if(!_this.someValidation()){
                document.querySelector(".form-wrap .form-response")!.textContent = _this._formatErrorMsg(_this.formErr);
            }else{
                _this.send();                
            }
        });
    }

    send(): void {
        let _this = this;
        let xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState != 1 && this.readyState != 4) {
                alert("theres an issue, can't send");
            }
            if (this.readyState === 1){
                navigate.loader(-1,()=>{});
            }
            if (this.readyState === 4){    
                navigate.loaderTimeout = -2;
                navigate.removeLoader();
                _this._clearform();
                document.querySelector(".form-wrap .form-response")!.textContent = _this.thankYouMsg[Math.floor(Math.random() * 3)];
            }
        });
        xhr.open("POST", "https://rjconcepcion-c089.restdb.io/mail");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("x-apikey", "5de9d7ef4658275ac9dc2394");        
        xhr.send(JSON.stringify(this.data));
    }

    _validateEmail(email: string): boolean {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return true;
        }
        return false;
    }    

    _formatErrorMsg(err: Array<string>): string {
        return err.join(" ");
    }

    _clearform(): void {
        (<any> document.querySelector('[name="name"]')).value = "";
        (<any> document.querySelector('[name="email"]')).value = "";
        (<any> document.getElementById("msg")).value = "";
    }
}
let email = new Email();