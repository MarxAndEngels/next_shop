import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useSelector, useDispatch } from 'react-redux';

export default function MainL({children , title})  {

  const arr = useSelector((state) => state.shop.arr);

  let param = Object.keys(arr).length != 0 ? Object.keys(arr).length : null;
  return (
    <div>
            <Head>
            <title>{title}</title>
            <meta name="keywords" content="ключевые слова" />
            <meta name="description" content="Описание страницы сайта." />
            <meta charSet="utf-8"/>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"/>
         <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/v4-shims.css"/>
        
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        </Head>
      


        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
      <Link href="/">
      <a className="navbar-brand" href="#">Shop.com</a>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarScroll">
        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
          <li className="nav-item">
          <Link href="/">
            <a className="nav-link" aria-current="page" href="#">Home</a>
            </Link>
          </li>
          <Link href="/basket">
            <a className="nav-link" href="#">Basket</a>
            </Link>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              DropDown
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form className="d-flex">
        <Link href="/basket">
          <button className="btn btn-outline-success" type="submit"><i className="fa fa-shopping-basket" aria-hidden="true"></i> Корзина {param}</button>
          </Link>
        </form>
    </div>
      </div>
  </nav>
    </div>
  )
}
