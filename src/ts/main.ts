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
            document.querySelector("#loader span")!.textContent = loader[ctr];
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
/*


**/
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

class LockChallenge {

    buttons: NodeListOf<Element> | null;
    buttonWiggleDuration: number;
    count: number;
    timer: boolean;
    timerLimit: number;
    timerTotal: number;
    clickCount: number = 0;
    clickRequest: number;
    challengeSuccess: boolean;
    counter: any;
    timeOut: any;
    cssTimeMaxSize: number;

    constructor() {
        this.challengeSuccess = false;
        this.buttonWiggleDuration = 500;
        this.buttons = document.querySelectorAll('.release-content');
        this.count = 1;
        this.timer = false;
        this.timerLimit = 5000; //#//
        this.timerTotal = this.timerLimit * 0.01;
        this.clickRequest = 10; //#//
        this.cssTimeMaxSize = 60;

        this.prepareButtons();
    }
    prepareButtons(): void {
        this.buttons!.forEach((btn: Element) => btn.addEventListener('click',() => this.clickResult(<HTMLElement>btn)));
    }
    clickResult(btn: HTMLElement): boolean {

        let lockIcon = btn.querySelector('i');
        let challengeElem: HTMLElement | null = document.querySelector('.locked .challenge');
        let timerElem: HTMLElement | null = document.querySelector('.locked');


        if(this.challengeSuccess){
            return true;
        }

        if(!this.timer){
            this.timer = true;

            (<HTMLElement> document.querySelector(".forshadow")).classList.remove('alive');

            this._animateButton(lockIcon);

            this.counter = setInterval(()=>{
                this._timerBGColor(timerElem,this.count++, this.timerTotal, "rgb(255, 117, 117)");
                console.log("test");     
            },100);

            this.timeOut = setTimeout(()=>{
                this.clearTimeOutInterval();
                this.clearLock(challengeElem, timerElem);
                this.lockNormalState(lockIcon);
                if(!this.isChallengeOk()){
                    console.log("failed")
                    lockIcon!.classList.remove('fa-lock')
                    lockIcon!.classList.add('fa-times');
                    setTimeout(()=>{
                        lockIcon!.classList.remove('fa-times')
                        lockIcon!.classList.add('fa-lock');
                        (<HTMLElement> document.querySelector(".forshadow")).classList.add('alive');
                    },500);
                }
            },this.timerLimit);
        }else{        
            this.clickCount++
            this._unlockingMove(lockIcon);
            this._timerBGColor(challengeElem, this.clickCount, this.clickRequest,"#679267");
            if(this.isChallengeOk()){
                this.clearTimeOutInterval();
                this.challengeSuccess = true;
                lockIcon!.classList.remove('fa-lock')
                lockIcon!.classList.add('fa-unlock');
                setTimeout(()=>{
                    this.lockNormalState(lockIcon);
                    lockIcon!.classList.remove('fa-unlock')
                    lockIcon!.classList.add('fa-lock-open');
                    (<HTMLElement> document.querySelector(".forshadow")).classList.add('alive');
                },500);
                return true;
            }
        }
        return false;
    }

    private lockNormalState(lockIcon: HTMLElement | null): void {
        lockIcon!.style.transform = "rotate(0deg)";
    }

    private _animateButton(btn: any): void {
        let animationTime = this.buttonWiggleDuration * .001;            
        let timeout = setTimeout(()=>{
            btn.style.animation = "none";
            clearTimeout(timeout);
        },this.buttonWiggleDuration);
        btn.style.animation = "pabebe " + animationTime + "s";        
    }

    private _unlockingMove(lockIcon: HTMLElement | null): void {
        if(this.clickCount % 2 == 1){
            lockIcon!.style.transform = "rotate(-10deg)";
        }else{
            lockIcon!.style.transform = "rotate(10deg)";
        }
    }

    private _timerBGColor(element: HTMLElement | null, timer: number, timerTotal: number, color: string): void {            
        let percentage = (timer / timerTotal) * 100;



        let testing = (percentage * .01) * this.cssTimeMaxSize;        
        element!.style.boxShadow = "inset 0 0 0 "+ testing +"px " + color;
    }

    clearLock(clickElem: HTMLElement | null, timerElem: HTMLElement | null): void {
        this.timer = false;
        this.count = 1;
        this.clickCount = 0; 

        clickElem!.classList.add('trn');
        clickElem!.style.boxShadow = "inset 0 0 0 0px green";    
        let time = setTimeout(()=>{
            clickElem!.classList.remove('trn');
            clearTimeout(time);
        },500);

        timerElem!.classList.add('trn');
        timerElem!.style.boxShadow = "inset 0 0 0 0px rgb(255, 117, 117)";    
        let time2 = setTimeout(()=>{
            timerElem!.classList.remove('trn');
            clearTimeout(time2);
        },500);        
    }

    clearTimeOutInterval():void {
        clearInterval(this.counter);
        clearTimeout(this.timeOut);  
    }

    isChallengeOk(): boolean {
        if(this.clickCount >= this.clickRequest){
            return true;
        }
        return false;
    }

}
let lock = new LockChallenge();
