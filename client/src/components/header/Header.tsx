import React from 'react'
import classes from "./header.module.css"
import { Link } from 'react-router-dom'
import Button from '../../ui/button/Button'
import Input from '../../ui/input/Input'

const Header = () => {
  return (
    <header className={classes.header} >
      <Link to={"/"} >
      <svg viewBox="0 0 1024 1024" width={50} version="1.1" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M512.005735 512.005253m-507.004149 0a507.004149 507.004149 0 1 0 1014.008298 0 507.004149 507.004149 0 1 0-1014.008298 0Z" fill="#D9EEE1"></path><path d="M512.005735 1023.999036A512.131428 512.131428 0 0 1 312.707143 40.238242a512.131428 512.131428 0 0 1 398.585714 943.522552 508.713242 508.713242 0 0 1-199.287122 40.238242z m0-1013.985357C235.190027 9.990738 9.99122 235.189545 9.99122 512.005253s225.198807 502.014515 502.014515 502.014516 502.014515-225.210277 502.014516-502.014516S788.809973 9.990738 512.005735 9.990738z" fill="#541018"></path><path d="M512.005735 512.005253m-470.39056 0a470.39056 470.39056 0 1 0 940.78112 0 470.39056 470.39056 0 1 0-940.78112 0Z" fill="#FFFFFF"></path><path d="M490.946039 77.551527a433.329625 433.329625 0 0 0-272.996057 113.99306l272.996057 272.996058zM465.068766 529.887642h-387.700284a433.214921 433.214921 0 0 0 112.891899 274.808385zM528.901668 77.368v388.686741l275.794841-275.794841A433.249332 433.249332 0 0 0 528.901668 77.368zM464.63289 491.943484L191.086252 218.396846a433.364036 433.364036 0 0 0-113.557184 273.546638zM556.671561 491.943484h389.822312a433.272273 433.272273 0 0 0-114.864812-274.877207zM556.247155 529.887642l276.207776 276.207776a433.283743 433.283743 0 0 0 114.130705-276.207776zM490.946039 557.737828L217.009407 831.628579a433.237861 433.237861 0 0 0 273.936632 114.81893zM528.901668 556.212262v390.372892a433.295214 433.295214 0 0 0 276.678063-113.671888z" fill="#4DAA6D"></path><path d="M679.403622 444.530066a13.248338 48.990175 72.39 1 0 93.388783-29.642607 13.248338 48.990175 72.39 1 0-93.388783 29.642607Z" fill="#FFFFFF"></path><path d="M581.165589 344.259874a13.248338 48.990175 24.7 1 0 40.942762-89.01595 13.248338 48.990175 24.7 1 0-40.942762 89.01595Z" fill="#FFFFFF"></path><path d="M409.424124 300.608963a48.990175 13.248338 67.95 1 0 24.558619-9.947264 48.990175 13.248338 67.95 1 0-24.558619 9.947264Z" fill="#FFFFFF"></path><path d="M720.100876 611.14141a48.990175 13.248338 17.68 1 0 8.047054-25.245173 48.990175 13.248338 17.68 1 0-8.047054 25.245173Z" fill="#FFFFFF"></path><path d="M585.766273 731.43783a48.990175 13.248338 65.93 1 0 24.192734-10.806734 48.990175 13.248338 65.93 1 0-24.192734 10.806734Z" fill="#FFFFFF"></path><path d="M404.146404 771.210566a13.248338 48.990175 23.92 1 0 39.727181-89.56506 13.248338 48.990175 23.92 1 0-39.727181 89.56506Z" fill="#FFFFFF"></path><path d="M244.634294 599.821231a13.248338 48.990175 78.87 1 0 96.137508-18.913709 13.248338 48.990175 78.87 1 0-96.137508 18.913709Z" fill="#FFFFFF"></path><path d="M289.523055 442.375943a48.990175 13.248338 17.68 1 0 8.047054-25.245173 48.990175 13.248338 17.68 1 0-8.047054 25.245173Z" fill="#FFFFFF"></path><path d="M510.090175 511.202324m-63.293792 0a63.293792 63.293792 0 1 0 126.587584 0 63.293792 63.293792 0 1 0-126.587584 0Z" fill="#FFFFFF"></path></g></svg>
      </Link>
      <ul>
        <li>
    <Input placeholder='Search....' />
        </li>
        <li>
    <Button  >
      Sign Up
    </Button>
        </li>
        <li>
        <Button  >
      Sign In
    </Button>
        </li>
        <li>
      <Link to={"/my-profile"} >
      <svg fill="#4daa6d" width={40}  viewBox="0 0 512 512" id="_x30_1" version="1.1" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M256,90 c37.02,0,67.031,35.468,67.031,79.219S293.02,248.438,256,248.438s-67.031-35.468-67.031-79.219S218.98,90,256,90z M369.46,402 H142.54c-11.378,0-20.602-9.224-20.602-20.602C121.938,328.159,181.959,285,256,285s134.062,43.159,134.062,96.398 C390.062,392.776,380.839,402,369.46,402z"></path></g></svg>
      </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header