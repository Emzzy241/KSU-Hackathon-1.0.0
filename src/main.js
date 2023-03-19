// userInterface logic file for my app


import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// importing my  CryptoService class
import { CryptoService } from "./app-service.js"; 


// import Swiper bundle with all modules installed 
import Swiper from 'swiper/bundle';
// import styles bundle 
import 'swiper/css/bundle';

// importing font-awesome into my  
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faInfinity } from "@fortawesome/free-solid-svg-icons/faInfinity";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons/faStarHalfAlt";
import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons/faUserSecret";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons/faDollarSign";
import { faHeadset } from "@fortawesome/free-solid-svg-icons/faHeadset";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons/faQuoteRight";


library.add(faCheck);
library.add(faBars);
library.add(faInfinity);
library.add(faSearch);
library.add(faHeart);
library.add(faUser);
library.add(faTimes);
library.add(faStar);
library.add(faStarHalfAlt);
library.add(faEye);
library.add(faUserSecret);
library.add(faDollarSign);
library.add(faHeadset);
library.add(faQuoteRight);

dom.watch();
// for the home slider swiper




// import mineCrypto from "./assets/images/cryptoMine.jpg";

import btcImage from "./assets/images/btcImage.png";
import eth from "./assets/images/eth.svg";
import bnc from "./assets/images/bnc.png";
import secure from "./assets/images/secure.png";
// import spImage from "./assets/images/sp.svg";
import excImage from "./assets/images/exchange.png";
// import stkExchange from "./assets/images/stExchange.svg";
// import course from "./assets/images/course.png";
import men from "./assets/images/men.jpeg";
import women from "./assets/images/women.jpeg";
import kid from "./assets/images/attire.jpeg";
import kid2 from "./assets/images/kid2.jpeg";
import jacket2 from "./assets/images/jkt2.jpeg";
import jacket from "./assets/images/jkt.jpeg";
import pcOne from "./assets/images/pic-1.png";
import pcTwo from "./assets/images/pic-2.png";
import pcThree from "./assets/images/pic-3.png";
import pcFour from "./assets/images/pic-4.png";
import tethImg from "./assets/images/teth.png";
import doge from "./assets/images/dg.svg";
import ripple from "./assets/images/ripp.png";
import jsBadgeImg from "./assets/images/js-badge.svg";



$(document).ready(() => {

    // working with sites responsiveness


    // the .no-nav class was created in css file for making the navbar invisible

    $(".navbar").addClass("no-nav");

    // for opening and closing the navbar in small screen sizes
    $("#menu-bars").click(() => {
        $(".navbar").toggleClass("no-nav");
    });
    
// working with the class for getting cryptos

    var swiper = new Swiper(".home-slider", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 7500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
    });
    
    // for the review slider swiper
    
    var swiper = new Swiper(".review-slider", {
        spaceBetween: 20,
        centeredSlides: true,
        autoplay: {
            delay: 7500,
            disableOnInteraction: false,
        },
    
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
    
        },
    });


    // let myOfferImage = $("img.offer");
    // myOfferImage.attr("src", myOfferImg);

    
    let myBnc = $(".bnc");
    myBnc.attr("src", bnc);






    let myBtcImage = $(".imgBTC");
    myBtcImage.attr("src", btcImage);


    let myEth = $(".eth");
    myEth.attr("src", eth);

   
    let secureImg = $(".secu");
    secureImg.attr("src", secure);

    let exchangeImg = $(".exc");
    exchangeImg.attr("src", excImage);

    let kidImg = $(".kid");
    kidImg.attr("src", kid);

    // let courseImg = $(".cour");
    // courseImg.attr("src", course);

    // let botImg = $(".bot");
    // botImg.attr("src", bot);

    // let walletImg = $(".wallet");
    // walletImg.attr("src", wallet);

    // let secureImg = $(".secu");
    // secureImg.attr("src", secure);

    let jktImg2 = $(".jkt2");
    jktImg2.attr("src", jacket2);

    let jktImg = $(".imgJkt");
    jktImg.attr("src", jacket);

    let picOneImg = $(".pc1");
    picOneImg.attr("src", pcOne);

    let picTwoImg = $(".pc2");
    picTwoImg.attr("src", pcTwo);

    let picThreeImg = $(".pc3");
    picThreeImg.attr("src", pcThree);

    let picFourImg = $(".pc4");
    picFourImg.attr("src", pcFour);

    let tetherImg = $(".tethCoin");
    tetherImg.attr("src", tethImg);

    let rippImg = $(".rippCoin");
    rippImg.attr("src", ripple);

    let dogeImg = $(".dgCoin");
    dogeImg.attr("src", doge);

    let kidImg2 = $(".kiddd");
    kidImg2.attr("src", kid2);

    let menImg = $(".men");
    menImg.attr("src", men);

    let womenImg = $(".women");
    womenImg.attr("src", women);

    // for the top image in app
    let topImg = $(".appImg");
    topImg.attr("href", jsBadgeImg);




    (async function () {
        const cryptoCurrencyResponse = await CryptoService.getAllCoins();
        getCryptos(cryptoCurrencyResponse);
    })()

    // a function for determining whether I get a successful or an unsuccessful response in getting cryptos
    function getCryptos(myCoinRequest) {
        // a branch to determine if the response I got from my call is an array; if it is, then that's a successful response


        // commenting this oout cause it didn't also work with this version; I would be trying it again in version 1.3.0 with Async and Await functions

       



        if (myCoinRequest[0]) {
            // for getting bitcoin 
            $(".apiCall-BTCName").text(`${myCoinRequest[0].name}`);
            $(".apiCall-BTC").text(`$${myCoinRequest[0].current_price}`);
            // update still coming out for the commented converters
            // $(".apiCall-btctoNaira").text(`₦${btcToNaira}`)

            // for getting ethereum 
            $(".apiCall-ETHName").text(`${myCoinRequest[1].name} coin`);
            $(".apiCall-ETH").text(`$${myCoinRequest[1].current_price}`);
            // $(".apiCall-ethToNaira").text(`₦${ethToNaira}`);

            // for getting binance 
            $(".apiCall-BinanceCoinName").text(`${myCoinRequest[4].name}`);
            $(".apiCall-BinanceCoin").text(`$${myCoinRequest[4].current_price}`);
            // $(".apiCall-BnctoNaira").text(`₦${bncToNaira}`);

            // for getting tether
            $(".apiCall-tethName").text(`${myCoinRequest[2].name} coin`);
            $(".apiCall-tethCoin").text(`$${myCoinRequest[2].current_price}`);
            // $(".apiCall-tethToNaira").text(`₦${tehthToNaira}`);

            // for getting ripple
            $(".apiCall-rippCoinName").text(`${myCoinRequest[6].name} coin`);
            $(".apiCall-ripple").text(`$${myCoinRequest[6].current_price}`);
            // $(".apiCall-rippletoNaira").text(`₦${rippleToNaira}`);


            // for getting doge
            $(".apiCall-dgCoinName").text(`${myCoinRequest[7].name}`);
            $(".apiCall-dgCoin").text(`$${myCoinRequest[7].current_price}`);
            // $(".apiCall-dgCointoNaira").text(`₦${dogeToNaira}`);

        }
        else {
            // since I have displayed the message property in my business logic file, I simply just display the response here 
            $(".error").text(`There was an error processing your request ${myCoinRequest}`);

        }
    }

});