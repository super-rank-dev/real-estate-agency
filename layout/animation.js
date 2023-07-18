import styled from 'styled-components';

import { palette, breakpoints } from '../theme';

const AnimationWrapper = styled.div`

    --boxSize: 1em;
    --speed: 18s;
    --rotateSceneX: 0deg;
    --rotateSceneY: 0deg;

    font-family: 'Berkshire Swash', cursive;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
    perspective: 100em;
    overflow: hidden;

    grid-column: full-start / col-end 4;
    width: calc(50vw - 48px);
    height: 614px;
    position: relative;

    @media only screen and (max-width: ${breakpoints.xl}) {
        display: none;
    }
    
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0 auto;
        box-sizing: border-box;
    }
        
    .cell {
        width: 100%;
        height: 100%;
    }
    
    .cell:nth-child(10n + 1):hover~.scene {
        --rotateSceneY: -63deg;
    }
    
    .cell:nth-child(n + 1):nth-child(-n + 10):hover~.scene {
        --rotateSceneX: 36deg;
    }
    
    .cell:nth-child(10n + 2):hover~.scene {
        --rotateSceneY: -49deg;
    }
    
    .cell:nth-child(n + 11):nth-child(-n + 20):hover~.scene {
        --rotateSceneX: 28deg;
    }
    
    .cell:nth-child(10n + 3):hover~.scene {
        --rotateSceneY: -35deg;
    }
    
    .cell:nth-child(n + 21):nth-child(-n + 30):hover~.scene {
        --rotateSceneX: 20deg;
    }
    
    .cell:nth-child(10n + 4):hover~.scene {
        --rotateSceneY: -21deg;
    }
    
    .cell:nth-child(n + 31):nth-child(-n + 40):hover~.scene {
        --rotateSceneX: 12deg;
    }
    
    .cell:nth-child(10n + 5):hover~.scene {
        --rotateSceneY: -7deg;
    }
    
    .cell:nth-child(n + 41):nth-child(-n + 50):hover~.scene {
        --rotateSceneX: 4deg;
    }
    
    .cell:nth-child(10n + 6):hover~.scene {
        --rotateSceneY: 7deg;
    }
    
    .cell:nth-child(n + 51):nth-child(-n + 60):hover~.scene {
        --rotateSceneX: -4deg;
    }
    
    .cell:nth-child(10n + 7):hover~.scene {
        --rotateSceneY: 21deg;
    }
    
    .cell:nth-child(n + 61):nth-child(-n + 70):hover~.scene {
        --rotateSceneX: -12deg;
    }
    
    .cell:nth-child(10n + 8):hover~.scene {
        --rotateSceneY: 35deg;
    }
    
    .cell:nth-child(n + 71):nth-child(-n + 80):hover~.scene {
        --rotateSceneX: -20deg;
    }
    
    .cell:nth-child(10n + 9):hover~.scene {
        --rotateSceneY: 49deg;
    }
    
    .cell:nth-child(n + 81):nth-child(-n + 90):hover~.scene {
        --rotateSceneX: -28deg;
    }
    
    .cell:nth-child(10n + 10):hover~.scene {
        --rotateSceneY: 63deg;
    }
    
    .cell:nth-child(n + 91):nth-child(-n + 100):hover~.scene {
        --rotateSceneX: -36deg;
    }
    
    .scene {
        position: absolute;
        top: 20%;
        left: calc(50% - 264px);
        transform-style: preserve-3d;
        transform: translateZ(0em) rotateX(var(--rotateSceneX)) rotateY(var(--rotateSceneY));
        transition: transform 0.5s;
        z-index: 3;
    }
    
    .sign {
        top: -14.25em;
        left: -26em;
        width: 52em;
        height: 28.5em;
        background-color: #000;
        transform-style: preserve-3d;
    }
    
    .sign_front {
        width: 100%;
        height: 100%;
        transform: translateZ(2em);
        background-image: linear-gradient(0deg, #544 2em, transparent 2em), linear-gradient(90deg, #544 2em, transparent 2em), linear-gradient(180deg, #544 2em, transparent 2em), linear-gradient(270deg, #544 2em, transparent 2em);
    }
    
    .sign_topIn,
    .sign_topOut {
        position: absolute;
        height: 2em;
        background-color: #634f4f;
        transform-origin: top;
        transform: rotateX(90deg);
    }
    
    .sign_topIn {
        bottom: 0;
        left: 2em;
        width: calc(100% - 4em);
    }
    
    .sign_topOut {
        top: 0;
        left: 0;
        width: 100%;
    }
    
    .sign_bottomIn,
    .sign_bottomOut {
        position: absolute;
        height: 2em;
        background-color: #2b2222;
        transform-origin: bottom;
        transform: rotateX(-90deg);
    }
    
    .sign_bottomIn {
        top: 0;
        left: 2em;
        width: calc(100% - 4em);
    }
    
    .sign_bottomOut {
        bottom: 0;
        left: 0;
        width: 100%;
    }
    
    .sign_leftIn,
    .sign_leftOut {
        position: absolute;
        width: 2em;
        background-color: #473939;
        transform-origin: left;
        transform: rotateY(-90deg);
    }
    
    .sign_leftIn {
        top: 2em;
        right: 0;
        height: calc(100% - 4em);
    }
    
    .sign_leftOut {
        top: 0;
        left: 0;
        height: 100%;
    }
    
    .sign_rightIn,
    .sign_rightOut {
        position: absolute;
        width: 2em;
        background-color: #392d2d;
        transform-origin: right;
        transform: rotateY(90deg);
    }
    
    .sign_rightIn {
        top: 2em;
        left: 0;
        height: calc(100% - 4em);
    }
    
    .sign_rightOut {
        top: 0;
        right: 0;
        height: 100%;
    }
    
    .sign_segment {
        position: absolute;
        top: 2em;
        width: 2em;
        height: 24.5em;
        transform: translateX(-50%) translateZ(1em);
        transform-style: preserve-3d;
    }
    
    .sign_segment:nth-child(1) {
        left: 3em;
        --ad: 0;
    }
    
    .sign_segment:nth-child(2) {
        left: 5em;
        --ad: 1;
    }
    
    .sign_segment:nth-child(3) {
        left: 7em;
        --ad: 2;
    }
    
    .sign_segment:nth-child(4) {
        left: 9em;
        --ad: 3;
    }
    
    .sign_segment:nth-child(5) {
        left: 11em;
        --ad: 4;
    }
    
    .sign_segment:nth-child(6) {
        left: 13em;
        --ad: 5;
    }
    
    .sign_segment:nth-child(7) {
        left: 15em;
        --ad: 6;
    }
    
    .sign_segment:nth-child(8) {
        left: 17em;
        --ad: 7;
    }
    
    .sign_segment:nth-child(9) {
        left: 19em;
        --ad: 8;
    }
    
    .sign_segment:nth-child(10) {
        left: 21em;
        --ad: 9;
    }
    
    .sign_segment:nth-child(11) {
        left: 23em;
        --ad: 10;
    }
    
    .sign_segment:nth-child(12) {
        left: 25em;
        --ad: 11;
    }
    
    .sign_segment:nth-child(13) {
        left: 27em;
        --ad: 12;
    }
    
    .sign_segment:nth-child(14) {
        left: 29em;
        --ad: 13;
    }
    
    .sign_segment:nth-child(15) {
        left: 31em;
        --ad: 14;
    }
    
    .sign_segment:nth-child(16) {
        left: 33em;
        --ad: 15;
    }
    
    .sign_segment:nth-child(17) {
        left: 35em;
        --ad: 16;
    }
    
    .sign_segment:nth-child(18) {
        left: 37em;
        --ad: 17;
    }
    
    .sign_segment:nth-child(19) {
        left: 39em;
        --ad: 18;
    }
    
    .sign_segment:nth-child(20) {
        left: 41em;
        --ad: 19;
    }
    
    .sign_segment:nth-child(21) {
        left: 43em;
        --ad: 20;
    }
    
    .sign_segment:nth-child(22) {
        left: 45em;
        --ad: 21;
    }
    
    .sign_segment:nth-child(23) {
        left: 47em;
        --ad: 22;
    }
    
    .sign_segment:nth-child(24) {
        left: 49em;
        --ad: 23;
    }
    
    .sign_segment::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0.5em;
        width: 1em;
        height: 100%;
        background-image: linear-gradient(90deg, #333, #aaa, #333);
        transform: rotateY(calc(var(--rotateSceneY) * -1));
    }
    
    .sign_segment>div {
        position: absolute;
        top: 0.25em;
        left: 0.05em;
        width: 1.9em;
        height: 24em;
        animation: signflip var(--speed) cubic-bezier(0.5, 0, 0.7, 1.5) infinite;
        overflow: hidden;
        background-position: calc(var(--ad) / 23 * 100%) 50%;
        background-size: 48em 24em;
        text-align: center;
    }
    
    .sign_segment>div:nth-child(1) {
        background-image: url("images/gal-1.jpeg");
        animation-delay: calc((var(--speed) * 0) - var(--speed) + (var(--ad) * 0.1s));
        box-shadow: 0 0 1em #000 7 inset;
    }
    
    .sign_segment>div:nth-child(1)::after {
        background-image: inherit;
    }
    
    .sign_segment>div:nth-child(2) {
        background-image: url("images/gal-2.jpeg");
        animation-delay: calc((var(--speed) * -0.3333333333) - var(--speed) + (var(--ad) * 0.1s));
        box-shadow: 0 0 1em #000 7 inset;
    }
    
    .sign_segment>div:nth-child(2)::after {
        background-image: inherit;
    }
    
    .sign_segment>div:nth-child(3) {
        background-image: url("images/gal-3.jpeg");
        animation-delay: calc((var(--speed) * -0.6666666667) - var(--speed) + (var(--ad) * 0.1s));
        box-shadow: 0 0 1em #000 7 inset;
    }
    
    .sign_segment>div:nth-child(3)::after {
        background-image: inherit;
    }
    
    @keyframes signflip {
    
        0%,
        26.666% {
            transform: rotateY(0deg) translateZ(0.53em);
        }
    
        33.333%,
        60% {
            transform: rotateY(120deg) translateZ(0.53em);
        }
    
        66.666%,
        93.333% {
            transform: rotateY(240deg) translateZ(0.53em);
        }
    
        100% {
            transform: rotateY(360deg) translateZ(0.53em);
        }
    }
    
    .sign_segment>div:nth-child(1)::after {
        position: absolute;
        top: 0;
        left: calc(var(--ad) * -0.2em);
        font-size: 10em;
        width: 4.8em;
        height: 2.4em;
        padding-top: 0.6em;
        background-size: 4.8em 2.4em;
        filter: drop-shadow(0 0 0.1em #fff) drop-shadow(0 0 0.5em #00f);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }
    
    .sign_segment>div:nth-child(2)::after {
        position: absolute;
        top: 0.8em;
        left: calc(var(--ad) * -0.2em);
        font-size: 10em;
        width: 3.4em;
        filter: drop-shadow(0 0 0.1em #000);
        background-size: 5.2em 2.6em;
        background-position: right top;
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }
    
    .sign_segment>div:nth-child(3)::after {
        position: absolute;
        top: 0;
        left: calc(var(--ad) * -0.25em);
        font-size: 8em;
        width: 6em;
        height: 3em;
        padding: 1.5em 0 0 2.1em;
        background-image: url('images/gal-4.jpeg');
        background-size: 100%;
        filter: drop-shadow(-0.025em 0.025em 0.05em #fff);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }
    
    .shadow {
        position: fixed;
        top: 50%;
        left: 50%;
        width: 65em;
        height: 36em;
        transform: translate(-50%, -50%) translateZ(-20em);
        background-color: #000 3;
        filter: blur(3em);
    }
`;

export default function Animation() {
    return (
        <AnimationWrapper>
            <div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>
            <div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>
            <div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>
            <div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>
            <div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>
            <div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>
            <div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>
            <div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>
            <div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>
            <div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>
            <div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>
            <div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>
            <div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>
            <div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>
            <div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>
            <div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>
            <div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>
            <div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>
            <div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>
            <div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div><div className="cell"></div>

            <div className="scene">

                <div className="sign">
                    <div className="shadow"></div>
                    <div className="sign_front"></div>
                    <div className="sign_topIn"></div>
                    <div className="sign_topOut"></div>
                    <div className="sign_bottomIn"></div>
                    <div className="sign_bottomOut"></div>
                    <div className="sign_leftIn"></div>
                    <div className="sign_leftOut"></div>
                    <div className="sign_rightIn"></div>
                    <div className="sign_rightOut"></div>

                    <div className="sign_segments">
                        <div className="sign_segment"><div></div><div></div><div></div></div>
                        <div className="sign_segment"><div></div><div></div><div></div></div>
                        <div className="sign_segment"><div></div><div></div><div></div></div>
                        <div className="sign_segment"><div></div><div></div><div></div></div>
                        <div className="sign_segment"><div></div><div></div><div></div></div>
                        <div className="sign_segment"><div></div><div></div><div></div></div>
                        <div className="sign_segment"><div></div><div></div><div></div></div>
                        <div className="sign_segment"><div></div><div></div><div></div></div>
                        <div className="sign_segment"><div></div><div></div><div></div></div>
                        <div className="sign_segment"><div></div><div></div><div></div></div>
                        <div className="sign_segment"><div></div><div></div><div></div></div>
                        <div className="sign_segment"><div></div><div></div><div></div></div>
                        <div className="sign_segment"><div></div><div></div><div></div></div>
                        <div className="sign_segment"><div></div><div></div><div></div></div>
                        <div className="sign_segment"><div></div><div></div><div></div></div>
                        <div className="sign_segment"><div></div><div></div><div></div></div>
                        <div className="sign_segment"><div></div><div></div><div></div></div>
                        <div className="sign_segment"><div></div><div></div><div></div></div>
                        <div className="sign_segment"><div></div><div></div><div></div></div>
                        <div className="sign_segment"><div></div><div></div><div></div></div>
                        <div className="sign_segment"><div></div><div></div><div></div></div>
                        <div className="sign_segment"><div></div><div></div><div></div></div>
                        <div className="sign_segment"><div></div><div></div><div></div></div>
                        <div className="sign_segment"><div></div><div></div><div></div></div>
                    </div>
                </div>
            </div>
        </AnimationWrapper>
    );
}